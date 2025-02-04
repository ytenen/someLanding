import React, { ReactNode } from 'react';
import styles from "./button.module.css"
interface Props {
    children: string;
    rightAddon: ReactNode;
    line: "outline" | "inline";
    link: string;
}

export const Button:React.FC<Props> = ({children, rightAddon, line, link}) => {
    if (line === "outline") {
        return (
            <a className={styles.button} href={link}>{children}</a>
        );
    }
    return (
        <a href={link}>
            <div className={styles.buttonFree}>
                {children}
                {rightAddon}
            </div>
        </a>
    );

}
