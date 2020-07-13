import styled, { css } from 'styled-components';
import { LocationOn, Cake } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /* firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Banner = styled.div``;
export const Avatar = styled.div``;
export const ProfileData = styled.div``;

const IconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${IconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${IconCSS}
`;

export const Followage = styled.div``;
