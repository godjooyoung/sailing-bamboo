import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../cookie/Cookie';
import btnImgGoList from "../../goListButton.png";
import btnImgGoPost from "../../postButton.png";
import * as cs from '../../style/commonStyle';

function Navbar(props) {
    const navigate = useNavigate()
    const cookie = getCookie("token");
    useEffect(()=>{
        if(!cookie){
            alert(`로그인 이후 이용이 가능합니다.`)
            navigate('/'); //로그인 페이지로 이동
        }
    },[])
    const logout = () => {
        alert("로그아웃 하시겠어요?")
        removeCookie("token");
        const hasToken = getCookie("token")
        if(!hasToken){
            navigate('/'); //로그인 페이지로 이동
        }
    }
    return (
        <cs.CenterDiv>
            <cs.ImgBtn 
            alt={props.alt} 
            width={props.width} 
            height={props.height} 
            src={props.type==='goList'?btnImgGoList:btnImgGoPost}  
            onClick={props.onClick}></cs.ImgBtn>
            <cs.RoundFontBtn onClick={logout}>로그아웃</cs.RoundFontBtn>
        </cs.CenterDiv>   
    );
}
export default Navbar;