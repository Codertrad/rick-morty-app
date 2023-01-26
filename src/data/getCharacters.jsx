import { useEffect, useState } from 'react'

export const getCharacters = (page) => {
  console.log(page)
  const GET_CHARACTERS_URL = `https://rickandmortyapi.com/api/character/?page=${page}`
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch(GET_CHARACTERS_URL)
      .then(res => res.json())
      .then(data => setCharacters(data.results))
  }, [page])

  return characters
}
