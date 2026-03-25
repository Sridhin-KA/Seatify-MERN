// src/app/apiSlice.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
});

// 🔥 custom wrapper to log requests
const baseQueryWithLog = async (args, api, extraOptions) => {
  console.log("API REQUEST:", args);

  const result = await baseQuery(args, api, extraOptions);

  console.log("API RESPONSE:", result);

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithLog,
  endpoints: () => ({}),
});