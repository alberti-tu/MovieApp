import "react-native"
import * as React from "react"

import { render } from "@testing-library/react-native"

import { Movie } from "../src/models/movies"

import mock from "../src/constants/mock.json"

import CastCard from "../src/components/cast-card/cast"
import MovieCard from "../src/components/movie-card/movie"

let movies: Movie[]

beforeAll(async () => {
  movies = (mock.data as unknown) as Movie[]
})

it("Movie card", async () => {
  render(<MovieCard data={movies?.[0]} />)
})

it("Cast card", async () => {
  render(<CastCard data={movies?.[0]?.casts?.[0]} />)
})