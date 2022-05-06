import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home";
import PostDetail from "./routes/PostDetail";
import AllPost from "./routes/AllPost";
import VinpearlDetail from "./routes/VinpearlDetail";
import Culinary from "./routes/Culinary";
import Resort from "./routes/Resort";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="post" element={<Outlet />}>
          <Route path="all" element={<AllPost />} />
          <Route path="detail/:pid" element={<PostDetail />} />
        </Route>
        <Route path="vinpearl" element={<Outlet />}>
          <Route path=":vid" element={<VinpearlDetail />} />
        </Route>
        <Route path="culinary" element={<Outlet />}>
          <Route path=":cid" element={<Culinary />} />
        </Route>
        <Route path="resort" element={<Outlet />}>
          <Route path=":rid" element={<Resort />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
