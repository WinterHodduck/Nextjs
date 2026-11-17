"use client";
import { useState } from "react";

export default function TestUseState() {
  //   let a = "김치찌개";
  const [a, setA] = useState("김치찌개");
  const [inputName, setInputName] = useState("");
  function handleChangeMenu(event) {
    // html 태그가 동작하면 모두 다 이벤트 인식
    // 이 함수를 콜한 태그가 어떤 태그 인가를 넘겨 받는다
    event.preventDefault(); // 이 태그는 화면을 새로고침하는 성격이 있어서 진행하지마
    // 즉, 화면의 새로고침을 방지하는 코드
    // const input = document.getElementById("menu_input").value;
    // a = input;  시용자 네가 직접 화면 바꾸려고 하지마
    setA(inputName); // 훅에게 값 바꿔달라고 해. 훅이 값의 변경을 먼저 인지하게 되고
    // 새로운 컴포넌트가 만들어 져서 이전의 것은 버리고 새것으로 교체된다
  }
  return (
    <div>
      <h4>useState 예제들</h4>
      {/* 음식 메뉴 하나를 저장하는 상태를 추가하는 예 */}
      <h4>현재 메뉴:{a}</h4>
      <input
        type="text"
        id="menu_input"
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      ></input>
      <button onClick={handleChangeMenu}>메뉴변경</button>
    </div>
  );
}
