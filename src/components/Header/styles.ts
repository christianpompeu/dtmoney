import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  padding: 1rem 0 0 0;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  align-items: center;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFFFFF;
    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;
