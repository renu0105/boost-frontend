"use server";

import axios from "axios";
import { NextResponse } from "next/server";

// validate csrf token
const validateToken = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/csrf_token`
    );

    return data;
  } catch (error) {
    return { error: "Failed to validate token. Please try again!" };
  }
};

// get categories
export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
    );

    return data;
  } catch (error) {
    return { error: "Failed to fetch categories. Please try again!" };
  }
};

// add category
export const addCategory = async (categoryData) => {
  // const token = await validateToken();

  // if (token.error) {
  //   return { error: token.error };
  // }

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
      {
        name: categoryData.name,
        description: categoryData.description,
        is_active: categoryData.is_active,
      },
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to add category:", errorMessage);

    return {
      error: errorMessage || "An error occurred while adding the category.",
    };
  }
};

// update category
export const updateCategory = async (categoryData) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories/${categoryData.id}`,
      {
        name: categoryData.name,
        description: categoryData.description,
        is_active: categoryData.is_active,
      },
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to update category:", errorMessage);

    return {
      error: errorMessage || "An error occurred while updating the category.",
    };
  }
};

// delete category
export const deleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories/${categoryId}`,
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to delete category:", errorMessage);

    return {
      error: errorMessage || "An error occurred while deleting the category.",
    };
  }
};

// get attribute
export const fetchAttribute = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/product_attribute_categories`
    );

    return data;
  } catch (error) {
    return { error: "Failed to fetch attribute. Please try again!" };
  }
};

// ADD ATTRIBUTE
export const addAttribute = async (attributeData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/product_attribute_categories`,
      { name: attributeData.name },
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to add attribute:", errorMessage);

    return {
      error: errorMessage || "An error occurred while adding the attribute.",
    };
  }
};

// update attribute
export const updateAttribute = async (attributeData) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/product_attribute_categories/${attributeData.id}`,
      { name: attributeData.name },
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to update attribute:", errorMessage);

    return {
      error: errorMessage || "An error occurred while updating the attribute.",
    };
  }
};

// delete attribute
export const deleteAttribute = async (attributeId) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/product_attribute_categories/${attributeId}`,
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to delete attribute:", errorMessage);

    return {
      error: errorMessage || "An error occurred while deleting the attribute.",
    };
  }
};

// get all games
export const fetchAllGames = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products`
    );

    return data;
  } catch (error) {
    return { error: "Failed to fetch all games. Please try again!" };
  }
};

// get game by id
export const fetchGameById = async (gameId) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${gameId}`
    );

    return data;
  } catch (error) {
    return { error: "Failed to fetch game. Please try again!" };
  }
};

// add game
export const addGame = async (gameData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
      {
        name: gameData.name,
        description: gameData.description,
        price: gameData.price,
        image: gameData.image,
        is_priority: gameData.is_priority,
        tax: gameData.tax,
        is_active: gameData.is_active,
        most_popular: gameData.most_popular,
        tag_line: gameData.tag_line,
        bg_image: gameData.bg_image,
        primary_color: gameData.primary_color,
        secondary_color: gameData.secondary_color,
        features: gameData.features,
        category_id: gameData.category_id,
        product_attribute_category_id: gameData.product_attribute_category_id,
        platform_ids: gameData.platform_ids,
      },
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to add game:", errorMessage);

    return {
      error: errorMessage || "An error occurred while adding the game.",
    };
  }
};

// update game
export const updateGame = async (gameData, gameId) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${gameId}`,
      {
        name: gameData.name,
        description: gameData.description,
        price: gameData.price,
        image: gameData.image,
        is_priority: gameData.is_priority,
        tax: gameData.tax,
        is_active: gameData.is_active,
        most_popular: gameData.most_popular,
        tag_line: gameData.tag_line,
        bg_image: gameData.bg_image,
        primary_color: gameData.primary_color,
        secondary_color: gameData.secondary_color,
        features: gameData.features,
        category_id: gameData.category_id,
        product_attribute_category_id: gameData.product_attribute_category_id,
        platform_ids: gameData.platform_ids,
      },
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to update game:", errorMessage);

    return {
      error: errorMessage || "An error occurred while updating the game.",
    };
  }
};

// delete game
export const deleteGame = async (gameId) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${gameId}`,
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to delete game:", errorMessage);

    return {
      error: errorMessage || "An error occurred while deleting the game.",
    };
  }
};

// get platforms
export const fetchPlatforms = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/platforms`
    );

    return data;
  } catch (error) {
    console.log("error platforms ", error);
    return { error: "Failed to fetch platforms. Please try again!" };
  }
};

// add platform
export const addPlatform = async (platformData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/platforms`,
      { name: platformData.name },
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to add platform:", errorMessage);

    return {
      error: errorMessage || "An error occurred while adding the platform.",
    };
  }
};

// update platform
export const updatePlatform = async (platformData) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/platforms/${platformData.id}`,
      { name: platformData.name },
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to update platform:", errorMessage);

    return {
      error: errorMessage || "An error occurred while updating the platform.",
    };
  }
};

// delete platform
export const deletePlatform = async (platformId) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/platforms/${platformId}`,
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to delete platform:", errorMessage);

    return {
      error: errorMessage || "An error occurred while deleting the platform.",
    };
  }
};

// login user
export const loginUser = async (email, password) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
      { email, password }
    );

    const { token } = data;

    if (token) {
      const response = NextResponse.next(); // create a Next.js response
      response.cookies.set({
        name: "token",
        value: token,
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        httpOnly: true,
        secure: true,
      });
    }

    return data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to login user:", errorMessage);

    return {
      error: errorMessage || "An error occurred while logging in the user.",
    };
  }
};

// current user
export const fetchCurrentUser = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/current_user`,
      {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.obfHmpuEbPp-cMNGoQUmVpMqSQ5B7TOTmjKoHhetb58",
      }
    );

    return data;
  } catch (error) {
    console.log("error fetchCurrentUser ", error);
    return { error: "Failed to fetch current user. Please try again!" };
  }
};

// get all users
export const fetchAllUsers = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users`
    );

    return data;
  } catch (error) {
    return { error: "Failed to fetch all users. Please try again!" };
  }
};

// get user by id
export const fetchUserById = async (userId) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`
    );

    return data;
  } catch (error) {
    return { error: "Failed to fetch user. Please try again!" };
  }
};

// update user
export const updateUser = async (userData) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userData.id}`,
      {
        name: userData.name,
        description: userData.description,
        is_active: userData.is_active,
      },
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to update user:", errorMessage);

    return {
      error: errorMessage || "An error occurred while updating the user.",
    };
  }
};

// delete user
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`,
      { headers: { "X-CSRF-Token": process.env.NEXT_PUBLIC_API_TOKEN } }
    );

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to delete user:", errorMessage);

    return {
      error: errorMessage || "An error occurred while deleting the user.",
    };
  }
};

// create new user
export const createUser = async ({
  email,
  password,
  firstName,
  lastName,
  image,
}) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/create`,
      {
        email: email,
        password: password,
        image: image,
        first_name: firstName,
        last_name: lastName,
        role: "customer",
      }
    );

    return data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    console.error("Failed to sign in user:", errorMessage);

    return {
      error: errorMessage || "An error occurred while signing in the user.",
    };
  }
};

// get all orders
export const fetchAllOrders = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders`
    );

    return data;
  } catch (error) {
    return { error: "Failed to fetch all orders. Please try again!" };
  }
};
