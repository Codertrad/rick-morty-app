import { useState } from 'react'
import { getCharacters } from './data/getCharacters'
import Pagination from './components/Pagination'
import Card from './components/Card'
import TitlePage from './components/TitlePage'

const App = () => {
  const [page, setPage] = useState(1)
  const characters = getCharacters(page)

  return (
    <>
      <TitlePage />
      {characters.map(
        ({
          id,
          name,
          image,
          status,
          origin,
          species,
          gender,
          location
        } = characters) => (
          <Card
            key={id}
            name={name}
            image={image}
            status={status}
            species={species}
            origin={origin.name}
            gender={gender}
            location={location.name}
          />
        )
      )}
      <Pagination page={page} setPage={setPage} />
    </>
  )
}

export default App
