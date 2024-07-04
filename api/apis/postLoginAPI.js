import http from '../http'
export const postLoginAPI = (data) => {
    return http({
        url: '/login',
        method: 'POST',
        data
    })
}