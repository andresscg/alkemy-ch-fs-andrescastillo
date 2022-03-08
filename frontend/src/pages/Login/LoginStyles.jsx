import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 0 auto;
  max-width: 120rem;
  min-height: 100vh;
  align-items: center;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;