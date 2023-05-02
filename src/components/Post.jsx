import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "react-query"; // 서버요청 및 미들웨어
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getPost, updatePost } from "../axios/api/post";
import { chkToken } from "../axios/api/user";
import Button from '../components/common/Button';
import { getCookie, removeCookie } from '../cookie/Cookie';
import { postIsEditMode, pwConfirmIsActive } from '../redux/modules/componentMode';
import * as cs from '../style/commonStyle';
import PwConfirm from './PwConfirm';

/**
 * 컴포넌트 개요 : 메인 > PostList > Post. 익명 게시글 컴포넌트.
 * 2023.04.28 : 최초 작성
 *
 * @returns Post 컴포넌트
 */
function Post() {
    // helpMsg
    const helpMsgArr = ['제목은 필수입니다.', '내용은 필수입니다.']
    
    // 컴포넌트 내부 스테이트 선언
    const [orginPost, setOriginPost] = useState({})
    const [editedPost, setEditedPost] = useState({})
    const [eventParent, setEventParent] = useState('')
    const [helpMsg, setHelpMsg] = useState('')

    const params = useParams();
    const dispatcher = useDispatch()
    // const navigate = useNavigate()
    // const hasToken = getCookie("token");

    // 리액트 쿼리 관련
    const queryClient = useQueryClient();
    const { isLoading, isError, data } = useQuery("getPost", () => (getPost(params.id)))
    // const chkTokenObj = useQuery('chkToken', ()=>(chkToken(hasToken)), {
    //     refetchOnMount : 'always'
    // })

    // useEffect(() => {
    //     if(chkTokenObj.isError){
    //         alert('로그인 세션이 만료되었습니다. 재로그인 해주세요.')
    //         removeCookie("token")
    //         navigate('/'); //로그인 페이지로 이동
    //     }
    //     if (!hasToken) {
    //         alert(`로그인 후 이용 가능합니다.`)
    //         navigate('/'); //로그인 페이지로 이동
    //     }
    // })

    // 서버로부터 데이터를 받아오면 해당 데이터를 원본값과 수정값에 설정해준다.
    useEffect(() => {
        if (data) {
            setOriginPost(data)
            setEditedPost(data)
        }
    }, [data])

    // 비밀번호 확인모달 활성 여부
    // [수정], [삭제] 버튼 클릭 시 활성화 된다.
    const _pwConfirmIsActive = useSelector((state) => {
        return state.componentMode.pwConfirmIsActive
    })

    // 에디트 모드 활성 여부
    // [수정] 이후 비밀번호가 일치하면 활성화 된다.
    const _isEditMode = useSelector((state) => {
        return state.componentMode.postIsEditMode
    })

    // 수정 처리 완료 후, 뮤테이션을 통해 새로 쿼리를 호출해서 데이터를 최신화 한다.
    const updatePostMutate = useMutation(updatePost, {
        onSuccess: () => {
            queryClient.invalidateQueries("getPost")
        }
    })




    if (isLoading) {
        return <h1>로딩중입니다.</h1>
    }
    if (isError) {
        return <h1>에러</h1>
    }
        
    // [수정] 버튼 클릭 시 비밀번호 확인 모달 활성화
    const inEditModeHandler = () => {
        setEventParent('수정')
        dispatcher(pwConfirmIsActive(true))
    }
    // [삭제] 버튼 클릭 시 비밀번호 확인 모달 활성화
    const deleteEventHandler = () => {
        setEventParent('삭제')
        dispatcher(pwConfirmIsActive(true))
    }

    // [취소] 버튼 클릭 시 수정모드 종료
    const outEditModeHandler = () => {
        dispatcher(postIsEditMode(false))
        setEditedPost(data) // 초기화
    }

    // [저장] 버튼 클릭시 수정모드 종료 및 값 수정
    const outEditModeSaveHandler = () => {
        if (editedPost.title.length === 0) {
            setHelpMsg(helpMsgArr[0])
            return
        }
        if (editedPost.content.length === 0) {
            setHelpMsg(helpMsgArr[1])
            return
        }
        dispatcher(postIsEditMode(false))
        const date = new Date().toISOString().slice(0, 10);
        updatePostMutate.mutate({ id: data.id, modifyedPost: { ...editedPost, modifyTime: date } })
    }

    const updateTitle = (e) => {
        setEditedPost({ ...editedPost, title: e.target.value })
        setHelpMsg('')
    }
    const updateContent = (e) => {
        setEditedPost({ ...editedPost, content: e.target.value })
        setHelpMsg('')
    }


    return (
        <>
            <cs.RoundList>
                <cs.RoundRowBody>
                    {_isEditMode ? <cs.InputDiv><cs.Input type="text" defaultValue={editedPost.title} onChange={updateTitle} /></cs.InputDiv> : <>{data.title}<cs.DetialsTime>{data.modifyTime}</cs.DetialsTime></>}
                </cs.RoundRowBody>
                <cs.RoundListTopHeader>
                    {_isEditMode ? <cs.TextAreaDiv marginBottom="12"><cs.TextArea rows="10" type="text" defaultValue={editedPost.content} onChange={updateContent} /></cs.TextAreaDiv> : <cs.DetailsContentDiv>{data.content}</cs.DetailsContentDiv>}
                    {_isEditMode ? <cs.HelptMsgPositoning bottomPositon='8'>{helpMsg}</cs.HelptMsgPositoning> : <cs.HelptMsg></cs.HelptMsg>}
                </cs.RoundListTopHeader>
                <cs.BtnWrapP10>
                    {_isEditMode ? <Button type="primary" size="m" onClick={outEditModeSaveHandler}>저장</Button> : <Button type="primary" size="m" onClick={inEditModeHandler}>수정</Button>}
                    {_isEditMode ? <Button type="second" size="m" onClick={outEditModeHandler}>취소</Button> : <Button type="second" size="m" onClick={deleteEventHandler}>삭제</Button>}
                </cs.BtnWrapP10>
                {_pwConfirmIsActive ? <PwConfirm orignPostPw={orginPost.postPw} eventParent={eventParent} postId={data.id}></PwConfirm> : <></>}
            </cs.RoundList>
        </>
    );
}
export default Post;
