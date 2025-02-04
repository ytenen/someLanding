import styles from "./sectionTitle.module.css";
import {Chivo_Mono} from "next/font/google";
import React from "react";

const chivoMono = Chivo_Mono({
    weight: ['400'],
    subsets: ['latin'],
});

type SectionTitleProps = {
    children: string;
    background: "light" | "dark";
}

export const SectionTitle:React.FC<SectionTitleProps> = ({children, background}) => {
    const borderStyle = background === "light" ? styles.mainContainerWhite : styles.mainContainerBlack;
    return (
        <div className={borderStyle}>
            <div className={styles.main}>
                <div className={`${styles.titleText} ${chivoMono.className}`}>{children}</div>
            </div>
        </div>
)
}