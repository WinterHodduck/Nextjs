"use client";
import { useState } from "react";

export default function App03() {
  // 서버와 통신해서 메뉴 3개를 가져와야 한다
  // 서버 통신은 나중에 하고
  // useState를 사용하여 임시 메뉴 3개를 출력
  const [names, setNames] = useState(["짜장면", "짬뽕", "탕수육"]);
  return (
    <section>
      <h4>오늘의 메뉴 추천해요</h4>
      <ul>
        {names.map((name, index) => {
          {
            /* map을 돌 때는 태그 마다 유니크하게 지정해 줘야 한다
            그래서 li 다음에 key 입력해야함. 리액트 특징*/
          }
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </section>
  );
}
