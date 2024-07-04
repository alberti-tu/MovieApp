export type MovieRequest = {
  current_page: number
  data: Movie[]
  first_page_url: string,
  from: number,
  last_page: number,
  last_page_url: string,
  next_page_url: string,
  path: string,
  per_page: number,
  prev_page_url: null,
  to: number,
  total: number
}

export type Movie = {
  id: string,
  movie_id: number,
  original_title: string,
  original_language: string,
  overview: string,
  popularity: number,
  poster_path: string,
  backdrop_path: string,
  release_date: string,
  vote_average: number,
  vote_count: number,
  adult: number,
  created_at: string,
  updated_at: string
  casts: Cast[]
}

export type Cast = {
  id: string
  movie_id: number,
  name: string
  original_name: string
  popularity: string
  profile_path: string
  character: string
  created_at: string
  updated_at: string
}