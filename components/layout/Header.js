import React, { useContext } from 'react';
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../firebase/context";

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.a`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: "Roboto Slab", serif;
    margin-right: 2rem;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: .7rem;
        padding: 2rem 0;
    }
`;


const Header = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return (
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0%;
            `}
        >
            <ContenedorHeader>
                <div
                    css={css`
                        display: flex;
                        align-items: center;

                        @media(max-width: 768px) {
                            flex-direction: column;
                            width: 100%;
                        }
                    `
                    }
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    <Buscar />
                    
                    <Navegacion />
                </div>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                   { usuario ? (
                       <>
                            <p
                            css={css`
                                margin-right: 2rem;
                            `}
                            >Hola: {usuario.displayName}</p>
                            <Boton bgColor="true" onClick={() => firebase.cerrarSesion()}>Cerrar Sesión</Boton>
                        </>
                   ) : (
                        <>
                            <Link href="/login">
                                <Boton bgColor="true">Login</Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton>Crear Cuenta</Boton>
                            </Link>
                        </>
                   )}
                </div>
            </ContenedorHeader>
        </header>
    )
}

export default Header;
