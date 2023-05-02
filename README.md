# 프로젝트 생성
yarn create react-app 프로젝트명

# 필요 라이브러리 및 패키지 설치
라우터, 리덕스, 리덕스 툴킷, json-서버 리액트쿼리

yarn add react-router-dom

yarn add redux
yarn add react-redux

yarn add @reduxjs/toolkit

yarn add axios
npm install -g json-server
json-server -verson
json-server --watch db.json --port 4000

yarn add react-query

import nextId from "react-id-generator";


yarn add react-router-dom redux react-redux @reduxjs/toolkit axios react-query
npm install -g json-server
 
## App.jsx에서 jsons-server 연결하기
json-server 공식문서
https://www.npmjs.com/package/json-server

## App.jsx에서 라우터 관련 설정 추가
```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

# 프로젝트 구조만들기




 /**
     * React Hook "useMutation" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?
     * 훅 요청 오기 전에 조건에 따라서 일찍 리턴되기도 한다. 그래서 훅이 조건에 따라 요청 안될수도 있으니까 그게 싫으면 앞에 잇는 리턴을 빼라 반드시!!
     */

    리액트훅은 이프문이나 리턴문 뒤에 올 수없다. 반드시 랜더링 되야함.



    Too many re-renders. React limits the number of renders to prevent an infinite loop.
게시글을 수정하는 부분에서 내부에서 사용하는 스테이트 값을 지정해주고 코드를 구현했다.
런해보니 에러가 발생했다.
보통 투매니 리랜더는 리랜더링 하는 부분이 포문안에 있거나 이럴때 발생햇는데
어디가 문제지 고민하다가 아무래도 스테이트 값 변경하는 부분을 내부에 그냥 작성한게 문제인거 같아 유즈이펙트를 사용해서 고쳐보았다.
import React, {useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient, useQuery, useMutation } from "react-query" // 서버요청 및 미들웨어
import { getPost } from "../axios/api/post"
import { deletePost, updatePost } from "../axios/api/post"
import * as cs from '../style/commonStyle'

/**
 * 컴포넌트 개요 : 메인 > PostList > Post. 익명 게시글 컴포넌트.
 * 2023.04.28 : 최초 작성
 *
 * @returns Post 컴포넌트
 */
function Post() {
    // Hooks 
    const params = useParams();
    const navigate = useNavigate();

    // 컴포넌트 내부 스테이트 선언
    const [inEditMode, setInEditMode] = useState(false)
    const [orginPost, setOriginPost] = useState({})
    const [editedPost, setEditedPost] = useState({})

    // react query 선언 부
    const {isLoading, isError, data} = useQuery("getPost", ()=>(getPost(params.id)))
    const deletePostMutate = useMutation(deletePost, {
        onSuccess: () => {
            console.log("[알림] 삭제에 성공했습니다.")
            navigate(-1)
        }
    })
    const updatePostMutate = useMutation(updatePost, {
        onSuccess: () => {
            console.log("[알림] 수정에 성공했습니다.")
            // 새로고침
        }
    })

    if(isLoading){
        return <h1>로딩중입니다.</h1>
    }
    if(isError){
        return <h1>에러</h1>
    }

    // 서버로 부터 받아온 데이터
    const post = data
    setOriginPost(post)
    setEditedPost(post)

    const deleteEventHandler = () => {
        deletePostMutate.mutate(data.id)
    }

    // [수정] 버튼 클릭 시 수정모드로 변경된다.
    const inEditModeHandler = () => {
        setInEditMode(true)
    }

    // TODO 커스텀 훅
    const updateTitle = (e) =>{
        setEditedPost({...editedPost, title:e.target.vlaue})
    }
    const updateContent = (e) =>{
        setEditedPost({...editedPost, content:e.target.vlaue})
    }
    const updatePassword = (e) =>{
        setEditedPost({...editedPost, password:e.target.vlaue})
    }

    return (
        <cs.Main>
            <div>
                <p>게시글 번호 : {post.id}</p>
                <p>게시글 제목 : {inEditMode?<input type="text" value={post.title} onChange={updateTitle}></input>:post.title}</p>
                <p>게시글 내용 : {inEditMode?<input type="text" value={post.content} onChange={updateContent}></input>:post.content}</p>
                <p>게시글 비번 : {inEditMode?<input type="text" value='' onChange={updatePassword}></input>:post.password}</p>
            </div>
            {inEditMode?<button onClick={inEditModeHandler}>저장</button>:<button onClick={inEditModeHandler}>수정</button>}
            {inEditMode?<button onClick={deleteEventHandler}>취소</button>:<button onClick={deleteEventHandler}>삭제</button>}
        </cs.Main>
    );
}

export default Post;

원본 코드 


수정 모드에따라 인풋이 변경되도로 ㄱ구현했다.
그렇게 하니까 동작은 정상적으로 되었지만 에러가 발생했다.
해결방식 1
에러 메시지는 "A component is changing a controlled input to be uncontrolled" 입니다. 이 에러는 React의 Controlled Component와 Uncontrolled Component를 혼합해서 사용하면 발생합니다. Controlled Component란 React 컴포넌트에서 input, textarea 등 form element의 값을 state로 관리하는 방법입니다. 반면 Uncontrolled Component는 ref를 이용하여 form element의 값을 조작하는 방법입니다.

현재 코드에서는 input element에 대해 두 가지 방식을 혼용하고 있습니다. inEditMode가 true일 때는 state인 editedPost의 값을 input element의 value로 사용하고 있습니다. 이 경우 input element는 Controlled Component입니다. 반면 inEditMode가 false일 때는 data의 값을 input element의 value로 사용하고 있습니다. 이 경우 input element는 Uncontrolled Component입니다.

해결 방법으로는 inEditMode가 false일 때 input element를 disabled 속성을 이용하여 disabled 상태로 만들어주면 됩니다. 또는 inEditMode가 true일 때 data의 값을 editedPost에 할당하는 방식으로도 해결할 수 있습니다.

아래는 수정한 코드입니다. 수정한 부분은 input element의 value와 disabled 속성입니다.


해결방식 2
에러 메시지가 발생하는 원인은 inEditMode 값이 변경됨에 따라 인풋 요소의 value 값이 변하는데, 이때 컴포넌트에서 해당 인풋 요소를 "제어 컴포넌트"로 지정하지 않아서 발생하는 것입니다.

이 문제를 해결하려면, 인풋 요소의 value 값을 editedPost.title, editedPost.content, editedPost.password로 설정한 후, 해당 인풋 요소를 "제어 컴포넌트"로 지정해주어야 합니다.

즉, 아래와 같이 인풋 요소에 value 속성 대신 defaultValue 속성을 사용하고, onChange 이벤트 핸들러에서 editedPost 값을 변경해주면 됩니다.

<input type="text" defaultValue={editedPost.title} onChange={updateTitle} />
<input type="text" defaultValue={editedPost.content} onChange={updateContent} />
<input type="text" placeholder='비밀번호를 입력해주세요' defaultValue={editedPost.password} onChange={updatePassword} />