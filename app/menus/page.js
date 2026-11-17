"use client";

import { getAllMenus } from "@/service/api";
// 처음 컴포넌트가 실행되자마자 서버로부터 데이터 가져와야한다
// 어떤 훅을 선택할까? 힌트) 컴포넌트가 화면에 보여질 때 딱 한번 실행 > useEffect
// 서버로부터 받은 리스트를 저장 > useState
import { useEffect, useState } from "react";

export default function MenusList() {
  useEffect(() => {
    async function loadmenus() {
      try {
        const data = await getAllMenus();
        setMenus(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadmenus();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>칼로리</th>
          <th>설명</th>
          <th>추천</th>
          <th>관리</th>
        </tr>
      </thead>

      <tbody>
        {/* map은 메뉴 배열을 표의 행들로 바꿉니다. 각 행에는 고유한 key가 필요합니다. */}
        {menus.map((menu) => (
          <tr key={menu.id}>
            <td>{menu.id}</td>
            <td>{menu.name}</td>
            <td>{menu.calories} kcal</td>
            <td>{menu.description}</td>
            <td>{menu.recommendation ?? 0}</td>
            <td>수정 삭제</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
