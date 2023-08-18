import { useEffect, useState } from "react"
import Button from "./Button"
import BetBox from "./BetBox"

function Controller() {
  const [hasWon, setHasWon] = useState(false)

  const handlePlaceBet = () => {
    setHasWon(!hasWon)
    console.log(hasWon)
  }

  useEffect(() => {
    console.log(hasWon)
  }, [hasWon]);

  console.log('hello')

  return (
    <><div className="w-full md:w-[850px] lg:w-[1200px] bg-green-500 py-12 mx-auto px-5">
      <Button runFunction={handlePlaceBet}></Button>
      <BetBox></BetBox>
    </div>
    </>
  )
}

export default Controller