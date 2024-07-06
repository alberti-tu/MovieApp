import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { getMovies } from "../api/catalog"
import { RootState } from "../services/store"
import { DataState } from "../models/global"
import { Movie } from "../models/movies"

export const fetchMovies = createAsyncThunk(
  'catalog/getMovies',
  async (payload?: { page?: number, reset?: boolean }) => {
    return await getMovies(payload?.page ?? 1)
})

interface CatalogState {
  movies: DataState<Movie[]>
  wishList: Record<string, boolean>
}

const initialState: CatalogState = {
  movies: { isLoading: false },
  wishList: {}
}

export const slice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    updateWishItem(state, action: PayloadAction<string>) {
      state.wishList[action.payload] = !state.wishList[action.payload]
    },
  },
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

export const { updateWishItem } = slice.actions

export const selectCatalogMovies = (state: RootState): Movie[] => state.catalog.movies.data
export const selectCatalogMoviesIsLoading = (state: RootState): boolean => state.catalog.movies.isLoading
export const selectCatalogMoviesById = (state: RootState, id: string): Movie => state.catalog.movies.data?.find((item: Movie) => item.id === id)
export const selectCatalogWishList = (state: RootState, id: string): boolean => state.catalog.wishList
export const selectCatalogWishListById = (state: RootState, id: string): boolean => state.catalog.wishList[id]

export default slice