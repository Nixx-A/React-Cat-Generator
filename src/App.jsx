import './App.css'
import { useCatImage } from '../src/hooks/useCatImage'
import { useCat } from './hooks/UseCatFact'
// import { AnotherCat } from './components/AnotherCat'

export function App () {
  const { fact, refreshFact } = useCat()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cat App</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first thhee words for ${fact}`} />}
    </main>
  )
}
