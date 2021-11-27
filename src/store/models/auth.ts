export interface User {
  _id: string
  name: string
  emial: string
  role: number
}

export interface Jwt {
  token: string
  user: User
}
