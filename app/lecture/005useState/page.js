"use client";
import { useState } from "react";

export default function TestFive() {
  const menu = ["김치찌개", "불고기", "비빔밥"];
  const [menus, setMenus] = useState(menu); //menus가 변수, 타입은 리스트
  const [a, setA] = useState(0); // a는 변수 , 타입은 정수
  const [newMenu, setNewMenu] = useState("");
  function addMenu() {
    event.preventDefault();
    const menuAdd = newMenu.trim();
    if (!menuAdd) return;

    //기존 메뉴에 추가
    setMenus((c) => [...c, menuAdd]); // 새로운 배열 만들어서 추가한다
    // 입력한 곳 초기화
    setNewMenu("");
  }

  return (
    <div>
      <h4>use state 리스트로 살펴보기 </h4>{" "}
      {/*정수타입 변수는 그냥 이렇게 하면 됨 */}
      {/*리스트는 순회해애함 */}
      {menus.map((menu, index /*소괄호를 사용하면 리턴이 필요없음 */) => (
        <li key={index}>
          {menu}
        </li> /*리액트에서는 부모와 자식간의 관계를 가상돔에서 인식
                                    그래서 반복해서 출력할 경우 자식을 구분하기 위해 key 입력 */
      ))}
      <input
        value={newMenu}
        onChange={(event) => {
          setNewMenu(event.target.value);
        }}
      ></input>
      <button onClick={addMenu}>추가</button>
    </div>
  );
}
