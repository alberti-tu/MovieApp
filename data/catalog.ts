import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getMovies } from '../api/catalog'
import { RootState } from '../services/store'
import { DataState } from '../models/global'
import { Movie } from '../models/movies'

export const fetchMovies = createAsyncThunk(
  'catalog/getMovies',
  async (payload?: { page?: number, reset?: boolean }) => {
    return await getMovies(payload?.page ?? 1)
})

interface CatalogState {
  movies: DataState<Movie[]>
}

const initialState: CatalogState = {
  movies: { isLoading: false }
}

export const slice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        if (action.meta.arg?.reset || !state.movies.data?.length) {
          state.movies.data = []
        }
        state.movies.isLoading = true
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies.data = state.movies.data?.concat(action.payload.data ?? [])
        state.movies.isLoading = false
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movies.isLoading = false
      })
  }
})

export const selectCatalogMovies = (state: RootState): Movie[] => state.catalog.movies.data
export const selectCatalogMoviesIsLoading = (state: RootState): boolean => state.catalog.movies.isLoading

export default slice