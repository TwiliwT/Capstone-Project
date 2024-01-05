const API_URl = "https://fakestoreapi.com";

export async function loginUser(userObj) {
  try {
    console.log(userObj);
    const response = await fetch(`${API_URl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userObj.username,
        password: userObj.password,
      }),
    });
    const json = await response.json();
    return json.token;
  } catch (error) {
    console.error(error);
  }
}
