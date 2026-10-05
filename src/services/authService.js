const LOGIN_URL = "https://dummyjson.com/auth/login";

export async function loginUser(username, password) {
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    const data = await response.json();
    return data.accessToken;
  } catch (err) {
    console.error("Login failed:", err.message);
    throw err;
  }
}