// axios 요청이 들어가는 모든 모듈
import axios from "axios"
import { getCookie } from "../cookie/Cookie"
// 헤더정보

// 데이터 CRUD 인스턴스
const instance = axios.create({
    baseURL : process.env.REACT_APP_CLIENT_URL
})

// 회원가입, 로그인, jwt 토큰 인스턴스
const otherInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
        'authorization': 'Bearer '+ getCookie("token") 
    }
})


/* 요청 */
instance.interceptors.request.use(
    function(config){
        return config
    },
    function(error){
        console.log("ERROR_요청 에러발생")
        return Promise.reject(error)
    },
)

/* 응답 */
instance.interceptors.response.use(
    function(response){
        return response
    },
    function(error){
        console.log("ERROR_응답 에러발생")
        return Promise.reject(error)
    },
)

/* 응답 */
otherInstance.interceptors.response.use(
    function(response){
        console.log("1.외부 응답 성공")
        console.log("2.resposne" + response)
        return response
    },
    function(error){
        console.log("1.외부 ERROR_응답 에러발생")
        console.log("2.apiConfig, error : " + error)
        return Promise.reject(error)
    },
)


export { otherInstance }
export default instance