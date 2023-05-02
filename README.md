# 프로젝트 생성
yarn create react-app 프로젝트명

# 필요 라이브러리 및 패키지 설치
라우터, 리덕스 툴킷, json-server react-query, 쿠키 라이브러리

# 프로젝트 구조
```text
📦src
 ┣ 📂axios
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜post.js
 ┃ ┃ ┗ 📜user.js
 ┃ ┗ 📜apiConfig.js
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Navbar.jsx
 ┃ ┃ ┗ 📜WrapContainer.jsx
 ┃ ┣ 📜Join.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜Post.jsx
 ┃ ┣ 📜PostList.jsx
 ┃ ┣ 📜PwConfirm.jsx
 ┃ ┗ 📜Register.jsx
 ┣ 📂cookie
 ┃ ┗ 📜Cookie.js
 ┣ 📂hooks
 ┃ ┗ 📜useInput.js
 ┣ 📂pages
 ┃ ┣ 📜Details.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜JoinUs.jsx
 ┃ ┗ 📜Main.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜componentMode.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📂style
 ┃ ┗ 📜commonStyle.js
 ┣ ...
```
# 실행화면
### 홈화면
<img width="900" alt="홈화면" src="https://user-images.githubusercontent.com/58963027/235735033-5503a263-d646-4f12-9611-e8423b0274b2.png">

### 회원가입
<img width="900" alt="회원가입" src="https://user-images.githubusercontent.com/58963027/235735056-fb9a8c88-2fa7-465f-85fa-c492ed9c004e.png">

### 글작성 모달
<img width="900" alt="글작성 팝업" src="https://user-images.githubusercontent.com/58963027/235735089-fa5e7335-ee24-44c1-bc6d-03da7c666d42.png">

### 게시글 상세보기
<img width="900" alt="게시글 상세보기" src="https://user-images.githubusercontent.com/58963027/235735115-4cac8665-896a-4dfd-9881-99ee13cd307c.png">

### 수정/삭제 모달
<img width="900" alt="수정/삭제 팝업" src="https://user-images.githubusercontent.com/58963027/235735125-a90710c8-8526-40fd-97c2-df7fbc04a0fe.png">
