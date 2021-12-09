import React, { useState, useEffect } from 'react';
import {
  Container,
  ReturnHome,
  Content,
  HeaderContent,
  ProfileInfo,
  FooterContent,
} from './styles';
import { FileDiffIcon } from '@primer/octicons-react';

const User = ({ match, history }) => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const url = `https://api.github.com/users/${match.params.username}`;

    const getUserData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUserData(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    getUserData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Content>
        <HeaderContent>
          <img src={userData.avatar_url} alt="" />
          <h1>{userData.name}</h1>
          <a href={userData.html_url}>@{userData.login}</a>

          <small>
            <FileDiffIcon size={16} />
            Joined{' '}
            {new Date(userData.created_at).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </small>
          <p>{userData.bio}</p>
          <ProfileInfo>
            <ul>
              <li>
                {userData.public_repos} <span>REPOSITORIES</span>
              </li>
              <li>
                {userData.followers} <span>FOLLOWERS</span>
              </li>
              <li>
                {userData.following} <span>FOLLOWING</span>
              </li>
            </ul>
          </ProfileInfo>
        </HeaderContent>
      </Content>
      <ReturnHome onClick={() => history.push('/')}>
        <span>Voltar</span>
      </ReturnHome>

      <FooterContent>
        <p>Built React.js·Styled Components·React and more!</p>
      </FooterContent>
    </Container>
  );
};

export default User;
