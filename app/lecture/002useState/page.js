"use client";
import { useState } from "react";

// 훅이란? React 컴포넌트 안에서 특정한 기술을 수행하는 함수
// 종류가 좀 있는데
// 이 lecture에서는 훅 중의 하나인 useState를 다룬다
// useState는 값을 관리 합니다
export default function App02() {
  // 변수명   // setter  = 상태관리(초기값)
  // 변수명은 실제 컴포넌트에서 사용할 변수명
  // 리액트에서는 name이라는 변수명의 값을 변경하기 위해 대입연산자 사용안함
  // 오직 setter를 통해서 값을 변경 할 수 있음 , useState가 상태를 감지하고
  // 값의 내용이 바뀌면 자동으로 화면을 갱신시켜줌 (중요!)
  // js는 값의 내용이 바뀌면 innerHtml or innerText or append 등으로 값을
  // 개발자가 직접 바꿨다면, 리액트는 훅이라는 것을 두어서
  // 상태를 감지하고 상태가 바뀌면 자동으로 화면을 갱신
  // 그래서 아래와 같이 코드를 작성한다
  const [name, setName] = useState("홍명보");
  const [num, setNum] = useState(10);
  // useState에게 컴포넌트에 있는 num 변수를 맡겼다
  // 맡긴 변수의 값을 변경하려면 setNum() 함수(setter를 이용)
  // 그러면 userState가 변수의 값이 변경되면 자동으로 화면 갱신
  // 이유는? 리액트는 화면을 일단 만들면 화면의 일부분을 수정하지 않아요
  // 리액트가 화면을 만들면 수정 불가 원칙을 가지고 있다.
  // 바꿀때는 새로운 화면을 만들어서 바꿔치기 한다
  // 화면에 출력되면 뒤에서 가상의 돔을 만들어 놓고
  // 훅(훅 중에 useState)에서 변수의 값이 바뀌면 가상의 돔(virtual dom)을 새로 그리고 원래 화면과 바꾸기
  return (
    <div>
      <h4>lecture 002 useState Hook이란?</h4>
      <h4>{name}</h4>
      <button onClick={() => setName("홍박사")}>이름변경</button>
      {/*여기 코드만 보면 엘리먼트는 선택하고 바꾸는 코드가 전혀 없다
      오로지 useState 훅을 사용하여 변수를 설정하고 setter 지정했다*/}
      <h4>{num}</h4>
      <button
        onClick={() => {
          num = num + 1;
        }}
      >
        카운트증가
      </button>
    </div>
  );
}
