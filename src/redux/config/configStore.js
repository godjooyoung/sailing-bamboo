/* 0.ToolKit을 사용해서 스토어와 리듀서 선언하기 */
import { configureStore } from "@reduxjs/toolkit"
import componentMode from "../modules/componentMode";

const store = configureStore({
    reducer : {
        componentMode
    },
    devTools: false
})

export default store
