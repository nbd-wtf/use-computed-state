import {useState, useEffect} from 'react'

export default function useComputedState (comp, deps) {
  let [result, setResult] = useState()

  useEffect(() => {
    setResult(comp())
  }, deps)

  return result
}
