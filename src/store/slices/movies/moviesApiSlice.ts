import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TypeMovieCompanies,
  TypeMovies,
  TypeReview,
} from "../../../types/movieTypes";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getMovies: builder.query<TypeMovies, string>({
      query: () => "/movies",
    }),
    getMovieCompanies: builder.query<TypeMovieCompanies, string>({
      query: () => "/movieCompanies",
    }),
    addReview: builder.mutation<{ message: string }, Partial<TypeReview>>({
      query(body) {
        return {
          url: `/submitReview`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieCompaniesQuery,
  useAddReviewMutation,
} = moviesApi;
