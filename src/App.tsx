import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class="container">
      <h1>SolidJS Starter</h1>
      <div class="card">
        <button onClick={() => setCount(count() + 1)}>
          Count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    </div>
  )
}

export default App