import { json } from "react-router-dom";

const API_URl = "https://fakestoreapi.com";

//Products
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

//User
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

export async function registerUser(userObj) {
  console.log(userObj);
  try {
    const response = await fetch(`${API_URl}/users`, {
      method: "POST",
      body: JSON.stringify({
        email: userObj.email,
        username: userObj.username,
        password: userObj.password,
        name: {
          firstname: userObj.name.firstname,
          lastname: userObj.name.lastname,
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: userObj.phone,
      }),
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {}
}
