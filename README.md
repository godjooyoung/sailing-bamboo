# 프로젝트 생성
yarn create react-app 프로젝트명

# 필요 라이브러리 및 패키지 설치
라우터, 리덕스 툴킷, json-server react-query, 쿠키 라이브러리

# API 명세
[항해 99 대나무숲 API 명세서](https://www.notion.so/b811d026f98b400d8a32cf3aa908ef5c)

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
### 로그인
<img width="1000" alt="로그인" src="https://user-images.githubusercontent.com/58963027/235837217-2093ca2b-4a36-481e-8f4c-bf9fd2f32407.png">

### 회원가입
<img width="1000" alt="회원가입" src="https://user-images.githubusercontent.com/58963027/235837231-6c910e8f-d93b-48bc-a595-473e955bf81b.png">

### 게시글 목록
<img width="1000" alt="글목록" src="https://user-images.githubusercontent.com/58963027/235837251-51027075-58c7-492d-89cc-b02ab4cedba7.png">

### 게시글 상세 보기
<img width="1000" alt="게시글 상세보기" src="https://user-images.githubusercontent.com/58963027/235837258-6ea16938-c2e0-402e-820f-5bba85dd650f.png">

### 게시글 작성 모달
<img width="1000" alt="게시글작성 모달" src="https://user-images.githubusercontent.com/58963027/235837264-90aee6ee-a988-481e-942f-d2849f47abb6.png">

### 게시글 수정하기
<img width="1000" alt="게시글 수정하기" src="https://user-images.githubusercontent.com/58963027/235837272-16f34024-f446-40b1-a71c-5ce6207d16de.png">

### 게시글 수정, 삭제 모달
<img width="1000" alt="게시글 수정 삭제 모달" src="https://user-images.githubusercontent.com/58963027/235837284-28cb370b-30ef-483b-bf07-65fe0d714b52.png">
