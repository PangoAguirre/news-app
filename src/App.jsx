import { useState } from 'react'
import './App.css'
import { News } from './components/News'
import { Search } from './components/Search'
import { Pagination } from './components/Pagination'
import { useNews } from './hooks/useNews'

function App() {

  const [word, setWord] = useState('')
  const [numPage, setNumPage] = useState(1)
  const {news, totalResults, loading} = useNews({word: word, numPage: numPage})

  return (
    <main className='app'>
      <header>
        <Search updateWord={setWord}/>
      </header>
      <main className='news'>
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Cargando noticias...</p>
          </div>
        ) : (<News news={news}/>)}
      </main>
      <footer>
        <Pagination numPage={numPage} totalResults={totalResults} updateNumPage={setNumPage} />
      </footer>
    </main>
  )
}

export default App
