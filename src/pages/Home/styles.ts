import styled, { css } from 'styled-components';

import backgroung from '../../assets/img/02.jpg';

interface PropsOption {
  active?: boolean;
}

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  form {
    max-width: 413px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 780px) {
      width: 100%;
    }
  }

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 480px;
  }
`;

export const Content = styled.div`
  max-width: 1100px;
  height: 744px;
  margin-top: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 149px;
  color: var(--white);
  font-size: 16px;
  font-weight: 32px;
  border-radius: 12px;
  padding: 8px;
  background: var(--primary);
  transition: 0.3s;

  &:hover {
    background-color: #2e538c;
  }

  @media (max-width: 780px) {
    width: 132px;
  }
`;

export const TopLeft = styled.div`
  @media (max-width: 780px) {
    border-radius: 12px;
  }

  width: 413px;
  height: 100%;

  padding: 4px 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--white);
  border-radius: 12px 0 0 12px;

  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > li {
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0 8px;
      margin-top: 26px;

      border-bottom: 2px solid var(--line);

      &:last-child {
        border-bottom: none;
      }
    }

    > li + li {
      margin-top: 16px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 4px;

  > strong {
    font-size: 36px;
    line-height: 42px;
    font-weight: 400;
    color: var(--gray);
  }

  > span {
    font-size: 18px;
    line-height: 24px;
    font-weight: 200;
  }
`;

export const Temp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 16px;

  > strong {
    font-size: 28px;
    color: var(--gray);
    font-weight: 400;
  }

  > p {
    max-width: 300px;
    font-size: 26px;
    color: var(--gray);
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 37px;
  margin-top: 62px;
  display: flex;
  align-items: center;
  position: relative;

  border-bottom: 2px solid var(--line);
`;

export const Options = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Option = styled.div<PropsOption>`
  font-size: 18px;
  padding: 0 4px 0;
  font-weight: 600;
  color: ${props => (props.active ? 'black' : 'var(--gray)')};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;

  transition: 0.3s;

  &:hover {
    color: black;
    cursor: pointer;
  }

  ${props =>
    props.active &&
    css`
      ::after {
        content: '';
        width: 140px;
        height: 2px;
        background: var(--primary);
        position: absolute;
        bottom: 0;
      }
    `}
`;

export const TopRigth = styled.div`
  @media (min-width: 780px) {
    display: flex;
  }

  display: none;
  width: 100%;
  height: 100%;
  flex: 1;

  background: url(${backgroung}) no-repeat center;
  background-size: cover;
  padding: 62px 38px 0;

  border-radius: 0 12px 12px 0;

  justify-content: space-between;

  > strong {
    color: var(--white);
    font-weight: 400;
    font-size: 80px;
  }

  > h1 {
    color: var(--white);
    font-weight: 400;
    font-size: 72px;

    text-align: center;

    > h2 {
      font-weight: 400;
      font-size: 30px;
    }
  }
`;
