"use client"; // next.js에게 이 파일은 브라우저에서 동작하는 클라이언트 컴포넌트

export default function ChatSidebar() {
  return (
    <aside className="chat-sidebar">
      <h2>AI 메뉴 도우미</h2>

      <div className="chat-messages"></div>

      <div className="chat-input-area">
        <textarea />

        <button>전송</button>
      </div>
    </aside>
  );
}
