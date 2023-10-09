import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "#/pages/Home/Home";
import SignIn from "#/pages/SignIn/SignIn";
import Register from "#/pages/Register/Register";
import User from "#/pages/User/User";
import Error from "#/pages/Error/Error";


function Router() {
  return (
    <BrowserRouter >
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
