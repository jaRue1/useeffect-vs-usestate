import React, { useState, useEffect } from "react"

export default function Example(props) {
  const { name } = props
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>{name}</p>
      <p>This is the current {count}</p>
      <button onClick={() => setCount(count + 1)}> Click Me ! </button>
      <button onClick={() => setCount(0)}> Reset Counter</button>
    </div>
  )
}
