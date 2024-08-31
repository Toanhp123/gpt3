import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = ({ handleToggleMenu }) => {
    return (
        <>
            <p>
                <a href="#home" onClick={handleToggleMenu}>
                    Home
                </a>
            </p>
            <p>
                <a href="#whatgpt3" onClick={handleToggleMenu}>
                    What is GPT-3
                </a>
            </p>
            <p>
                <a href="#possibility" onClick={handleToggleMenu}>
                    OpenAI
                </a>
            </p>
            <p>
                <a href="#features" onClick={handleToggleMenu}>
                    Case Studies
                </a>
            </p>
            <p>
                <a href="#blog" onClick={handleToggleMenu}>
                    Library
                </a>
            </p>
        </>
    );
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    function handleToggleMenu() {
        setToggleMenu((prev) => !prev);
    }

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => handleToggleMenu()}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => handleToggleMenu()}
                    />
                )}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu handleToggleMenu={handleToggleMenu} />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p onClick={handleToggleMenu}>Sign in</p>
                                <button
                                    type="button"
                                    onClick={handleToggleMenu}
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
