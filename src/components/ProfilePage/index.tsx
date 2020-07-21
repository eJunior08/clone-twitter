import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outline>Editar Perfil</EditButton>

        <h1>Elson Junior</h1>
        <h2>@elson_junior</h2>

        <p>Descrição lorem ipsum</p>

        <ul>
          <li>
            <LocationIcon />
            Espirito Santo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 08 de Junho
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>90</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
