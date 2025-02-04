import React from 'react';
import styles from './header.module.css';
import {LocalePicker} from "@/components/locale-picker/LocalePicker";
import {Logo} from "@/components/logo/Logo";
import {Icon} from "@iconify/react";
import {Button} from "@/components/button/Button";

const rightAddon =<Icon
    icon="ph:arrow-up-right"
    style={{ fontSize: '28px', color: 'rgb(255, 255, 255)' }}  // Задайте видимый цвет
    rotate={0}
    flip="none"
/>;

export const  Header =   ()=> {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <a href="/" className={styles.logo}>
                    <Logo/>
                </a>
                <div className={styles.navLinks}>
                    <div><a href="#features">Features</a></div>
                    <div><a href="#widgets">Widgets</a></div>
                    <div><a href="#integrations">Integrations</a></div>
                    <div><a href="#prices">Prices</a></div>
                </div>
                <div className={styles.headerButtonContainer}>
                <LocalePicker/>
                <div style={{width:"160px", height:"48px"}}>
                    <Button rightAddon={rightAddon} line={"inline"} link={"#tryForFree"}>Try for free</Button>
                </div>
                <div style={{height:"48px", width:"87px"}}>
                    <Button rightAddon={null} line={"outline"} link={"#signIn"}>Sign in</Button>
                </div>
                </div>
            </nav>
        </header>
    );
};

