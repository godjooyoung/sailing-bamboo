import {createSlice} from '@reduxjs/toolkit'
/* 초기상태 설정 */
const initialState = {
    registerIsActive : false,
    postIsEditMode : false,
    pwConfirmIsActive : false,
}
const componentModeSlice = createSlice({
    name: 'componentMode',
    initialState: initialState,
    reducers: {
        registerIsActive: (state, payload) => {
            state.registerIsActive = payload.payload
            console.log("Register.jsx is Active? ", state.registerIsActive)
        },
        postIsEditMode: (state, payload) => {
            state.postIsEditMode = payload.payload
            console.log("Post.jsx is EditMode? ", state.postIsEditMode)
        },
        pwConfirmIsActive: (state, payload) => {
            state.pwConfirmIsActive = payload.payload
            console.log("PwConfirm.jsx is Active? ", state.pwConfirmIsActive)
        }
    }
})


export const { registerIsActive, postIsEditMode, pwConfirmIsActive } = componentModeSlice.actions
export default componentModeSlice.reducer