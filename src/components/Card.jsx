import styled from 'styled-components'

const Card = ({ name, image, status, species, origin, gender, location }) => {
  const handlerStatus = () => {
    if (status === 'Alive') {
      return 'green'
    } else if (status === 'Dead') {
      return 'red'
    }
  }

  return (
    <Container>
      <img src={image} />
      <div className='containerInfo'>
        <h2 className='name'>{name}</h2>
        <ul className='basicInfo'>
          <li>{species}</li>
          <li>-</li>
          <li>{gender}</li>
        </ul>
        <ul className='status'>
          <li className={`stateAlive ${handlerStatus()}`} />
          <li>{status}</li>
        </ul>
        <div className='originLocation'>
          <h3>Origin Location:</h3>
          <p>{origin}</p>
        </div>
        <div className='lastLocation'>
          <h3>Last known location:</h3>
          <p>{location}</p>
        </div>
      </div>
    </Container>
  )
}

export default Card

const Container = styled.div`
  display: flex;
  margin: 2rem auto;
  flex-direction: column;
  width: 80%;
  img{
    border-radius: 10px 10px 0 0;
  }

  .containerInfo{
    background-color: #1d3557;
    border-radius: 0 0 10px 10px;
    padding: 1rem;

    .name{
      font-size: 2rem;
      font-weight: 900;
    }

    .basicInfo{
      display: flex;
      gap: .5rem;
      font-size: 1.2rem;
      font-weight: 300;
    }

    .status{
      display: flex;
      gap: .5rem;
      font-size: 1.2rem;
      align-items: center;
      .stateAlive{
        width: 1rem;
        height: 1rem;
        background-color: #343a40;
        border: 1px solid #000000;
        border-radius: 100%;
      }
      .green{
        background-color: #008000;
      }
      .red{
        background-color: #ba181b;
      }
    }

    .originLocation{
      padding: 1rem 0;
      h3{
        font-size: 1.2rem;
        color: #8091a5;
        font-weight: 500;
      }
      p{
        font-size: 1.4rem;
      }
    }

    .lastLocation{
      h3{
        font-size: 1.2rem;
        color: #8091a5;
        font-weight: 500;
      }
      p{
        font-size: 1.4rem;
      }
    }
  }
`
