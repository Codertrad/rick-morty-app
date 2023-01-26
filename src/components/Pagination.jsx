import styled from 'styled-components'

const Pagination = ({ page, setPage }) => {
  const increment = () => {
    if (page < 42) {
      setPage(page + 1)
    }
  }

  const decrement = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <PagContainer>
      <button onClick={decrement}>PREV</button>
      <span>{page} page</span>
      <button onClick={increment}>NEXT</button>
    </PagContainer>
  )
}

export default Pagination

const PagContainer = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 2rem;
  button{
    background-color: #1d3557;
    border: none;
    width: 3rem;
    height: 3rem;
    color:#f5f5f5;
    cursor: pointer;
  }
`
