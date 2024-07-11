import axios, { AxiosInstance, AxiosResponse } from 'axios'

export const API_URL = 'http://localhost:3000/api/v1/'

class ApiInstance {
    private axios: AxiosInstance

    constructor() {
        this.axios = axios.create({
            baseURL: API_URL,
        })
    }

    async get<T>(endpoint: string): Promise<T> {
        const response: AxiosResponse<T> = await this.axios.get(endpoint)
        return response.data
    }
}

export const apiInstance = new ApiInstance()
