"use client";
// 값       동작
import { useState, useEffect } from "react";
import { getAllMenus } from "@/service/api";

export default function Home() {
  // 서버와 통신해서 메뉴 3개를 가져와야 한다
  // 서버 통신은 나중에 하고
  // useState를 사용하여 임시 메뉴 3개를 출력
  // 메뉴가 저장된 변수를 useState를 이용해서 저장
  // 메뉴 데이터를 배열로 직접 선언합니다.

  // 메뉴 배열을 State로 관리합니다.
  //      변수명  setter               초기값 = 변수가 만들어 질 때의 처음 데이터
  const [menus, setMenus] = useState([]);
  // 이 예제에서는 setMenus 사용하지 않음

  // todo
  // 1. 서버로부터 데이터를 가져와야 함
  // 2. 가져온 배열에서 랜덤하게 정렬해서 앞에서 3개를 가져와야 함

  // 포인트) menus.map을 동작하기 전에 미리 3개가 선정되는 작업이 필요
  // 훅중에 useEffect : 먼저 동작시켜 주는 훅
  // 서버에서 데이터를 가져와 주는 등 특정 상황에서 작업을 실행
  // 특정상황을 서버에서 가져오고, 랜덤하게 정렬해서 3개를 선정하는 것으로 정의
  useEffect(() => {
    // 람다식 작성할 때 {}: 리턴값 필요 / (): 리턴 필요
    // 1. 서버로부터 데이터를 가져온다, 지금은 그냥 menuData 가져왔다고 간주
    // setMenus(menuData);
    async function loadmenus() {
      try {
        const data = await getAllMenus();
        const selected = [...data].sort(() => Math.random() - 0.5).slice(0, 3);
        console.log(selected);
        setMenus(selected);
      } catch (err) {}
    }
    // [] 표시는 컴포넌트가 처음 화면에 나타난 후 실행, 중요한 점은 화면에 나타난 후
    // 화면에 나타날 때 마다, 실행된다는 의미
    // 리턴에서 정의한 컴포넌트가 화면에 나타날 때 마다, 이 훅이, 코드를 실행해준다
    // 이 훅은 서버로부터 데이터를 가져오고 랜덤하게 3개를 뽑아서 준다

    /*제목: useEffect를 사용하는 방법 3가지 
  첫번째 - 랜더링 된 후 실행 (잘 사용안함)
   useEffect(() => {
    // 람다식 작성할 때 {}: 리턴값 필요 / (): 리턴 필요
    // 1. 서버로부터 데이터를 가져온다, 지금은 그냥 menuData 가져왔다고 간주
    // setMenus(menuData);
    const selected = [...menus].sort(() => Math.random() - 0.5).slice(0, 3);
    console.log(selected);
    setMenus(selected);
  });
  
  두번째 - 화면에 나타날 때 (컴포넌트가 화면에 보여질 때 딱 한번 실행)
  useEffect(() => {
    // 람다식 작성할 때 {}: 리턴값 필요 / (): 리턴 필요
    // 1. 서버로부터 데이터를 가져온다, 지금은 그냥 menuData 가져왔다고 간주
    // setMenus(menuData);
    const selected = [...menus].sort(() => Math.random() - 0.5).slice(0, 3);
    console.log(selected);
    setMenus(selected);
  }, []);
  
  세번째 - 화면에 나타나고 변수의 상태(useState)가 변경될 때 
        - 두번째처럼 동작 + [menus] 이 변수의 값이 바뀌면 자동으로 동작
  useEffect(() => {
    // 람다식 작성할 때 {}: 리턴값 필요 / (): 리턴 필요
    // 1. 서버로부터 데이터를 가져온다, 지금은 그냥 menuData 가져왔다고 간주
    // setMenus(menuData);
    const selected = [...menus].sort(() => Math.random() - 0.5).slice(0, 3);
    console.log(selected);
    setMenus(selected);
  }, [menus]);*/

    return (
      <section>
        <h2>오늘의 추천 메뉴</h2>
        <div className="recomment-list">
          {/*출력하기 전에 이미 3개가 선정되어 있어야 한다 */}
          {menus.map((menu) => (
            <div className="card" key={menu.id}>
              <h3>{menu.name}</h3>
              <p>칼로리:{menu.calories}</p>
              <p>{menu.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  });
}
