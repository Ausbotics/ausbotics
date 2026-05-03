import { API_BASE_URL } from "./constants";
import {
  AppointmentDto,
  AppointmentStatus,
  UserDto,
  WorkflowDto,
} from "./types";

export type Role = "USER" | "ADMIN" | "SUPERADMIN";

interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}/api${endpoint}`;

  const token = localStorage.getItem("accessToken");
  const headers = new Headers(options.headers || {});

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: "include",
    });

    const data = (await response.json().catch(() => ({}))) as T & {
      message?: string;
    };

    if (!response.ok) {
      return {
        error: data.message || "An error occurred",
        ...data,
      };
    }

    return { data };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Network error occurred",
    };
  }
}

export const authApi = {
  async login(credentials: { email: string; password: string }) {
    const response = await fetchApi<{
      accessToken: string;
      refreshToken: string;
      user: UserDto;
    }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });

    if (response.data?.accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return response;
  },

  async signup(userData: {
    email: string;
    password: string;
    fullName?: string;
  }) {
    const response = await fetchApi<{
      message: string;
      newuser: UserDto;
    }>("/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    // if (response.data) {
    //   return this.login({
    //     email: userData.email,
    //     password: userData.password,
    //   });
    // }
    //@ts-ignore
    return response.data ? response.data?.newuser : null;
  },

  async refreshToken() {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return { error: "No refresh token available" };
    }

    const response = await fetchApi<{
      accessToken: string;
      refreshToken: string;
    }>("/auth/refresh-token", {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
      credentials: "include",
    });

    if (response.data?.accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
    }

    return response;
  },

  async logout() {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      await fetchApi("/auth/logout", {
        method: "POST",
        body: JSON.stringify({ refreshToken }),
      });
    }

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  },

  async getCurrentUser() {
    return fetchApi<UserDto>("/auth/me");
  },
  async getAlluser() {
    return fetchApi<{
      data: {
        users: UserDto[];
      };
    }>("/users");
  },
};

export const workflowApi = {
  async getAll() {
    const data = fetchApi<{ data: { workflows: WorkflowDto[] } }>("/workflows");
    return (await data).data?.data.workflows;
  },

  async getMyWorkflows() {
    const data = await fetchApi<{ myWorkflows: WorkflowDto[] }>(
      "/workflows/myworkflows"
    );
    console.log("my workflows data", data.data?.myWorkflows);
    //@ts-ignore
    return (await data).data?.myWorkflows;
  },
  async getById(id: string) {
    return fetchApi<WorkflowDto>(`/workflows/${id}`);
  },

  async create(workflow: { name: string; description: string }) {
    return fetchApi<{ id: string }>("/workflows", {
      method: "POST",
      body: JSON.stringify(workflow),
    });
  },

  async update(
    id: string,
    updates: Partial<Pick<WorkflowDto, "status" | "progress">>
  ) {
    return fetchApi(`/workflows/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
    });
  },

  async delete(id: string) {
    return fetchApi(`/workflows/${id}`, { method: "DELETE" });
  },
};

export const appointmentApi = {
  async getAll() {
    return fetchApi<{
      data: {
        appointments: AppointmentDto[];
      };
    }>("/appointments");
  },

  async book(appointment: Omit<AppointmentDto, "id" | "status" | "createdAt">) {
    return fetchApi<{ id: string }>("/appointments", {
      method: "POST",
      body: JSON.stringify(appointment),
    });
  },

  async updateStatus(id: string, status: AppointmentStatus) {
    return fetchApi(`/appointments/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  },
};
export const userApi = {
  async getProfile() {
    return fetchApi<UserDto>("/users/me");
  },

  async updateProfile(updates: { fullName?: string; email?: string }) {
    return fetchApi<UserDto>("/users/me", {
      method: "PATCH",
      body: JSON.stringify(updates),
    });
  },
};
