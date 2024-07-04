import http from '../http'
export const getVerifyCodeAPI = (data) => {
    return http({
        url: `/code`,
        method: 'GET',
        data
    })
}