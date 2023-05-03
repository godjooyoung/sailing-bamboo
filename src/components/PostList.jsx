import React from 'react';
import { useQuery } from "react-query"; // 서버요청 및 미들웨어
import { useNavigate } from "react-router-dom";
import { getPostList } from "../axios/api/post";
import * as cs from '../style/commonStyle';

/**
 * 컴포넌트 개요 : 메인 > PostList. 익명 게시글 목록을 가지고 있는 컴포넌트.
 * 2023.04.28 : 최초 작성
 *
 * @returns PostList 컴포넌트
 */
function PostList() {
    // hooks
    const navigate = useNavigate();
    const { isLoading, isError, data } = useQuery('getPostList', getPostList)
    const postList = data // 서버로 부터 받아온 데이터
    const onClickEventHandler = (postId) => {
        navigate(`/details/${postId}`)
    }

    if (isLoading) {
        return <h1>로딩중입니다.</h1>
    }
    if (isError) {
        return <h1>에러</h1>
    }

    return (
        <cs.RoundList>
            <cs.RoundListTopHeader>
                <cs.RoundHeader>
                    <cs.RoundFontDiv>
                    🎋🎋🎋 오늘은 대나무숲 달릴 각!🏃‍♀️
                    </cs.RoundFontDiv>
                </cs.RoundHeader>
                <cs.RoundInnerHeader>
                    <cs.RoundInnerHeaderDetailTitle>
                        대나무숲
                    </cs.RoundInnerHeaderDetailTitle>
                    <cs.RoundInnerHeaderDetailDate>
                        최종수정일자
                    </cs.RoundInnerHeaderDetailDate>
                </cs.RoundInnerHeader>
            </cs.RoundListTopHeader>

            {postList.map((post) => {
                return (
                    <cs.RoundRowBodyClick onClick={() => { return onClickEventHandler(post.id) }}>
                        <cs.RoundRowNo>{post.id}</cs.RoundRowNo>
                        <cs.RoundRowTitle>{post.title}</cs.RoundRowTitle>
                        <cs.RoundRowDate>{post.modifyTime}</cs.RoundRowDate>
                    </cs.RoundRowBodyClick>
                )
            })}
        </cs.RoundList>

    )
}

export default PostList;


