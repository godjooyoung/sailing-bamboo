import styled from "styled-components";
import { Link } from 'react-router-dom'

// Header, Main, Footer의 위치를 정렬하고 고정하기 위한 스타일
export const WrapContainer = styled.div`
    display: relative;
    flex-direction: column;
    min-height: 100vh;
`

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 228px;
    background-color: #f1f3f5;
    color: black;
    z-index: 98;
    display: flex;
    justify-content: center;
`

export const Main = styled.main`
    padding-top: 250px;
    min-height: calc(100vh - 298px); // 헤더와 푸터 높이만큼 제외
    background-color: #f1f3f5;
`

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #f1f3f5;
    color: black;
    z-index: 97;
    text-align: center;
`
/* Header.jsx 이미지 헤더 */
export const ImgContainer = styled.div`
    width: 90%;
    height: 80%;
    overflow: hidden;
    border-radius: 20px;
    /* border: 2px solid black; */
    display: flex;
    margin-top: 20px;
    position: absolute;
`
export const ImgBanner = styled.img`
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    
`
export const MainTitle = styled.div`
    font-size: 40px;
    font-weight: 900;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    font-family: 'GmarketSans'
`

/** Button 컴포넌트 적용 style */
export const BtnM = styled.button`
    height : ${(props) => {
        return props.type === "primary" ? '48px' : '50px'
    }};
    width : ${(props) => {
        return props.type === "primary" ? '130px' : '132px'
    }};
    border-radius: 8px;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    &:hover{
    ${(props) => {
        return props.type === "primary" ? 'filter: saturate(120%)' : 'filter: brightness(0.9)'
    }}
    };
    border : ${(props) => {
        return props.type === "primary" ? 'none' : '1px solid rgb(219, 221, 224)'
    }};
    background-color: ${(props) => {
        return props.type === "primary" ? 'rgb(232, 52, 78)' : 'rgb(255, 255, 255)'
    }};
    color : ${(props) => {
        return props.type === "primary" ? 'rgb(255, 255, 255)' : 'black'
    }};
`

export const BtnS = styled.button`
    height : 40px;
    width : 100px;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => {
        return props.type === "primary" ? '#FFF2F2' : '#E5E0FF'

    }};
    color : ${(props) => { return props.type === 'negative' ? '#98B1F3' : '#5E72BF' }};
    cursor: pointer;
    &:active{
    background-color: ${(props) => {
        return props.type === 'primary' ? '#EBDEDE' : '#D1CCEB'
    }}
    }
`
/* Main.jsx Details.jsx 내 중간 네비 영역 */
export const CenterDiv = styled.div`
    height: 72px;
    display: flex;
    height: 72px;
    justify-content: space-between;
`

/* Main.jsx Details.jsx 내 이미지 버튼 */
export const ImgBtn = styled.img`
    margin-left: 30px;
    cursor: pointer;
    &:hover{
        filter: brightness(1.1);
    }
`

/* 버튼 정렬 div */
export const BtnWrap = styled.div`
    display: flex;
    gap : 10px;
    justify-content: center;
    justify-items: center;
    flex-direction: row;
    align-items: center;
`
export const BtnWrapP10 = styled(BtnWrap)`
    position: relative;
    bottom: 10px;
`
export const BtnWrapM30 = styled(BtnWrap)`
    position: relative;
    bottom: -30px;
`
export const BtnWrapM100 = styled(BtnWrap)`
    position: relative;
    bottom: -100px;
`

/* RoundFontDiv */
export const RoundFontDiv = styled.div`
    font-family: 'Spoqa Han Sans', sans-serif; 
    font-weight: 900;
    letter-spacing: -.96px;
    line-height: 1.6;
    margin-left: 13px;
    text-align: left;

    align-items: center;
    background-color: #f1f3f5;
    border-radius: 103px;
    display: flex;
    padding: 8px 23px;
    white-space: pre-line;
`

export const RoundFontBtn = styled(RoundFontDiv)`
background-color: black;
color: white;
width: 100px;
height: 26px;
display: flex;
justify-content: center;
position: relative;
top: 16px;
margin: 0px 30px 0px 0px;
`

/* RoundLayout */
export const RoundList = styled.div`
    overflow: scroll;
    border-radius: 24px;
    padding: 0 42px 0px 42px;
    max-width: calc(100vw - 60px);
    background-color: white;
    margin :0 30px; 
    min-height: calc(100vh - 1200px);
    height: calc(100vh - 420px);
`
export const RoundListTopHeader = styled.div`
    z-index: 80;
    position: sticky;
    top: 0px;
    background-color: white;
    margin-bottom: 10px;
`

/* RoundHeader */
export const RoundHeader = styled.div`
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        line-height: 1.5;
        gap: 30px;
        padding: 60px 0px 30px;
`

/* RoundRowBody */
export const RoundRowBody = styled.div`
    align-items: center;
    background-color: #fff;
    border: 5px solid #fff;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 20.9px 30.5px;
    position: relative;
`

export const RoundRowBodyClick = styled(RoundRowBody)`
    border-radius: 30px;
    cursor: pointer;
    &:hover{
    background-color: #f8f9fa;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 20.9px 30.5px;
    border: 5px solid #f8f9fa;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.08);
    }
`

/*RoundRow */
export const HrDotted = styled.div`
    background-image: linear-gradient(90deg,#000 50%,hsla(0,0%,100%,0) 0);
    background-repeat: repeat-x;
    background-size: 10px 2px;
    height: 2px;
    margin: 22px auto 25px;
    width: 100%;
`

export const RoundInnerHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding-left : 40px;
    padding-right : 20px;
`

export const RoundInnerHeaderDetailTitle = styled.div`
    font-size: 18px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 900;
    letter-spacing: -.54px;
    line-height: 1;
    text-align: left;
`

export const RoundInnerHeaderDetailDate = styled.div`
    align-items: center;
    background-color: #f1f3f5;
    border-radius: 100px;
    justify-content: center;
    padding: 10px 24px;
    font-family: "Spoqa Han Sans", sans-serif;
    font-size: 13px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 900;
    letter-spacing: -.48px;
    line-height: 1;
    
`

export const RoundRowNo = styled.div`
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -.48px;
    line-height: 1;
    text-align: left;
    width : 40px
`
export const RoundRowTitle = styled.div`
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -.48px;
    line-height: 1;
    text-align: left;
    width : 40px;
    overflow: hidden;
    padding-top: 3px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 400px;
`
export const RoundRowDate = styled.div`
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -.48px;
    line-height: 1;
    text-align: right;
    width : 100px
`


/* input */
export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgb(95, 102, 107);
`

export const InputDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: 16px 5px;
    border-radius: 8px;
    border: 1px solid rgb(228, 235, 240);
    margin-top: 8px;
`

/* TextArea */
export const TextArea = styled.textarea`
    width: 100%;
    padding: 18px 16px;
    border-radius: 8px;
    border: 1px solid rgb(228, 235, 240);
    background-color: rgb(255, 255, 255);
    line-height: 18px;
    overflow: scroll;
    resize: none;
    padding: 16px 5px 16px 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgb(95, 102, 107);
    ::placeholder { 
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgb(95, 102, 107);
    }
`

export const TextAreaDiv = styled.div`
    width: 100%;
    margin-top: 12px; 
    margin-bottom: ${(props)=>{
        return props.marginBottom+'px'
    }};
`
export const TextAreaDivView = styled(TextAreaDiv)`
    height: calc(100vh - 624px);
`

export const DetailsContentDiv = styled.div`
    height: calc(100vh - 600px);
    white-space:pre-wrap;
`
export const DetialsTime = styled.div`
    background-color: rgb(241, 243, 245);
    border-radius: 20px;
    color: black;
    font-family: Spoqa Han Sans Neo,"sans-serif";
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 900;
    letter-spacing: -.45px;
    line-height: 1;
    padding: 10px 15px;
    text-align: center;
`

/* HelptMsg */
export const HelptMsg = styled.div`
    display: flex;
    align-content: end;
    justify-content: center;
    height: fit-content;
    color: rgb(232, 52, 78);
    font-size: x-small;
`
export const HelptMsgPositoning = styled(HelptMsg)`
    position: relative;
    bottom: 40px;
    bottom: ${(props)=>{
        return props.bottomPositon+'px'
    }};
`

/* Custom Modal */
export const RoundModalRegister = styled.div`
    min-width: 500px;
    min-height: 400px;
    border-radius: 20px;
    margin-top: 0px;
    margin-bottom: 60px;
    padding: 48px 20px;
    background-color: white;
    z-index: 101;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height : ${(props) => {
        return props.height+'px'
    }};
    height: ${(props)=>{
        return props.height+'px'
    }};
`
export const Outer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgb(0,0,0,0.5);
    width: 100%;
    z-index: 100;
`

/* 로그인 회원가입 폼 */
export const LoginImgHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const InputFormDiv = styled.div`
    margin-bottom: 30px;
`
export const ButtonFormDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap : 10px
`
export const LoginDiv = styled.div`
    width: 30%;
    padding: 5%;
    border-radius: 20px;
    @media screen and (max-width: 1200px) {
        width: 80%;
        padding : 50px;
        border-radius: 10px;
    }
    overflow: hidden;
    
    margin-top: 20px;
    position: absolute;
    left: 50%;
    transform: translate( -50% );
    height: 450px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 4px 32px rgba(0,0,0,.12);
    
`
export const HelpMsgDiv = styled.div`
    visibility : ${(props) => {
        if(props.mayIhelpYou === 'help_Message'){
            return 'hidden'
        }else{
            return 'visible'
        }
    }};
    display: flex;
    align-content: end;
    justify-content: left;
    height: fit-content;
    color: rgb(232, 52, 78);
    font-size: x-small;
`
export const GoLink = styled(Link)`
    outline: 0;
    text-decoration: none;
    color: rgb(232, 52, 78);
    cursor: pointer;
    font-weight: 900;
`