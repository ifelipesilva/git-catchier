import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    color: #fff;
    margin-top: 20px;
    strong {
      color: #edc988;
    }
  }

  form {
    width: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;

    input {
      padding: 10px;
      border: none;
      border-radius: 4px;
      text-align: center;
      width: 70%;
      margin-bottom: 20px;
      margin-top: 20px;
      height: 60px;
    }

    label {
      color: #fff;
      text-align: center;
      background-color: #d7385e;
      padding: 10px;
      border-radius: 4px;
      width: 15%;
      margin: 0;
    }

    button {
      color: #fff;
      background-color: #00c6bc;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      width: 20%;
      height: 60px;
    }
  }

  @media (max-width: 414px) {
    form {
      width: 350px;
    }
    h1 {
      font-size: 20px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  img {
    height: 150px;
    width: 150px;
  }
  span {
    font-size: 48px;
    color: #edc988;
  }

  @media (max-width: 414px) {
    width: 400px;
    span {
      font-size: 30px;
    }
  }
`;

export const Img = styled.img`
  margin-top: 20px;
  width: 627px;
  height: 400px;

  @media (max-width: 414px) {
    width: 360px;
    height: 230px;
  }
`;
