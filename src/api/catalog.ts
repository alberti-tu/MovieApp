import { MovieRequest } from "../models/movies"
import { Api } from "../services/api"

const api = new Api('https://jsonfakery.com')

export function getMovies(page: number) {
  return api.get<MovieRequest>('/movies/paginated', { page })
}