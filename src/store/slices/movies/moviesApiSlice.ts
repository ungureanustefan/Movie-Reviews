import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TypeMovieCompanies,
  TypeMovies,
  TypeReview,
} from "../../../types/movieTypes";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getMovies: builder.query<TypeMovies, string>({
      query: () => "/movies",
      providesTags: ["Movies"],
    }),
    getMovieCompanies: builder.query<TypeMovieCompanies, string>({
      query: () => "/movieCompanies",
      providesTags: ["Movies"],
    }),
    addReview: builder.mutation<TypeReview, Partial<TypeReview>>({
      query(body) {
        return {
          url: `/submitReview`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Movies"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMoviesQuery,
  useGetMovieCompaniesQuery,
  useAddReviewMutation,
} = moviesApi;
