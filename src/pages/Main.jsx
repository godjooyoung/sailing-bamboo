import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/PostList';
import Register from '../components/Register';
import Navbar from '../components/common/Navbar';
import { registerIsActive } from '../redux/modules/componentMode';
import * as cs from '../style/commonStyle';
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query"; 
import { chkToken } from "../axios/api/user"
import { getCookie, removeCookie } from '../cookie/Cookie';
import { useEffect } from 'react';

function Main() {

    const isActive = useSelector((state)=>{
        return state.componentMode.registerIsActive
    })
    const dispatcher = useDispatch()
    const activeBtnOnClickHandler = () =>{
        dispatcher(registerIsActive(true))
    }
    const navigate = useNavigate();
    const [isFirst, setIsFist] = useState(false)
    // 리액트 쿼리 관련
    const hasToken = getCookie("token")
    const { isError } = useQuery('chkToken', ()=>(chkToken(hasToken)), {
        refetchOnMount : 'always',
        retry : 1,
        enabled: hasToken!==''?true:false
    })

    useEffect(() => {
        if(isFirst&&isError){
            alert('로그인 세션이 만료되었습니다. 재로그인 해주세요.')
            removeCookie("token")
            navigate('/'); //로그인 페이지로 이동
        }
        if (!hasToken) {
            alert(`로그인 후 이용 가능합니다.`)
            navigate('/'); //로그인 페이지로 이동
        }
        setIsFist(true) // 최초 랜더링때는 세션여부를 체크하지 않기 위해서 추가
    },[isError])

    return (
        <cs.Main>
            <Navbar type="goPost" alt="나도외치기" width="209" height="58" onClick={activeBtnOnClickHandler}></Navbar>   
            <PostList/>
            {isActive?<Register/>:<></>}
        </cs.Main>
    );
}

export default Main;
