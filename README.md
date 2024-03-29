<a href="https://nbd.wtf"><img align="right" height="196" src="https://user-images.githubusercontent.com/1653275/194609043-0add674b-dd40-41ed-986c-ab4a2e053092.png" /></a>

# use-computed-state

> React hook that recomputes a value every time one of its dependencies change -- also works with promises/async functions

[![NPM](https://img.shields.io/npm/v/use-computed-state.svg)](https://www.npmjs.com/package/use-computed-state)

## Install

```bash
yarn add use-computed-state
```

or if you use npm

```bash
npm install --save use-computed-state
```

## Usage

```jsx
import React, { useState } from 'react'
import useComputedState from 'use-computed-state'

const Example = () => {
  let [items, setItems] = useState([])
  let count = useComputedState(
    () => items.length,
    [items],
    0
  )
  let promisedCount = useComputedState(
    async () => {
      let response = await Promise.resolve(items.length)
      return response
    },
    [items],
    0
  )

  return (
    <div>
      <button onClick={addItem}>add item</button>
      <div>There are {count} items and {promisedCount} promised items</div>
    </div>
  )

  function addItem(ev) {
    ev.preventDefault()
    setItems([...items, {name: 'new item'}])
  }
}
```

## License

Public Domain.
