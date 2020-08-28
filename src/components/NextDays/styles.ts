import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 87%;
  padding: 0 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > strong {
    width: 100%;
    font-weight: normal;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: var(--gray);

    > span {
      color: var(--primary);
      font-weight: 600;
      width: 30%;
    }
  }
  & + & {
    margin-top: 16px;
  }
`;
