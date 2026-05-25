import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import khamsatIcon  from "/src/assets/Khamsat icon.png" 


export default function Footer() {
  return(
    <footer className="absolute bottom-0 left-0 w-full bg-linear-to-t from-[#1d1d23] to-[#26252b]  border-t border-neutral-800 py-6 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: App branding & Copyright */}
        <div className="flex items-center gap-3 text-neutral-400 text-xs font-mono sm:text-sm">
          <span className="text-[#00ff66] animate-pulse">■</span>
          <span>
            &copy; {new Date().getFullYear()} <span className="text-white font-medium">TypingTest</span>. All rights reserved.
          </span>
        </div>

  
        <div className="flex items-center gap-2 text-sm font-mono">
          <p>Made with love by:</p>
          <div className="relative">
            <p className="animate-pulse cursor-default group ">Hamzawe

              <a className="text-[#f0f6fc] absolute top-0 right-0 duration-300 opacity-0 -z-10 group-hover:-top-6 group-hover:-right-4 group-hover:opacity-100 group-hover:z-10 hover:animate-bounce p-1" href="https://github.com/HamzaMuhamad" target="_blank" title="My GitHub: HamzaMuhamad"><FontAwesomeIcon icon={faGithub} /><span className="sr-only">visit my GitHub profile</span></a>

              <a className="text-[#0077b5] absolute top-0 left-3/4 duration-300 opacity-0 -z-10 group-hover:-top-6 group-hover:left-[calc(75%-14.12px)] group-hover:opacity-100 group-hover:z-10 hover:animate-bounce p-1" href="https://linkedin.com/in/hamzamuhammad365" target="_blank" title="My LinkedIn: hamzamuhammad365"><FontAwesomeIcon icon={faLinkedin} /><span className="sr-only">visit my Linkedin profile</span></a>

              <a className="text-[#0077b5] absolute top-0 left-4 duration-300 opacity-0 -z-10 group-hover:-top-6 group-hover:left-[calc(25%-4.5px)] group-hover:opacity-100 group-hover:z-10 hover:animate-bounce p-1" href="https://khamsat.com/user/hamza_muhamd" target="_blank" title="Khamsat.com">
              <span className="sr-only">visit my Khamsat profile</span>
              <img className="w-[14.5px] h-[14.5px] rounded-2xl" src={khamsatIcon} alt="My service on Khamsat" /></a>

              <a className="text-white absolute top-0 left-0 duration-300 opacity-0 -z-10 group-hover:-top-6 group-hover:-left-4 group-hover:opacity-100 group-hover:z-10 hover:animate-bounce p-1" href="mailto:hamzamuhamd365@gmail.com" target="_blank" title="hamzamuhamd365@gmail.com">
                <span className="sr-only">Contact on Gmail</span>
                <FontAwesomeIcon icon={faAt} /></a>

            </p>

          </div>
        </div>

      </div>
    </footer>
  )
}