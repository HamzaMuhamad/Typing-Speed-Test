
import {Link} from "react-router-dom"
import  codingUrl from "/src/assets/coding.png"

export default function Header ({highScore}) {
  return (
    <header 
      className="flex flex-wrap flex-row gap-4 duration-300 justify-between px-8 py-5 md:gap-0 ">

      <section className="flex justify-center items-center gap-2">
        <img src={codingUrl} className="w-7 h-7" alt="Typing speed Test"/>
        <div className="hidden sm:block">
          <a href="/" className="text-lg md:text-2xl">Typing Speed Test</a>
          <p className="text-[.56rem] text-gray-400 md:text-[.74rem]">Type as fast as you can in 60 seconds</p>
        </div>
      </section>

      <section className="flex justify-center gap-2 items-center text-sm">
        <i className="not-italic">&#127942;</i>
        <p className="text-gray-400 text-[.7rem] md:text-[1rem]">Personal best: </p>
        <p className="font-bold text-[.7rem] md:text-[1rem]">{highScore && highScore + " WPM"} </p>  {/* Word Per Second (state) */}
      </section>

      <section className="flex justify-center items-center w-full gap-3">
        <Link to={"/login"}><button className="login">Login</button></Link>
        <Link to={"/signup"}><button className="signup">Signup</button></Link>
      </section>
    </header>
  )
}