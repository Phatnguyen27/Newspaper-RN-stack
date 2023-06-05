import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style.css";
import "./App.css";
import Home from "./components/user/home";
import Login from "./components/user/login";
import Register from "./components/user/register";
import Blog from "./components/user/blog";
import Category from "./components/user/category";
import ViewCategory from "components/admin/categories/ViewCategory";
import { ArticlesContextProvider } from "./context/articles.context";
import { UserContextProvider } from "./context/users.context";
import ListCategory from "./components/admin/categories/ListCategory";
import NewsEdittingPage from "./components/admin/news.edit";

function App() {
  return (
    <UserContextProvider>
      <ArticlesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />

            {/* Admin */}
            <Route
              path="/admin/category"
              exact
              element={<ListCategory />}
            ></Route>
            <Route
              path="/admin/edit-news/:id"
              element={<NewsEdittingPage />}
            ></Route>
            <Route path="/category/:category" exact element={<Category />} />
            <Route path="/view-employee/:id" component={ViewCategory}></Route>

            {/* Admin */}
            {/* <Route path="/admin/home" exact element={<AdHomemin />} /> */}
          </Routes>
        </BrowserRouter>
      </ArticlesContextProvider>
    </UserContextProvider>
  );
}

export default App;
