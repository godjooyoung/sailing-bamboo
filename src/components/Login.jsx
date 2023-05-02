import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../axios/api/user";
import Button from '../components/common/Button';
import { getCookie, setCookie } from '../cookie/Cookie';
import useInput from '../hooks/useInput';
import runningJimbo from "../running_jindo.gif";
import * as cs from '../style/commonStyle';

function Login() {
    // hooks
    const navigate = useNavigate();
    const helpMsgArr = ['help_Message', '아이디 값은 필수입니다.', '비밀번호 값은 필수입니다.', '비밀번호 확인은 필수입니다.', '비밀번호가 일치하지 않습니다.']
    useEffect(()=>{
        const cookie = getCookie("token");
            if(cookie){
                alert(`이미 로그인 하셨습니다.\n 대나무숲으로 바로가기`)
                navigate('/main'); //로그인 페이지로 이동
            }
    },[])
    // 커스텀 훅
    const [id, onChangeId, idReset] = useInput('')
    const [password, onChangePassword, passwordReset] = useInput('')
    // 내부 상태 선언
    const [idHelpMsg, setIdHelpMsg] = useState(helpMsgArr[0])
    const [pwHelpMsg, setPwHelpMsg] = useState(helpMsgArr[0])

    // 서버에 요청 (로그인)
    const loginUserMutate = useMutation(loginUser, {
        onSuccess: (response) => {
            if(response.data.token){
                setCookie('token', response.data.token, {
                    path:"/"
                })
            }
            const cookie = getCookie("token");
            if(cookie){
                alert(`${id}님 환영합니다. 대나무숲을 달려볼까요?`)
                navigate('/main'); //로그인 페이지로 이동
            }
        },
        onError: (error) => {
            alert(`일치하는 계정정보를 찾을 수 없습니다.\n입력하신 ID, 혹은 비밀번호를 확인해주세요.`)
            idReset()
            passwordReset()
        }
    })

    // 로그인 api call
    const loginUserApiCall = () => {
        loginUserMutate.mutate({ id: id, password: password })
    }

    // [입장] 버튼 클릭. 이동 함수
    const loginBtnOnClickHandler = () => {
        if (id.length === 0) {
            setIdHelpMsg(helpMsgArr[1])
            return
        }

        if (password.length === 0) {
            setPwHelpMsg(helpMsgArr[2])
            return
        }
        loginUserApiCall()
    }

    return (
        <cs.LoginDiv>
            <cs.InputFormDiv>

                <cs.LoginImgHeader>
                    <img alt="달리는 공룡" width="136" height="80.8" src={runningJimbo} />
                    <h3>대나무숲에 오신 것을 환영합니다.😎</h3>
                </cs.LoginImgHeader>

                <cs.InputDiv>
                    <cs.Input type="text" value={id} onChange={(e) => {
                        onChangeId(e);
                        setIdHelpMsg(helpMsgArr[0])
                    }} placeholder='아이디' />
                </cs.InputDiv>
                <cs.HelpMsgDiv mayIhelpYou={idHelpMsg}>{idHelpMsg}</cs.HelpMsgDiv>

                <cs.InputDiv>
                    <cs.Input type="password" value={password} onChange={(e) => {
                        onChangePassword(e);
                        setPwHelpMsg(helpMsgArr[0])
                    }} placeholder='비밀번호' />
                </cs.InputDiv>
                <cs.HelpMsgDiv mayIhelpYou={pwHelpMsg}>{pwHelpMsg}</cs.HelpMsgDiv>

            </cs.InputFormDiv>
            <cs.ButtonFormDiv>
                <cs.BtnWrap>
                    <Button type="primary" size="m" onClick={loginBtnOnClickHandler}>입장</Button>
                </cs.BtnWrap>
                <div>항해의 세계에 오신 것을 환영합니다. <cs.GoLink to="/Join">지금 가입하세요.</cs.GoLink></div>
            </cs.ButtonFormDiv>
        </cs.LoginDiv>
    );
}

export default Login;

