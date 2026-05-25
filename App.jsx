import { StrictMode, lazy, Suspense } from "react";
import {createRoot} from "react-dom/client";
import Main from "/src/components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Signin = lazy(() => import("/src/components/Login-signup"))


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/Typing-Speed-Test">


    <Suspense fallback={<div className="loading-spinner" />}>

      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/login" element={ <Signin isSignup={false} /> }/>
        <Route path="/signup" element={ <Signin isSignup={true}/> }/>

      </Routes>
    </Suspense>

  </BrowserRouter>
)