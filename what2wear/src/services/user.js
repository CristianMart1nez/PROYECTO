import { api } from "./config";

export const userRegister = async (body) => {
    const {data} = await api.post('auth/register', body)
    return data
}

export const userLogin = async () => {
    const {data} = await api.post('auth/login')
    return data
}