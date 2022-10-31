## 모달 팝업 연습

```js

일정 목록 출력 및 모달 팝업 삭제 확인
1. 일정 목록 리스트 출력
2. 일정 삭제 버튼 클릭 시 모달 팝업
3. 모달창 밖 클릭 시 모달 팝업창 사라짐
4. 모달 닫기 버튼 클릭시 모달 팝업창 사라짐

React CSS Html

  App.js : Todo component 출력 (일정)
  Backdrop.js : 속성 onClick 이벤트에 props 로 onClose 실행할 컴포넌트
  Modal.js : 모달 팝업창 및 모달 안에 취소 및 확인 버튼 기능있는 컴포넌트
  Todo.js : Todo component 로 일정 아이템 컴포넌트
  
Function
  Todo.js
    deleteTodoHandler : 삭제 버튼 클릭시 호출되는 함수
    closeModalHandler : 닫기 버튼 클릭 시 호출되는 함수
  
```

첫 메인 화면 일정 목록 출력

![20221031_191717](https://user-images.githubusercontent.com/75942405/198985526-3e0dc0b5-784d-4f9a-885b-7742fb294edf.png)

일정 삭제 버튼 클릭 시 팝업될 모달 화면

![20221031_191724](https://user-images.githubusercontent.com/75942405/198985535-9fcc25ca-1efd-41c3-9418-f3279c8c6527.png)
