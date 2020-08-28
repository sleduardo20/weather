import styled from 'styled-components';

export const Container = styled.div`
  max-width: 249px;
  height: 38px;
  padding: 4px;
  border-radius: 12px;

  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  background: var(--white);
  transition: 0.3s;

  input {
    flex: 1;

    width: 100%;
    padding: 8px;

    font-family: 'Roboto';
    font-weight: 400;
    line-height: 22px;
    font-size: 16px;
    color: var(--gray);

    &::placeholder {
      color: #c4c4c4;
    }
  }

  img {
    margin-right: 16px;
  }

  @media (max-width: 780px) {
    max-width: 250px;
    display: flex;
    align-items: center;
  }
`;
