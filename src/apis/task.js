import axiosService from '../commons/axiosService'
import { API_ENDPOINT } from '../constants'
import qs from "query-string"
const url = 'tasks';
const urlUpdate = 'update'
const urlDelete = 'delete'

export const getList = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`)
}
export const addTask = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, data)
}
export const updateTask = (data, taskId) => {
    return axiosService.put(`${API_ENDPOINT}/${urlUpdate}/${taskId}`, data)
}
export const deleteTask = (taskId) => {
    return axiosService.delete(`${API_ENDPOINT}/${urlDelete}/${taskId}`)
}