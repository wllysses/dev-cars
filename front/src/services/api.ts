import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3333/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getAllCars = async () => {
    const response = await api.get('/cars')
    return await response.data
}