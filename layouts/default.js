import Navbar from "../components/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children} {/* 要顯示的網頁內容 */}
      <div>Welcome to NLPLAB~</div>
    </>
  );
}
