import axios from "axios"

export class Api {
  private url?: string = undefined

  public constructor (url: string) {
    this.url = url
  }

  public async get<T>(path: string, params?: Record<string, unknown>) {
    return new Promise<T>((resolve, reject) => {
      axios.get(`${this.url}${path}`, { params })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }

  public async post<T>(path: string, body?: Record<string, unknown>) {
    return new Promise<T>((resolve, reject) => {
      axios.post(`${this.url}${path}`, body)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }
}