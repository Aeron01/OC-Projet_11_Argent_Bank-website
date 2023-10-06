import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "#/pages/Home/Home";
// import SignIn from "#/pages/SignIn/SignIn";
// import SignUp from "#/pages/SignUp/SignUp";
import User from "#/pages/User/User";
import Error from "#/pages/Error/Error";


function Router() {
  return (
    <BrowserRouter >
        <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} /> */}
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
