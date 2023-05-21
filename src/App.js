import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./assets/style.css";
import "./App.css";
import Home from "./components/home";
import Blog from "./components/blog";
import Category from "./components/category";
import ViewCategory from "components/admin/categories/ViewCategory";
import { ArticlesContextProvider } from "./context/articles.context";

function App() {
  return (
    <ArticlesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/category/:category" exact element={<Category />} />
          <Route path="/view-employee/:id" component={ViewCategory}></Route>
        </Routes>
      </BrowserRouter>
    </ArticlesContextProvider>
  );
}

export default App;
