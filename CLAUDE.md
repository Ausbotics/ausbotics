# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**Ausbotics** is a monorepo containing a workflow automation platform with:
- **Backend**: Node.js/Express/TypeScript API for managing workflows, users, and results
- **Frontend**: Next.js React application providing the user interface

The system manages automated workflows, user authentication, result tracking, and integrations with Google Sheets and n8n.

## Project Structure

```
ausbotics/
├── ausbotics-backend/          # Express.js API server
│   ├── src/
│   │   ├── app.ts              # Express app configuration
│   │   ├── server.ts           # Server entry point
│   │   ├── controllers/        # Request handlers
│   │   ├── routes/             # API route definitions
│   │   ├── middlewares/        # Auth, error handling, role-based access
│   │   ├── models/             # Prisma client
│   │   └── utils/              # JWT, Google Sheets, sync utilities
│   ├── prisma/
│   │   ├── schema.prisma       # Database schema
│   │   └── migrations/         # Database migration history
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
└── ausbotics-frontend/         # Next.js React application
    ├── app/                    # Next.js app directory (routes)
    ├── components/             # React components (UI + features)
    ├── lib/                    # Utilities and Supabase client
    ├── hooks/                  # Custom React hooks
    ├── contexts/               # React contexts
    ├── public/                 # Static assets
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    └── tailwind.config.js
```

## Quick Start

### Backend

```bash
cd ausbotics-backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with actual values

# Generate Prisma Client
npx prisma generate

# Sync database schema
npx prisma db push

# Development (with hot-reload)
npm run dev        # Runs on port 4000 (or PORT env var)

# Build
npm run build      # Compiles TypeScript to dist/

# Production
npm start          # Runs compiled dist/server.js
```

### Frontend

```bash
cd ausbotics-frontend

# Install dependencies
npm install

# Development
npm run dev        # Runs on http://localhost:3000

# Build
npm build

# Production
npm start

# Linting
npm run lint       # Check code style and errors
```

## Backend Architecture

### API Structure
- **Routes**: Organized in `src/routes/` by resource (auth, users, workflows, appointments)
- **Controllers**: Handle request logic, return responses
- **Middlewares**: Authentication (`auth.middleware.ts`), error handling (`error.middleware.ts`), role-based access (`role.middleware.ts`)
- **Models**: Prisma client initialization in `src/models/client.ts`

### Key Endpoints

**Authentication** (`/api/auth`):
- `POST /signup` - Register new user
- `POST /login` - Login user

**Users** (`/api/users`):
- `GET /` - Get all users (admin only)

**Workflows** (`/api/workflows`):
- `GET /` - Get user's workflows
- `GET /:id` - Get workflow details with execution results
- `POST /:id/activate` - Activate workflow (superadmin only)
- `POST /:id/deactivate` - Deactivate workflow (superadmin only)

**Appointments** (`/api/appointments`):
- `POST /` - Create appointment
- `GET /` - Get appointments

**Health** (`/api/health`):
- `GET /` - Health check

### Database Schema

**User**: Authentication users with roles (USER, ADMIN, SUPERADMIN)
**Workflow**: Automated workflows with status tracking and Google Sheets integration
**WorkflowExecution**: Individual workflow run instances with execution details
**ExecutionResult**: Aggregated results and metrics for a workflow
**Appointment**: Appointment scheduling data

**Enums**:
- `Role`: USER, ADMIN, SUPERADMIN
- `WorkflowStatus`: Active, Paused, Done, New
- `WorkflowExecutionStatus`: Success, ToolCall, LeadBooked, None
- `AppointmentStatus`: Pending, Confirmed, Cancelled

### Authentication
- Uses JWT (JSON Web Tokens)
- Access tokens in `Authorization` header
- Refresh tokens in HTTP-only cookies (configured in .env)
- Role-based middleware checks authorization level

### Key Utilities
- `src/utils/jwt.ts` - JWT token generation and verification
- `src/utils/sheets.api.ts` - Google Sheets API integration
- `src/utils/syncResults.ts` - Result synchronization logic

## Frontend Architecture

### Technology Stack
- **Framework**: Next.js 15.2.4 (App Router)
- **UI Components**: Shadcn/ui (built on Radix UI + Tailwind CSS)
- **Forms**: React Hook Form + Zod validation
- **Authentication**: Supabase
- **API Integration**: Axios
- **Styling**: Tailwind CSS 4.1.9

### App Structure
Routes organized in `app/` directory using Next.js file-based routing:
- `app/auth/` - Supabase auth callbacks
- `app/sign-in/` - Sign-in page
- `app/signup/` - Sign-up page
- `app/dashboard/` - User dashboard (protected)
- `app/pricing/` - Pricing page
- `app/features/` - Features page
- `app/how-it-works/` - Information pages
- `app/book/`, `app/demo/`, `app/contact/` - Marketing pages
- `app/testing/` - Component testing page

### Component Organization

**UI Components** (`components/ui/`):
Shadcn/ui primitives for consistent design system. All components are composed from Radix UI primitives.

**Page Components** (`components/`):
Page-level and feature components including:
- `protected-route.tsx` - Route guard for authenticated pages
- `user-dashboard.tsx` - Main dashboard
- `contact-form.tsx`, `demo-form.tsx` - Contact/demo forms
- Various feature and pricing sections
- `theme-provider.tsx` - Dark/light mode support

### Key Libraries & Hooks
- **Supabase Client** (`lib/supabase/`): Server and client auth clients
- **Custom Hooks** (`hooks/`): `use-toast`, `use-mobile` for responsive UI
- **Contexts** (`contexts/`): Theme and user contexts

## Environment Variables

### Backend (.env)
```
PORT=4000
DATABASE_URL="postgresql://user:password@host:port/dbname"
JWT_ACCESS_SECRET="your-secret"
JWT_REFRESH_SECRET="your-secret"
FRONTEND_URL="http://localhost:3000"
GOOGLE_API_KEY="google-api-key"
SPREADSHEET_ID="google-sheet-id"
NODE_ENV="development"
```

### Frontend (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL="supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="supabase-anon-key"
# Backend API base URL (if needed)
NEXT_PUBLIC_API_URL="http://localhost:4000"
```

## Development Workflow

### Adding a New Backend Endpoint
1. Create/update route file in `src/routes/`
2. Implement controller method in `src/controllers/`
3. Add middleware for auth/role checks if needed
4. Test with provided `ausbots-api.http` file (VSCode REST Client)

### Adding a New Frontend Page
1. Create route directory in `app/`
2. Add `page.tsx` component
3. Import and compose UI components from `components/`
4. Use `protected-route.tsx` wrapper if page requires authentication

### Database Changes
1. Modify `prisma/schema.prisma`
2. Run: `npx prisma migrate dev --name descriptive_name`
3. Commit migration files
4. Run: `npx prisma generate` to regenerate Prisma Client

## Testing & Validation

- **API Testing**: Use `ausbots-api.http` file with VSCode REST Client extension for manual testing
- **Form Validation**: Frontend uses Zod schemas with React Hook Form
- **Type Safety**: Both backend and frontend use TypeScript with strict mode enabled

## Common Tasks

### Run full backend development stack
```bash
cd ausbotics-backend
npm install
# Set up .env (PostgreSQL connection required)
npx prisma db push
npm run dev
```

### Run frontend development
```bash
cd ausbotics-frontend
npm install
npm run dev
# Visit http://localhost:3000
```

### Run both services in parallel
```bash
# Terminal 1
cd ausbotics-backend && npm run dev

# Terminal 2
cd ausbotics-frontend && npm run dev
```

### Prisma Database Commands
```bash
cd ausbotics-backend

# Push schema changes (development)
npx prisma db push

# Create migration
npx prisma migrate dev --name migration_name

# Reset database (development only)
npx prisma db push --force-reset

# Open Prisma Studio (interactive DB viewer)
npx prisma studio
```

### Check TypeScript Compilation
```bash
# Backend
cd ausbotics-backend && npx tsc --noEmit

# Frontend
cd ausbotics-frontend && npx tsc --noEmit
```

## Important Notes

- **Database**: Backend requires PostgreSQL (configured via DATABASE_URL)
- **Frontend Auth**: Uses Supabase for authentication (separate from backend JWT)
- **CORS**: Configured to allow requests from FRONTEND_URL
- **Port Configuration**: Backend defaults to port 4000, frontend to 3000
- **TypeScript**: Both apps use strict mode for type safety
- **Prisma Migrations**: Always create named migrations for schema changes; never use `--skip-generate`
