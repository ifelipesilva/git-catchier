import React, { useState } from 'react';
import { Container, Header } from './styles';
import logo from '../../assets/logo.svg';

function Search({ history }) {
  const [username, setUsername] = useState('');
  const handleChange = (e) => setUsername(e.target.value);

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Header>
          <img src={logo} alt="logo" />
        </Header>
        <h1>
          Find your <strong> Github Profile!</strong>
        </h1>
        <input type="text" placeholder="Username..." onChange={handleChange} />
        <button type="button" onClick={() => history.push(`/user/${username}`)}>
          Search
        </button>
      </form>
    </Container>
  );
}

export default Search;
