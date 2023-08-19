

type Props = {
    runFunction: any
}

function Button({ runFunction }: Props) {
  return (
    <button onClick={runFunction} className="transition-all duration-300 border border-gray-200 w-full mt-4 px-4 py-12 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-slate-50 text-xl">Play</button>
    
  )
}

export default Button