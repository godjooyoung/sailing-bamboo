import { useState, useCallback } from "react"

const useHelpMsg = (initialData, helpMsgArr, idx) => {
    const [data, setData] = useState(initialData)

    const setHelpMsg = useCallback(() => {
        setData(helpMsgArr[idx])
    }, []);

    const reset = useCallback(()=> setData(initialData),[])
    console.log("reset", reset)
    console.log("data", data)
    console.log("arr", helpMsgArr)
    console.log("idx", idx)
    console.log(typeof idx)
    
    return [data, setHelpMsg, reset]
}

export default useHelpMsg;
