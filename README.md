# 변형 틱택토

기록된 게임 보기 / 무르기 / 4X4, 5X5 등의 기능을 제공하는 변형된 틱택토 게임을 React로 구현해본다.

[🤖Demo](https://tic-tac-toe-eta-two-12.vercel.app/)

## 🛠️ 기술 스택

TypeScript, React, Styled-Components

## 🛠️ 설치 및 실행

```bash
# 패키지 설치
$ npm install

# 개발 서버 실행
$ npm start
```

## 📚 기능

메인 페이지

- [x] 게임 시작 버튼을 누르면 게임 설정 페이지로 이동한다.
- [x] 기록된 게임 보기 버튼을 누르면 이전 게임 기록을 보여주는 페이지로 이동한다.

게임 설정 페이지

- [x] 3X3, 4X4, 5X5 등의 다양한 사이즈의 게임판을 선택할 수 있다.
- [x] 플레이어는 자신의 마크의 모양(동그라미, 세모, 네모, 엑스)를 선택할 수 있다.
- [x] 플레이어는 자신의 마크의 색상을 선택할 수 있다.
  - [x] 기본 값은 플레이어1: X(파랑) / 플레이어2: O(빨강)이다.
- [x] 먼저 마크를 놓는 플레이어를 설정할 수 있다. (기본값 랜덤)

게임 페이지

- [x] 게임을 진행하기 위한 게임 보드가 표시되어야 한다.
- [x] 두 플레이어에 대한 정보 (마크, 마크색, 남은 무르기 횟수)가 있어야 한다.
- [x] 현재 마크를 놓을 플레이어가 누구인지 알 수 있어야 한다.
- [x] 메인 페이지로 이동할 수 있는 버튼이 있어야 한다.
- [x] 종료 조건(승리, 무승부)가 충족되면 게임의 기록을 저장한다.

기록 페이지

- [x] 기록된 게임을 표시한다.
- [x] 게임판의 각 마크는 몇번째로 놓인 마크인지가 표시되어야 한다.
- [x] 메인 페이지로 이동 할 수 있는 버튼이 있어야 한다.

## 👨‍💻 미리보기

##### # 기록된 게임 보기 버튼을 누르면 이전 게임 기록을 보여주는 페이지로 이동한다.
<img src="https://github.com/Lee-Young-Jae/tic-tac-toe/assets/78532129/d8ec35d7-a3f5-49c3-a4e6-491286abaaed" width="90%">

##### # 게임 시작 버튼을 누르면 게임 설정 페이지로 이동한다.
##### 승리조건은 게임판의 크기를 넘을 수 없다.
<img src="https://github.com/Lee-Young-Jae/tic-tac-toe/assets/78532129/5bc45bea-d31b-48ac-8403-4ad8dc71bf00" width="90%">

##### 플레이어의 마크/색상이 겹치거나 배경색에 가까운 색상을 선택할 수 없다.
<img src="https://github.com/Lee-Young-Jae/tic-tac-toe/assets/78532129/4321f6bf-7506-4e07-b194-5a0ed3ed09d9" width="90%">

##### # 게임을 진행할 페이지로 이동한다.
##### 가로 승리 / 무르기
<img src="https://github.com/Lee-Young-Jae/tic-tac-toe/assets/78532129/563ed3da-507c-4aa7-987e-0ff4afa0a927" width="90%">

##### 대각선 승리
<img src="https://github.com/Lee-Young-Jae/tic-tac-toe/assets/78532129/3dbdc9ab-51ad-4b86-ae4f-06af051eba75" width="90%">

##### 무승부
<img src="https://github.com/Lee-Young-Jae/tic-tac-toe/assets/78532129/96fdd287-4c85-4beb-b9f5-ef2d03482b58" width="90%">

##### # 이전 게임 기록을 보여주는 페이지로 이동한다.
##### 게임판의 각 마크는 몇번째로 놓인 마크인지가 표시되어야 한다.
<img src="https://github.com/Lee-Young-Jae/tic-tac-toe/assets/78532129/e5185119-d44b-4fbc-aada-beaa757e8653" width="90%">
