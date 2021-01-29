import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
    color: #0D579A;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #707070;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-tamplate-columns: 1fr;
    grid-tamplate-rows: repeat(3, 80px);
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) [
        grid-tamplate-rows: repeat(3, 60px);
    ]
`

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 20px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #707070;
    cursor: pointer;

    &:hover {
        color: #FFB600;
        transition: 0.2s ease-in-out;
    }
`

