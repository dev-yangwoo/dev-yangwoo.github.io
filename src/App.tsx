import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import ListDetail from "./components/list/ListDetail";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetail";
import Main from "./pages/main/Main";

// const App = () => {
//   return <Main />;
// };

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/blog/:blogId"} element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
