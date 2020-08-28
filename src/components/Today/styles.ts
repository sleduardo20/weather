import styled from 'styled-components';

export const Content = styled.div`
  width: 87%;
  padding: 0 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: var(--gray);

  > strong {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: normal;

    > span {
      color: var(--primary);
      font-weight: 600;
    }
  }

  strong + strong {
    margin-top: 16px;
  }
`;
