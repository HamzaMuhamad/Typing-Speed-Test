import { useState, useEffect, useRef } from "react"
import typingText from "/data.json";
import Header from "./Header"
import Footer from "/src/components/Footer"


export default function Main() {
  
  // handle every character in the text <span>
  const ALLDATA = typingText; 
  const text = useRef(ALLDATA["easy"][Math.floor(Math.random() * 10)]["text"]);
  const [textInElements, setTextInElements] = useState(Array.from(text.current).map((char, index) => {
    return <span key={index} className={index == 0 ? "current-alpha": undefined}>{ char }</span>
  }))
  let currentLetterIndex = useRef(0);
  let highlightedAlpha = useRef([])
  // Getting the text data
  const [time, setTime] = useState(60);  // Timed one minute ***^***
  const gamesUserPlayed = useRef(0);
  const currentGameScore = endGameLogic() && wpmAndAccuracy()[0];
  let [highScore, setHighScore] = useState(0);
  endGameLogic() && (currentGameScore > highScore) ? setHighScore(currentGameScore) : ""
  let gameDifficulty = useRef("easy");
  

  
  // - Game Start / reset
  let [readyToStart, setReadyToStart] = useState(false);  // USED FOR: start timing by first press + stop counting by just clicking restart btn
  
  // =========================================================



  // Finally: Adding the localStorage 🥳
  useEffect(() => {
    // High Score
    const getHighScoreStorage = JSON.parse(localStorage.getItem("highScore"))
    if ((getHighScoreStorage > highScore)) {
      setHighScore(getHighScoreStorage)
      
    } else {
      localStorage.setItem("highScore", JSON.stringify(highScore))
      
    }


  }, [highScore])


    function handlingDiffChange (e) {
      if (!readyToStart || endGameLogic()) {
        const newDiff = e.target.value
        startGame(newDiff)
        setReadyToStart(false)
    }
  }


  // =========================================================
  function textRerendering() {
    return Array.from(text.current).map((char, index) => {
      
        let typingClassName = "";
        if (index < currentLetterIndex.current) {
          typingClassName = highlightedAlpha.current[index] ?
        "right-alpha" : "wrong-alpha"
        
        
      } else if (index === currentLetterIndex.current) {
          typingClassName = "current-alpha";
        }
        
    
      return <span key={index} className={typingClassName}>{ char }</span>
  })
}

  useEffect(() => {
    function handler(e) {

      
    if (e.key === "Backspace") {
        if (currentLetterIndex.current > 0 && !endGameLogic()) {
          currentLetterIndex.current--
          highlightedAlpha.current.pop()
          setTextInElements(textRerendering())
        }
        return;        
      }
      
    if (e.key.length === 1) {
      
      let cursor = currentLetterIndex.current
      if (text.current[cursor] == e.key && !endGameLogic()) {
        highlightedAlpha.current.push(true);
        playClickSound("sine")
      } else {
        !endGameLogic() && highlightedAlpha.current.push(false);
        !endGameLogic() && playClickSound("triangle")
      }
      
      !endGameLogic() && currentLetterIndex.current++
      setTextInElements(textRerendering())
      setReadyToStart(true)
    }
    
  }

  // - Enthusiastic to learn it 😍
  let audioCtx = null
  function playClickSound(mode) {
  // Create the audio context
  if(!audioCtx) {
    audioCtx = new window.AudioContext();
  }
  
  // Create an oscillator (the sound wave) and a gain node (the volume slider)
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  // Set a high, crisp frequency for a sharp "click" (e.g., 800Hz to 1200Hz)
  oscillator.type = mode;
  oscillator.frequency.setValueAtTime(mode == 'sine' ? 800 : 1100, audioCtx.currentTime); 

  // Fast volume drop-off so it sounds like a snappy click, not a beep
  gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime); // Volume at 30%
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05); // Fade to 0 in 50ms

  // Start and stop instantly
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.05);
}

  
  document.addEventListener("keydown", handler)
  return () => {
    document.removeEventListener("keydown", handler)
  }

    

  }, [endGameLogic()])

  // =========================================================

  // Timer Gen.


  useEffect(() => {

    if(!endGameLogic() && readyToStart) {
      const intervalId = setInterval(() => setTime((sec) => sec > 0 ? sec - 1 : 0), 1000)
      return () => clearInterval(intervalId)
    }


  }, [endGameLogic(), readyToStart]) 


  // Handling Starting the game
  function startGame(newDifficulty) {
    text.current = ALLDATA[newDifficulty][Math.floor(Math.random() * 10)]["text"];
    currentLetterIndex.current = 0
    highlightedAlpha.current = []
    setTime(60) // 60 seconds again
    // todo Also reset the WPM and the accuracy
    gameDifficulty.current = newDifficulty
    
    setTextInElements(Array.from(text.current).map((char, index) => {
      return <span key={index} className={index == 0 ? "current-alpha":undefined}>{ char }</span>
    }))
  }

  // =========================================================

  // WPM (Word Per Minute) && Calculating Accuracy

  function wpmAndAccuracy() {
      const trueChars = highlightedAlpha.current.filter((bool) => bool == true).length;
      const wrongChars = highlightedAlpha.current.filter((bool) => bool != true).length;
      const wpm = Math.ceil((trueChars / 5) * (60 / (60-time)))
      const accuracy = Math.ceil(((trueChars / (trueChars + wrongChars)) * 100))
      return [wpm, accuracy]
  }

  // =========================================================

  // End Game logic
  function endGameLogic () {
    let ended = false;
    if ((currentLetterIndex.current == text.current.length) || time == 0 ){
      ended = true
    }
    return ended
  }


  // =========================================================

  // btn appearance logic

  endGameLogic() && gamesUserPlayed.current++

  function showRestartBtn() {
    if (gamesUserPlayed.current > 0 && (endGameLogic() || readyToStart)) {
      return (<button className="text-blue-400 border border-gray-700 px-2 py-1 rounded ml-[calc(50%-74.37px)] mt-10 cursor-pointer duration-200 hover:bg-gray-700/30" onClick={() => startGame(gameDifficulty.current)}>Restart Game <i className="not-italic">&#10226;</i></button>)
    }
  }



  // ==================== ======== ===========================
  // ==================== PAINTING ===========================
  // ==================== ======== ===========================

  return (
    <main className="bg-[#26252b] text-white font-sora px-10 py-5 h-screen">
      <Header gameEnded={endGameLogic} highScore={highScore} />
      <article className="mt-10">

        <nav className="flex items-stretch flex-col justify-between pb-3 border-b border-b-gray-700 text-xs sm:text-[1rem] sm:flex-row">
          
          {/* WPM, Accuracy, Time */}
          <section className="flex items-center sm:gap-3">

            <div className="flex flex-col items-center grow sm:flex-row sm:gap-1 ">
              <span className="text-gray-400 mb-2 sm:mb-0">WPM: </span>
              <span className="text-white font-bold text-xl sm:text-sm">{endGameLogic() && wpmAndAccuracy()[0]}</span>

            </div>

            <div className="flex flex-col items-center sm:flex-row border-r border-l  border-gray-700 grow sm:border-none  sm:gap-1 ">
              <span className="text-gray-400 mb-2 sm:mb-0">Accuracy: </span>
              <span className="font-bold text-red-300 text-xl sm:text-sm">{endGameLogic() && wpmAndAccuracy()[1] + "%"}</span>

            </div>

            <div className="flex flex-col items-center grow sm:flex-row sm:gap-1 ">
              <span className="text-gray-400 mb-2 sm:mb-0">Time: </span>
              <span className="text-yellow-200 font-bold text-xl sm:text-sm">{time}</span>

            </div>
          </section>




          <section className="grid grid-cols-2 items-center justify-items-stretch gap-2 mt-3 sm:flex sm:flex-row sm:mt-0 ">

            {/* Difficulty */}
            <form className="flex items-center gap-1 md:border-r-2 md:pr-3 md:border-r-gray-700 border-solid ">
              <h2 className="text-gray-400 text-sm hidden md:block">Difficulty:</h2>

              <select className="bg-[#484b56] rounded-sm w-full text-xl sm:text-sm md:hidden" onChange={handlingDiffChange} disabled={time==60 ? false : endGameLogic() ? false : true} value={gameDifficulty.current}>
                <option value="easy" defaultChecked>Easy</option>

                <option value="medium">Medium</option>

                <option value="hard">Hard</option>

              </select>


              <div className="hidden md:block">

                <input id="easy" value="easy" className="radio-input" type="radio" name="typing-level" onChange={handlingDiffChange} defaultChecked disabled={time==60 ? false : endGameLogic() ? false : true}/>
                <label htmlFor="easy">Easy</label>

              </div>
            

              <div className="hidden md:block">
                <input id="medium" value="medium" className="radio-input" type="radio" name="typing-level" onChange={handlingDiffChange} disabled={time==60 ? false : endGameLogic() ? false : true}/>
                <label htmlFor="medium">Medium</label>

              </div>
            

              <div className="hidden md:block">

                <input id="hard" value="hard" className="radio-input"  type="radio" name="typing-level" onChange={handlingDiffChange} disabled={time==60 ? false : endGameLogic() ? false : true}/>
                <label htmlFor="hard">Hard</label>
              </div>

                
              




              
            </form>

            {/* Mode */}
            <form className="flex items-center gap-1 md:pl-3 ">



              <select className="bg-[#484b56] rounded-sm text-xl w-full sm:text-sm md:hidden">
                <option value="timed60">Timed(60s)</option>
                <option value="passage">Passage</option>

              </select>







              <div className="hidden md:flex md:gap-1">
                <h2 className="text-gray-400 text-sm">Mode:</h2>
                <input id="time" className="radio-input"  type="radio" name="typing-mode" defaultChecked/>
                <label htmlFor="time">Timed(60s)</label>

              </div>

              <div  className="hidden md:block">
                <input id="passage" className="radio-input" type="radio" name="typing-mode" />
                <label htmlFor="passage">Passage</label>

              </div>

            </form>

            
          </section>
        </nav>

        {/* Paragraph Section */}
        <section
          className="py-8 border-b border-b-gray-700 text-2xl no-ligatures"
        >
          {textInElements}
        </section>

        {showRestartBtn()}

      </article>
      <Footer />
    </main>
  )
}