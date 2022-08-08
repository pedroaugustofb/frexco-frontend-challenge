import axios from 'axios'

const ApiBaseUrl = axios.create({
  baseURL: 'https://www.fruityvice.com/api/'
})

export const FruityViceApi = {
  loadFruits: () => ApiBaseUrl.get('/fruit/all')
}