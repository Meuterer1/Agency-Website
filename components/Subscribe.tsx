import styled from 'styled-components'

const SubscribeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 10px 10px 10px 23px;
  background: white;
  border-radius: 40px;
  min-width: 360px;

  input {
    border: none;
    font-family: 'DM Sans';
    font-size: 18px;
    letter-spacing: 0.54px;

    &:focus {
      outline: none;
    }

    @media (max-width: 420px) {
      text-align: center;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 20px;
      padding: 10px;
    }
  }

  button {
    font-family: 'DM Sans';
    font-size: 18px;
    letter-spacing: 0.54px;
    padding: 8px 15px;
    background: black;
    color: white;
    border-radius: 20px;
    border: none;
    transition: 0.7s ease;

    &:hover {
      background-color: #64ccc5;
      cursor: pointer;
    }

    &:focus {
      outline: 3px dotted #64ccc5;
    }

    @media (max-width: 420px) {
      width: 100%;
      border: 1px solid white;
      margin-top: 10px;
    }
  }

  @media (max-width: 420px) {
    min-width: auto;
    flex-wrap: wrap;

    background: transparent;
  }
`

const Subscribe = () => {
  return (
    <SubscribeDiv>
      <input type="text" placeholder="Enter your email here" />
      <button>Subscribe</button>
    </SubscribeDiv>
  )
}

export default Subscribe
