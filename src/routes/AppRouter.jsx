import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
