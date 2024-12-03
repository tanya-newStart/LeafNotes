export const makeRequest = async (endpoint, userData = {}, method = "POST") => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("Base URL not found");
  }
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body:
        method !== "GET" && Object.keys(userData).length > 0
          ? JSON.stringify(userData)
          : undefined,
    });

    if (response.status === 204) {
      return null;
    }

    const result =
      response.headers.get("Content-Length") > 0 ? await response.json() : null;

    if (!response.ok) {
      console.error("Request failed:", {
        endpoint,
        method,
        status: response.status,
        userData,
        responseText: await response.text(),
      });
      throw new Error(result?.error || "Something went wrong");
    }

    return result;
  } catch (error) {
    if (!window.navigator.onLine || error.message === "Failed to fetch") {
      throw new Error(
        "Unable to connect to the server. Please try again later."
      );
    }
    throw error;
  }
};
