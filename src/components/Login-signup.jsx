import imgUrl from "../assets/coding.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {faUser} from "@fortawesome/free-regular-svg-icons"
import BirdsBg from "./BirdsBg"
import { Link } from "react-router-dom"

// =======================================================================
// =========================== *** Sign In *** ===========================
// =======================================================================

export default function Signin({isSignup}) {
  
  return (

    <article className="font-sora w-screen h-screen bg-[#0d1a30] text-white flex items-center justify-center relative">
      

      <section className="max-w-[440px] relative z-20">

        {/* Outer the box */}
        <div className="text-center ">
          <img src={imgUrl} alt="Keyboard Icon" className="w-12 h-[42.17px] ml-[calc(50%-24px)] mb-4"/>
          <h2 className="text-3xl font-semibold leading-9 tracking-[-0.75px]">Typing Speed Test</h2>
        </div>

        {/* My Main Box */}
        <section className="rounded-xl bg-[#1E293B] my-6 px-8 pb-8 pt-10">
          <h2 className="text-2xl mb-1 font-semibold">Welcome back.</h2>
          <p className="text-[#94A3B8]">Enter your credentials to access your account</p>

            { /* // ! onSubmit is temporary til use Form correctly */}
          <form method="POST" className="mt-6" onSubmit={(e) => e.preventDefault()}>

            {/* IN case of signing UP.... */}
            {isSignup?
            <>
              <label htmlFor="username" className="text-[#94A3B8] mb-2 block text-sm">Username</label>
            
              <div className="py-2.5 pr-4 pl-11 border border-[#334155] rounded-lg input-icon relative mb-6">
                <FontAwesomeIcon icon={faUser} className="absolute left-[13.5px] top-[calc(50%-6.5px)] w-[17px]! h-[13px]! text-[#94A3B8]"/>
                <input type="text" name="username" id="username" className="placeholder-[#94A3B8] outline-none w-full rounded-lg " placeholder="nickname" />

              </div>
            </>
            :null}

            {/* EMAIL */}
            <label htmlFor="email" className="text-[#94A3B8] mb-2 block text-sm">Email Address</label>

            <div className="py-2.5 pr-4 pl-11 border border-[#334155] rounded-lg input-icon relative">

              <FontAwesomeIcon icon={faEnvelope} className="absolute left-[13.5px] top-[calc(48%-6.5px)] w-[17px]! h-[13px]! text-[#94A3B8]"/>

              <input type="email" name="email" id="email" className="placeholder-[#94A3B8] outline-none w-full rounded-lg " placeholder="email" />
            </div>
            
            {/* PASSWORD */}

            <div className="flex justify-between items-center mb-2 mt-6">
              <label htmlFor="password" className="text-[#94A3B8] text-sm  ">Password</label>
              <a href="" className="10B981 text-[12px] text-[#10B981] font-semibold leading-4 hover:underline">Forgot password?</a>
            </div>

            <div className="py-2.5 pr-4 px-11 border border-[#334155] rounded-lg input-icon relative mb-6"
            >
              {/* envelope icon */}
              <svg className="absolute left-[15px] top-[calc(50%-9px)]" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66667 17.5C1.20833 17.5 0.815972 17.3368 0.489583 17.0104C0.163194 16.684 0 16.2917 0 15.8333V7.5C0 7.04167 0.163194 6.64931 0.489583 6.32292C0.815972 5.99653 1.20833 5.83333 1.66667 5.83333H2.5V4.16667C2.5 3.01389 2.90625 2.03125 3.71875 1.21875C4.53125 0.40625 5.51389 0 6.66667 0C7.81944 0 8.80208 0.40625 9.61458 1.21875C10.4271 2.03125 10.8333 3.01389 10.8333 4.16667V5.83333H11.6667C12.125 5.83333 12.5174 5.99653 12.8438 6.32292C13.1701 6.64931 13.3333 7.04167 13.3333 7.5V15.8333C13.3333 16.2917 13.1701 16.684 12.8438 17.0104C12.5174 17.3368 12.125 17.5 11.6667 17.5H1.66667ZM1.66667 15.8333H11.6667V7.5H1.66667V15.8333ZM6.66667 13.3333C7.125 13.3333 7.51736 13.1701 7.84375 12.8438C8.17014 12.5174 8.33333 12.125 8.33333 11.6667C8.33333 11.2083 8.17014 10.816 7.84375 10.4896C7.51736 10.1632 7.125 10 6.66667 10C6.20833 10 5.81597 10.1632 5.48958 10.4896C5.16319 10.816 5 11.2083 5 11.6667C5 12.125 5.16319 12.5174 5.48958 12.8438C5.81597 13.1701 6.20833 13.3333 6.66667 13.3333ZM4.16667 5.83333H9.16667V4.16667C9.16667 3.47222 8.92361 2.88194 8.4375 2.39583C7.95139 1.90972 7.36111 1.66667 6.66667 1.66667C5.97222 1.66667 5.38194 1.90972 4.89583 2.39583C4.40972 2.88194 4.16667 3.47222 4.16667 4.16667V5.83333ZM1.66667 15.8333V7.5V15.8333Z" fill="#64748B"/>
              </svg>
              
              <input type="password" name="password" id="password" className="placeholder-[#94A3B8] outline-none" placeholder="password" />
              {/* Eye icon */}
              <svg className="absolute top-[calc(50%-6.5px)] right-[12.5px]" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16667 10C10.2083 10 11.0938 9.63542 11.8229 8.90625C12.5521 8.17708 12.9167 7.29167 12.9167 6.25C12.9167 5.20833 12.5521 4.32292 11.8229 3.59375C11.0938 2.86458 10.2083 2.5 9.16667 2.5C8.125 2.5 7.23958 2.86458 6.51042 3.59375C5.78125 4.32292 5.41667 5.20833 5.41667 6.25C5.41667 7.29167 5.78125 8.17708 6.51042 8.90625C7.23958 9.63542 8.125 10 9.16667 10ZM9.16667 8.5C8.54167 8.5 8.01042 8.28125 7.57292 7.84375C7.13542 7.40625 6.91667 6.875 6.91667 6.25C6.91667 5.625 7.13542 5.09375 7.57292 4.65625C8.01042 4.21875 8.54167 4 9.16667 4C9.79167 4 10.3229 4.21875 10.7604 4.65625C11.1979 5.09375 11.4167 5.625 11.4167 6.25C11.4167 6.875 11.1979 7.40625 10.7604 7.84375C10.3229 8.28125 9.79167 8.5 9.16667 8.5ZM9.16667 12.5C7.13889 12.5 5.29167 11.934 3.625 10.8021C1.95833 9.67014 0.75 8.15278 0 6.25C0.75 4.34722 1.95833 2.82986 3.625 1.69792C5.29167 0.565972 7.13889 0 9.16667 0C11.1944 0 13.0417 0.565972 14.7083 1.69792C16.375 2.82986 17.5833 4.34722 18.3333 6.25C17.5833 8.15278 16.375 9.67014 14.7083 10.8021C13.0417 11.934 11.1944 12.5 9.16667 12.5ZM9.16667 10.8333C10.7361 10.8333 12.1771 10.4201 13.4896 9.59375C14.8021 8.76736 15.8056 7.65278 16.5 6.25C15.8056 4.84722 14.8021 3.73264 13.4896 2.90625C12.1771 2.07986 10.7361 1.66667 9.16667 1.66667C7.59722 1.66667 6.15625 2.07986 4.84375 2.90625C3.53125 3.73264 2.52778 4.84722 1.83333 6.25C2.52778 7.65278 3.53125 8.76736 4.84375 9.59375C6.15625 10.4201 7.59722 10.8333 9.16667 10.8333Z" fill="#64748B"/>
              </svg>


            </div>

            <div className="flex">

              <input 
              type="checkbox" 
              name="rememberMe" 
              id="rememberMe" 
              className="border border-[#334155] rounded w-4 h-4 appearance-none flex items-center justify-center overflow-hidden before:content-['✔'] before:text-center before:font-['Font_Awesome_6_Free'] before:font-black before:w-full before:h-full checked:before:scale-100 before:scale-0 before:text-white before:text-xs before:bg-[#10B981] before:duration-300" />

              <label htmlFor="rememberMe" className="pl-2 text-sm text-[#94A3B8] ">Remember me</label>

            </div>

            <input type="submit" value={"Signin"} className="block mt-6 rounded-lg py-2 text-center text-sm w-full bg-[#10B981] font-medium cursor-pointer shadow-[0_4px_6px_-1px_#10b77f80] duration-300 hover:bg-[#13ffb0d4]" />

            <div className="w-full my-6 text-[#94A3B8] text-center relative before:content-[''] before:absolute before:left-0 before:w-full before:h-px before:top-[calc(50%-0.5px)] before:bg-[#33415580]">
              <p className="w-fit px-4 text-xs ml-[calc(50%-64.235px)] relative z-10 bg-[#1E293B]">Or continue with</p>
            </div>

          </form>
          {/* accounts to login */}
          <article 
          className="grid grid-cols-2 grid-rows-1 gap-4 ">

            <button 
            className="continue-with-btn">

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"
              className="w-5 h-5"
              >
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              Google
            </button>

            <button 
            className="continue-with-btn">
              <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
              GitHub
            </button>
          </article>
        </section>


        {/* Outer the box */}
        {!isSignup && <p className="mt-6 w-full text-center text-[#94A3B8] text-sm">Don't have an account? <Link to="/signup" className="cursor-pointer hover:underline text-[#10B981]">Sign up</Link></p>}

        <footer className="fixed bottom-0 left-0 w-screen p-6 flex justify-between">
          <p className="text-[#94A3B8] text-sm leading-5">
            <a href="/" className="leading-7.5 font-black text-xl text-[#10B981] mr-2">Typing Speed Test</a>&#169; {new Date().getFullYear()} Typing Speed Test Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button className="text-[#94A3B8] font-semibold text-xs cursor-pointer hover:underline">Privacy Policy</button>
            <button className="text-[#94A3B8] font-semibold text-xs cursor-pointer hover:underline">Terms of Service</button>
            <button className="text-[#94A3B8] font-semibold text-xs cursor-pointer hover:underline">Help Center</button>
            <button className="text-[#94A3B8] font-semibold text-xs cursor-pointer hover:underline">Status</button>
          </div>
        </footer>


      </section>
      <BirdsBg />
    </article>
  )

}
