import axios from 'axios'

const HTTPclient = axios.create({
  baseURL: process.env.API
})

export { HTTPclient }
