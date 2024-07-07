import "react-native"
import * as React from "react"

import { render } from "@testing-library/react-native"

import { getMovies } from "../src/api/catalog"
import MovieCard from "../src/components/movie-card/movie"
import { Movie } from "../src/models/movies"
import CastCard from "../src/components/cast-card/cast"

let movies: Movie[]

beforeAll(async () => {
  const response = await getMovies(1)
  movies = response.data
});

it("API service is alive", async () => {
  expect(movies?.length).toBe(20)
})

it("Movie card", async () => {
  render(<MovieCard data={movies?.[0]} />)
})

it("Movie detail", async () => {
  render(<MovieCard data={movies?.[0]} />)
})

it("Cast card", async () => {
  render(<CastCard data={movies?.[0]?.casts?.[0]} />)
})