import { google } from "googleapis";
import { configDotenv } from "dotenv";

configDotenv();

const serviceAccount = {
  type: process.env.GOOGLE_TYPE,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: process.env.GOOGLE_AUTH_URI,
  token_uri: process.env.GOOGLE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
};

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

export const fetchSheetData = async (
  sheetName: string | null,
  spreadSheetUrl: string
) => {
  console.log("Starting fetchSheetData...");
  const spreadSheetId = getSheetIdFromUrl(spreadSheetUrl);
  if (!spreadSheetId) {
    console.error("Could not extract spreadsheet ID from URL");
    return [];
  }

  try {
    const meta = await sheets.spreadsheets.get({
      spreadsheetId: spreadSheetId,
    });
    const sheetTitles = meta.data.sheets?.map(
      (s) => s.properties?.title
    ) as string[];

    const targetSheet =
      sheetName && sheetTitles.includes(sheetName)
        ? sheetName
        : sheetTitles[0] ?? null;

    if (!targetSheet) {
      console.error("No valid sheet found.");
      return [];
    }

    const range = `'${targetSheet.replace(/'/g, "''")}'`;
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadSheetId,
      range,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) return [];

    const headers = rows[0];
    const data = rows.slice(1).map((row) => {
      const obj: Record<string, any> = {};
      headers.forEach((header, i) => (obj[header.trim()] = row[i] || ""));
      return obj;
    });

    return data;
  } catch (err: any) {
    console.error("Error fetching sheet data:", err.message);
    return [];
  }
};

function getSheetIdFromUrl(url: string): string | null {
  const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : null;
}
