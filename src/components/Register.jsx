import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query'; // 서버요청 및 미들웨어
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addPost } from "../axios/api/post";
import { chkToken } from "../axios/api/user";
import Button from '../components/common/Button';
import { getCookie, removeCookie } from '../cookie/Cookie';
import { registerIsActive } from '../redux/modules/componentMode';
import * as cs from '../style/commonStyle';


/**
 * 컴포넌트 개요 : 메인 화면에서 제목과 내용을 입력하는 모달 영역
 * 2023.04.29 : 최초 작성
 *
 * @returns Register 컴포넌트
 */
function Register() {
    const dispatcher = useDispatch()

    const queryClient = useQueryClient();
    const addPostMutate = useMutation(addPost, {
        onSuccess: () => {
            queryClient.invalidateQueries("getPostList")                                        // 목록 재조회
            setInputValue({ title: '', content: '', postPw: '', rgstrTime: '', rgstrId: '', })  // 인풋 초기화
        }
    })

    const navigate = useNavigate()
    /*
    const hasToken = getCookie("token")
    const chkTokenObj = useQuery('chkToken', ()=>(chkToken(hasToken)))
    useEffect(() => {
        if(chkTokenObj.isError){
            alert('로그인 세션이 만료되었습니다. 재로그인 해주세요.')
            removeCookie("token")
            deactiveModal()
            navigate('/'); //로그인 페이지로 이동
        }
        if (!hasToken) {
            alert(`로그인 후 이용 가능합니다.`)
            navigate('/'); //로그인 페이지로 이동
        }
    },[chkTokenObj.isError])

*/
    // 컴포넌트 내부에서 사용할 state 정의
    const helpMsgArr = ['비밀번호는 필수입니다.', '내용은 필수입니다.', '제목은 필수입니다.']
    const [helpMsg, setHelpMsg] = useState('')

    const [inputValue, setInputValue] = useState({
        title: '',
        content: '',
        postPw: '',
        rgstrTime: '',
        rgstrId: '',
    })    

    // 등록값 입력시 state 변경
    const titleInputHandler = (e) => {
        setHelpMsg('')
        setInputValue({ ...inputValue, title: e.target.value })
    }
    // 등록값 입력시 state 변경
    const contentInputHandler = (e) => {
        setHelpMsg('')
        setInputValue({ ...inputValue, content: e.target.value})
        
    }
    // 등록값 입력시 state 변경
    const passwordInputHandler = (e) => {
        setHelpMsg('')
        setInputValue({ ...inputValue, postPw: e.target.value })
    }

    // 등록 모달창을 비활성 상태로 변경
    const deactiveModal = () => {
        dispatcher(registerIsActive(false))
    }

    const onSubmitEventHandler = () => {
        // 유효성 체크 입력이 없으면 Help Msg 표출
        if(inputValue.title.length === 0){
            setHelpMsg(helpMsgArr[2])
            return
        }
        if(inputValue.content.length === 0){
            setHelpMsg(helpMsgArr[1])
            return
        }
        if(inputValue.postPw.length === 0){
            setHelpMsg(helpMsgArr[0])
            return
        }

        // 등록시간 YYYY-MM-DD
        const date = new Date().toISOString().slice(0, 10);  
        //뮤테이션으로 불러들인 쿼리를 실행한다.
        addPostMutate.mutate({ ...inputValue, rgstrTime: date, modifyTime: date, rgstrId: 'anonymous' })
        
        deactiveModal()
    }


    return (
        <>  
            <cs.RoundModalRegister>
                <cs.InputDiv><cs.Input type="text" placeholder="제목을 입력해주세요." value={inputValue.title} onChange={titleInputHandler}></cs.Input></cs.InputDiv>
                <cs.TextAreaDiv><cs.TextArea rows="5" cols="100" placeholder="내용을 입력해주세요." value={inputValue.content} onChange={contentInputHandler}></cs.TextArea></cs.TextAreaDiv>
                <cs.InputDiv><cs.Input type="password" placeholder="수정, 삭제시 사용될 비밀번호를 입력해주세요." value={inputValue.postPw} onChange={passwordInputHandler}></cs.Input></cs.InputDiv>
                <cs.BtnWrapM100>
                    <Button size="m" type="primary" onClick={onSubmitEventHandler}>등록하기</Button>
                    <Button size="m" type="secend" onClick={deactiveModal}>취소하기</Button>
                </cs.BtnWrapM100>
                <cs.HelptMsg>{helpMsg}</cs.HelptMsg>
            </cs.RoundModalRegister>
            <cs.Outer></cs.Outer>
        </>
    );
}

export default Register;
