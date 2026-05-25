import { useEffect, useRef } from "react"
import * as THREE from "three"
import BIRDS from "vanta/dist/vanta.birds.min"

export default function BirdsBg() {

  const vantaRef = useRef(null)

  useEffect(() => {

    let effect = null

    if (typeof BIRDS === "function") {

      effect = BIRDS({
        el: vantaRef.current,
        THREE,
      })

    } else if (typeof BIRDS.default === "function") {

      effect = BIRDS.default({
        el: vantaRef.current,
        THREE,
      })

    }

    return () => {
      if (effect) effect.destroy()
    }

  }, [])

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-10"
    />
  )
}