import http from '../http'
export const getRoomList = (data) => {
    return http({
        url: '/room',
        method: 'GET',
        data
    })
}