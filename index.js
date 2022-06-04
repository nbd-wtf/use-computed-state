import {useState, useEffect} from 'react'

export default function useComputedState(comp, deps, initial) {
  let [result, setResult] = useState(initial)

  useEffect(() => {
    Promise.resolve().then(async () => {
      setResult(await comp())
    })
  }, deps)

  return result
}
