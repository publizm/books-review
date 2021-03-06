## 개발서적 리뷰

### day1
<hr />

#### SignIn Page
- 컴포넌트 분리(intro / form)
- 재사용 가능한 Button, Input 컴포넌트화
- 입력값이 있는 input에 효과 추가
- styled-component와 polished 라이브러리를 사용하여 UI Styling
- 미디어 쿼리를 활용하여 반응형 레이아웃 구현

<br />

### day2
<hr />

- 로그인 기능 추가
- 로그인 에러 처리 피드백 얼럿 컴포넌트 생성(애니메이션 추가)

<br />

### day3
<hr />
책 추가 및 삭제 기능 추가

#### Home Component
- 책 리스트 데이터 렌더링
- 홈 화면 노출시 데이터 바인딩전 로딩기능 추가
- 로딩 후 리스트 내용이 없을 시 notice 컴포넌트 추가

#### Header Component
- Navigation과 Util Menu 컴포넌트 분리하여 작업

#### Popup
- 팝업을 재사용하기위해 컴포넌트로 분리하여 애니메이션 적용

#### Books Component
- 책 추가 레이아웃
- 책 리스트 레이아웃

<br>

### day4
<hr />

리덕스를 추가하여 상태관리

**상태항목**
<br>
- 토큰 값
- 책 리스트 상태 조회/추가/삭제 시
- 팝업 on/off 상태
- 로그인 에러시 피드백 모달 on/off 상태
- 로딩 on/off 상태

**추가 및 수정**
<br>
로그인 후 메인페이지에서 URL로 접근하여 로그인 페이지 이동시 홈화면으로 리다이렉팅

<br />

### day5
<hr />

리덕스 Thunk를 활용하여 관심사별로 분리하기

service - 로그인 및 책 관련 요청
actions - 비동기 처리 부분을 actions로 이동 및 분리

<br />

### day6
<hr />

- react-actions를 활용 하여 ducks pattern 적용
- 하나의 모듈로 관심사 분리하여 상태관리
- redux-saga 적용
