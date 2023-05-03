import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Post from '../components/Post';
import Navbar from '../components/common/Navbar';
import { postIsEditMode, pwConfirmIsActive, registerIsActive } from '../redux/modules/componentMode';
import * as cs from '../style/commonStyle';
import { useQuery } from "react-query"; 
import { chkToken } from "../axios/api/user"
import { getCookie, removeCookie } from '../cookie/Cookie';
import { useState, useEffect } from 'react';

function Details() {
     // hooks
    const navigate = useNavigate()
    const dispatcher = useDispatch()

     // [목록으로 돌아가기] 버튼 클릭. 이동 함수
    const btnOnClickEventHandelr = () => {
        navigate('/main');
        dispatcher(registerIsActive(false))
        dispatcher(pwConfirmIsActive(false))
        dispatcher(postIsEditMode(false))
    }

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
        setIsFist(true) // 최초 랜더링때는 세션여부를 체크하지 않기 위해서 추가
    },[isError])

    return (
        <cs.Main>
            <Navbar type="goList" alt="목록으로 돌아가기" width="209" height="58" onClick={btnOnClickEventHandelr}></Navbar>          
            <Post/>
        </cs.Main>
    );
}

export default Details;