import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  color: #fff;
`;

export const ReturnHome = styled.div`
  margin-top: 20px;
  span {
    size: 24px;
    display: block;
    background: #00c6bc;
    padding: 1rem 2rem;
    color: #fff;
  }
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  a {
    font-size: 2rem;
    color: #00c6bc;
    margin-bottom: 20px;
  }

  small {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
  }

  p {
    margin-top: 20px;
    font-size: 1rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 150px;
    border-radius: 50%;
    border: 4px solid #00c6bc;
    margin-bottom: 20px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 2.5rem;
  }

  @media (max-width: 414px) {
    h2 {
      font-size: 18px;
    }

    h3 {
      font-size: 14px;
    }
    img {
      width: 70px;
      height: 70px;
    }

    span {
      background: green;
      display: block;
      font-size: 2rem;
    }
  }
`;

export const ProfileInfo = styled.div`
  ul {
    display: flex;
    gap: 20px;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    text-align: center;

    li {
      background: #707788;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      border-radius: 0.25rem;
      font-size: 1rem;

      span {
        font-size: 0.875rem;
        opacity: 0.5;
        margin-top: 15px;
      }
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;

  margin-top: 200px;

  p {
    font-size: 1rem;
  }
`;
