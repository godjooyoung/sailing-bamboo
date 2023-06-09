import { otherInstance } from "../apiConfig"

// 회원가입
export const addUser = async (inputValue) => {
    const response = await otherInstance.post(`/register/`, inputValue)
        return response
}

// 로그인
export const loginUser = async (inputValue) => {
    const response = await otherInstance.post(`/login/`, inputValue)
        return response
}

// 토큰정보확인
export const chkToken = async (token) => {
    const response = await otherInstance.get(`/user/`, {
        headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+ token,
        'x-requested-with': 'bamboo-forest',
        'x-cors-api-key': 'temp_77c33b11fb4f65211c70c8e6ddcc8768'
    }})
    return response
}



