import React, { useState } from 'react';
import { useMutation } from "react-query";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { deletePost } from "../axios/api/post";
import Button from '../components/common/Button';
import { postIsEditMode, pwConfirmIsActive, registerIsActive } from '../redux/modules/componentMode';
import * as cs from '../style/commonStyle';

/**
 * 컴포넌트 개요 : 메인 > PostList > Post > PwConfirm. 수정, 삭제시 비밀번호 확인 모달 컴포넌트
 * 2023.04.29 : 최초 작성
 *
 * @returns PwConfirm 컴포넌트
 */
function PwConfirm(props) {
    // hooks
    const navigate = useNavigate()
    const dispatcher = useDispatch()

    // helpMsg
    const helpMsgArr = ['비밀번호는 필수값 입니다.', '비밀번호가 일치하지 않습니다.']
    // 내부 state 선언
    const [helpMsg, setHelpMsg] = useState('')
    const [confirmPostPw, setConfirmPostPw] = useState('')

    // 현재모달 비활성화 
    const deactiveModal = () => {
        dispatcher(pwConfirmIsActive(false))
    }

    // 삭제 처리 완료 후, 목록 페이지로 돌아간다.
    const deletePostMutate = useMutation(deletePost, {
        onSuccess: () => {
            dispatcher(registerIsActive(false))
            navigate(-1)
        }
    })

    // 비밀번호 입력창에 동작이 발생했을때 발생하는 이벤트
    const confirmOnChangeHandler = (e) => {
        setConfirmPostPw(e.target.value)
        setHelpMsg('')
    }

    // 확인 버튼 눌렀을때 동작하는 이벤트
    const confirmClickHandler = () => {
        // 비밀번호 입력 확인
        if(confirmPostPw.length === 0){
            setHelpMsg(helpMsgArr[0])
            return
        }
        // 비밀번호 일치 확인
        if (props.orignPostPw === confirmPostPw) {
            if (props.eventParent === '수정') {
                dispatcher(postIsEditMode(true)) // 수정 모드 종료
            } else {
                deletePostMutate.mutate(props.postId) // 삭제 처리
            }
            deactiveModal() // 비밀번호 확인 모달 꺼짐
        } else {
            setHelpMsg(helpMsgArr[1])
            setConfirmPostPw('')
        }
    }

    return (
        <>
            <cs.RoundModalRegister height="150">
                <div>{`${props.eventParent}하시겠습니까?`}</div>
                <div>글 작성 시 등록한 비밀번호를 입력하세요.</div>
                <cs.InputDiv>
                    <cs.Input placeholder="비밀번호를 입력해주세요." onChange={confirmOnChangeHandler} type="password" value={confirmPostPw} />
                </cs.InputDiv>
                <cs.BtnWrapM30>
                    <Button size="m" type="primary" onClick={confirmClickHandler}>확인</Button><Button size="m" type="secend" onClick={deactiveModal}>취소</Button>
                </cs.BtnWrapM30>
                <cs.HelptMsgPositoning>{helpMsg}</cs.HelptMsgPositoning>
            </cs.RoundModalRegister>
            <cs.Outer></cs.Outer>
        </>
    )
}

export default PwConfirm;


