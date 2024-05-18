import { styled } from "styled-components";
import Container from "../Container";

export const StyledHeader = styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 480px) {    
        flex-direction: row;
    }

    background-color: var(--color-white);
    position: sticky;
    top: 0;
    padding: 1rem 2rem;
    z-index: 1;
`;

export const Navigation = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;

    @media (min-width: 480px) {    
        margin-left: auto;
        gap: 1rem;
    }
`;

export const NavigationItem = styled.li`
    cursor: pointer;
`;