import styled from 'styled-components';

export const Content = styled.div`
  width: 87%;
  padding: 0 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: var(--gray);

  > div {
    display: flex;
    align-items: center;

    img {
      width: 26px;
      height: 26px;
      margin-right: 12px;
    }
  }
`;
