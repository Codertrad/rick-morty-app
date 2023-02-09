import { useState } from 'react'
import { getCharacters } from './data/getCharacters'
import Pagination from './components/Pagination'
import Card from './components/Card'
import TitlePage from './components/TitlePage'
import styled from 'styled-components'

const App = () => {
  const [page, setPage] = useState(1)
  const characters = getCharacters(page)

  return (
    <>
      <TitlePage />
      <ContainerCards>
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
      </ContainerCards>
      <Pagination page={page} setPage={setPage} />
    </>
  )
}

export default App

const ContainerCards = styled.div`
  @media (min-width: 425px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3,1fr);
  }
  @media (min-width: 1024px){
    display: grid;
    grid-template-columns: repeat(4,1fr);
  }
`
