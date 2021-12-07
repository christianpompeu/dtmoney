import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      font-weight: 400;
      line-height: 1.5rem;
    }

    td{ 
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      border-radius: 0.25rem;
      color: var(--text-body);

      &:first-child{
        color: var(--text-title);
      }

      &.income{
        color: var(--green);
      }

      &.outcome{
        color: var(--red);
      }
    }
  }
`;
