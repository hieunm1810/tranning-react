import React from "react"; //thu vien nay se giup bien dich cac code html duoi dinh dang js
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss"; //import o day de app dung toan trang, vi co che single page
//Cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ReactForm from "./pages/ReactForm/ReactForm";
import Page404 from "./pages/Page404/Page404";
import ReactLifeCycle from "./pages/ReactLifeCycle/ReactLifeCycle";
//Cai dat redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoTangGiamSL from "./pages/DemoRedux/DemoTangGiamSL/DemoTangGiamSL";
import DemoChonXe from "./pages/DemoRedux/DemoChonXe/DemoChonXe";
import DemoFormComment from "./pages/DemoRedux/DemoFormComment/DemoFormComment";
import DemoBurger from "./pages/DemoRedux/DemoBurger/DemoBurger";
import BaiTapFormRedux from "./pages/DemoRedux/BaiTapFormRedux/BaiTapFormRedux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* path la dinh nghia duong link de co the vao component nao do */}
        <Route path="" element={<App />}>
          {/* hai cach dinh nghia load ra home */}
          <Route index element={<Home />}></Route>
          {/* <Route path="" element={<Home />}></Route> */}
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="reactForm" element={<ReactForm />}></Route>
          <Route path="lifecycle" element={<ReactLifeCycle />}></Route>
          <Route path="demonumber" element={<DemoTangGiamSL />}></Route>
          <Route path="demochonxe" element={<DemoChonXe />}></Route>
          <Route path="demoform" element={<DemoFormComment />}></Route>
          <Route path="demoburger" element={<DemoBurger />}></Route>
          <Route path="btformredux" element={<BaiTapFormRedux />}></Route>
          
          {/* CACH XU LY KHI USER NHAP URL TAO LAO */}
          {/* C1 */}
          {/* <Route path="*" element={<Page404 />}></Route> */}
          {/* C2 */}
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
        {/* <Route path="contact" element={<Contact />}></Route> */}
      </Routes>
    </BrowserRouter>
  </Provider>

);
//jsx-javascript extension
