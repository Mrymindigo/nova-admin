import { axiosInstance} from "../api/axiosInstance";
import type {User} from '../../types/user'

export const getUsers = async () : Promise<User[]> =>{
    const {data} = await axiosInstance.get<User[]>('/users');
    return data
}