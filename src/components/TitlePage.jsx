import styled from 'styled-components'
import rick from '../assets/rick.png'

const TitlePage = () => {
  return (
    <Title>
      <h1>The Rick and Morty APP</h1>
      <img src={rick} />
    </Title>
  )
}

export default TitlePage

const Title = styled.div`
  font-size: 1.5rem;
  background-color: #f5f5f5;
  color: #011627;
  font-weight: 900;
  text-align: center;
  padding: 4rem 0;
  h1{
  }
  img{
    position: absolute;
    height: 400px;
    width: auto;
    top: -50px;
    left: 0;
    right: 0;
    margin: auto;
  }
`
