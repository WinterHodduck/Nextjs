import Greeting from "./Greeting";

// return 작성할 때는 하나의 태그로 모두 감싸야 한다. 태그를 열고 꼭 닫기
// export 라는 뜻은 외부의 파일에서 접근하게 해 준다
// default 001render 함수를 import 한다면 기존으로 제공될 함수임을 명시
// default를 붙이면 중괄호 없이 import 가능
export default function App() {
  return (
    <main>
      <Greeting num={1} name="홍길동" />
      <Greeting num={2} name="홍명보" />
      <Greeting num={3} name="홍박사" />
      <Greeting num={4} name="홍사과" />
      <Greeting num={5} name="홍홍홍" />
      <p>컴포넌트를 면에 배치함.</p>
    </main>
  );
}
