import { apiSlice } from "./apiSlice";
import { MOVIE_URL, UPLOAD_URL } from "../constants";

// Extend the apiSlice with additional endpoints related to movies
export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to fetch all movies
    getAllMovies: builder.query({
      query: () => `${MOVIE_URL}/all-movies`,
      credentials: "include",
    }),
    // Endpoint to create a new movie
    createMovie: builder.mutation({
      query: (newMovie) => ({
        url: `${MOVIE_URL}/create-movie`,
        method: "POST",
        body: newMovie,
        credentials: "include",
      }),
    }),
    // Endpoint to update a specific movie by ID
    updateMovie: builder.mutation({
      query: ({ id, updatedMovie }) => ({
        url: `${MOVIE_URL}/update-movie/${id}`,
        method: "PUT",
        body: updatedMovie,
        credentials: "include",
      }),
    }),
    // Endpoint to add a review to a specific movie
    addMovieReview: builder.mutation({
      query: ({ id, rating, comment }) => ({
        url: `${MOVIE_URL}/${id}/reviews`,
        method: "POST",
        body: { rating, id, comment },
        credentials: "include",
      }),
    }),
    // Endpoint to delete a comment from a movie
    deleteComment: builder.mutation({
      query: ({ movieId, reviewId }) => ({
        url: `${MOVIE_URL}/delete-comment`,
        method: "DELETE",
        body: { movieId, reviewId },
        credentials: "include",
      }),
    }),
    // Endpoint to delete a movie by ID
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `${MOVIE_URL}/delete-movie/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    // Endpoint to fetch a specific movie by ID
    getSpecificMovie: builder.query({
      query: (id) => `${MOVIE_URL}/specific-movie/${id}`,
      credentials: "include",
    }),
    // Endpoint to upload an image (e.g., for movie posters)
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: formData,
        credentials: "include",
      }),
    }),
    // Endpoint to fetch new movies
    getNewMovies: builder.query({
      query: () => `${MOVIE_URL}/new-movies`,
      credentials: "include",
    }),
    // Endpoint to fetch top-rated movies
    getTopMovies: builder.query({
      query: () => `${MOVIE_URL}/top-movies`,
      credentials: "include",
    }),
    // Endpoint to fetch random movies
    getRandomMovies: builder.query({
      query: () => `${MOVIE_URL}/random-movies`,
      credentials: "include",
    }),
  }),
});

// Export hooks generated by the endpoints for use in components
export const {
  useGetAllMoviesQuery,
  useCreateMovieMutation,
  useUpdateMovieMutation,
  useAddMovieReviewMutation,
  useDeleteCommentMutation,
  useGetSpecificMovieQuery,
  useUploadImageMutation,
  useDeleteMovieMutation,
  //
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} = moviesApiSlice;