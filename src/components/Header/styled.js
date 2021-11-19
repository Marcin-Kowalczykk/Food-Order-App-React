import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  bottom: 1;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.navBackground};
  z-index: 1;
`;

export const IconsSection = styled.section`
  display: flex;
`;

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.font.large};
  margin-left: 1em;
  font-weight: 900;
  color: ${(props) => props.theme.color.main};

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.font.small};
  }
`;

export const ImgSection = styled.section`
  width: 100%;
  height: 22em;
  z-index: 0;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-4deg) translateY(-4rem) translateX(-1rem);
`;
