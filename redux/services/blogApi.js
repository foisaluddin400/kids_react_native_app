import { api } from '../store/api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
     getAllBlog: builder.query({
      query: () => ({
        url: "blog",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: 'signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetAllBlogQuery, useSignupMutation } = authApi;