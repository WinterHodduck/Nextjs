import "./globals.css";
// 컴포넌트 import
import Header from "@/components/Header";
import ChatSidebar from "@/components/ChatSidebar";

/*layout.js 파일은 앱 전체에 공통으로 적용되는 최상위 레이아웃
global.css import함
children **
앱 전체 구조에 대핸 디자인을 여기서 정의
*/

// 처음 화면의 그리드를 어떻게 구상할 것인가?
// 맨위를 Header, 채팅창을 ChatSidebar, 메인창 보류
// http://127.0.0.1:3000/ 맨 처음의 랜딩페이지가 .page.js 파일
// app 하위에 있는 layout은 모든 페이지에 적용되는 디자인
// 즉, 모든 페이지에는 Header와 왼쪽에 ChatSidebar가 있다는 의미
// 주소(url)마다 화면을 출력하는 page.js 파일이 children으로 들어와서 화면을 완성한다
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="app-layout">
          <ChatSidebar />
          <main>
            {/* 추천 메뉴 들어갈 자리 */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
