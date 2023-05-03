import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { addUser } from "../axios/api/user";
import Button from '../components/common/Button';
import { getCookie } from '../cookie/Cookie';
import useInput from '../hooks/useInput';
import runningJimbo from "../running_jindo.gif";
import * as cs from '../style/commonStyle';

function Join() {
    // hooks
    const navigate = useNavigate();

    useEffect(()=>{
        const cookie = getCookie("token");
            if(cookie){
                alert(`이미 로그인 하셨습니다.\n 대나무숲으로 바로가기`)
                navigate('/main'); //로그인 페이지로 이동
            }
    },[])

    const helpMsgArr=['help_Message','아이디 값은 필수입니다.', '비밀번호 값은 필수입니다.', '비밀번호 확인은 필수입니다.', '비밀번호가 일치하지 않습니다.']
    // 커스텀 훅
    const [id, onChangeId, idReset] = useInput('')
    const [password, onChangePassword, passwordReset] = useInput('')
    const [confrimPassword, onChangeConfirmPassword, confrimPasswordReset] = useInput('')
    // 내부 상태 선언
    const [idHelpMsg, setIdHelpMsg] = useState(helpMsgArr[0])
    const [pwHelpMsg, setPwHelpMsg] = useState(helpMsgArr[0])
    const [pwConfirmHelpMsg, setPwConfrimHelpMsg] = useState(helpMsgArr[0])

    // 서버에 데이터 등록 요청 (회원가입)
    const addUserMutate = useMutation(addUser, {
        onSuccess: (response) => {
            alert(`${id}님 가입이 완료되었습니다.\n로그인 후 이용해 주세요.`)
            navigate('/')
        },
        onError : (error) => {
            alert(error + '\n다른 id를 입력해주세요.')
            idReset()
            passwordReset()
            confrimPasswordReset()
        }
    })

    // 회원가입 api call
    const addUserApiCall = () => {
        addUserMutate.mutate({id:id, password:password})
    }

    // [회원가입] 버튼 클릭.
    const joinBtnOnClickHandler = () => {
        // 유효성 검사
        if(id.length === 0){
            setIdHelpMsg(helpMsgArr[1])
            return
        }

        if(password.length === 0){
            setPwHelpMsg(helpMsgArr[2])
            return
        }
        
        if(confrimPassword.length === 0){
            setPwConfrimHelpMsg(helpMsgArr[3])
            return
        }

        if(password !== confrimPassword){
            setPwConfrimHelpMsg(helpMsgArr[4])
            return
        }

        // 서버요청
        addUserApiCall()
    }

    return (
        <cs.LoginDiv>
            <cs.InputFormDiv>
                <cs.LoginImgHeader>
                    <img alt="달리는 공룡" width="136" height="80.8" src={runningJimbo}/>
                    <h3>대나무숲을 불태울 준비 되셨나요?🔥</h3>
                </cs.LoginImgHeader>
                <cs.InputDiv>
                    <cs.Input type="text" value={id} onChange={(e)=>{
                        onChangeId(e)
                        setIdHelpMsg(helpMsgArr[0])
                    }} placeholder='아이디'/>
                </cs.InputDiv>
                <cs.HelpMsgDiv mayIhelpYou={idHelpMsg}>{idHelpMsg}</cs.HelpMsgDiv>
                <cs.InputDiv>
                    <cs.Input type="password" value={password} onChange={(e)=>{
                        onChangePassword(e);
                        setPwHelpMsg(helpMsgArr[0])
                        }} placeholder='비밀번호'/>
                </cs.InputDiv>
                <cs.HelpMsgDiv mayIhelpYou={pwHelpMsg}>{pwHelpMsg}</cs.HelpMsgDiv>
                
                <cs.InputDiv>
                    <cs.Input type="password" value={confrimPassword} onChange={(e)=>{
                        onChangeConfirmPassword(e);
                        setPwConfrimHelpMsg(helpMsgArr[0])
                    }} placeholder='비밀번호 확인'/>
                </cs.InputDiv>
                <cs.HelpMsgDiv mayIhelpYou={pwConfirmHelpMsg} >{pwConfirmHelpMsg}</cs.HelpMsgDiv>
            
            </cs.InputFormDiv>
            <cs.ButtonFormDiv>
                <cs.BtnWrap>
                    <Button type="negative" size="m" onClick={joinBtnOnClickHandler}>회원가입</Button>
                </cs.BtnWrap>
            </cs.ButtonFormDiv>
        </cs.LoginDiv>
    );
}

export default Join;

