// axios 요청이 들어가는 모든 모듈
import axios from "axios"
import { getCookie } from "../cookie/Cookie"

// 데이터 CRUD 인스턴스
const instance = axios.create({
    baseURL : process.env.REACT_APP_CLIENT_URL
})

// 회원가입, 로그인, jwt 토큰 인스턴스
const otherInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        'Origin': 'http://3.38.191.164/',
        'Content-Type': "application/json",
        'authorization': 'Bearer '+ getCookie("token"),
        'x-requested-with': 'bamboo-forest'
    }
})

/* 요청 */
instance.interceptors.request.use(
    function(config){
        return config
    },
    function(error){
        return Promise.reject(error)
    },
)

/* 응답 */
instance.interceptors.response.use(
    function(response){
        return response
    },
    function(error){
        return Promise.reject(error)
    },
)

/* 응답 */
otherInstance.interceptors.response.use(
    function(response){
        return response
    },
    function(error){
        return Promise.reject(error)
    },
)

export { otherInstance }
export default instance