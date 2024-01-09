const API_URl = "https://fakestoreapi.com";

export async function getAllProducts() {
  try {
    const response = await fetch(`${API_URl}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleProduct(id) {
  try {
    const response = await fetch(`${API_URl}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

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
