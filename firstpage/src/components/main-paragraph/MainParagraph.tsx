import styles from './mainParagraph.module.css'
import React from "react";

type Props = {
    children: string;
    background: "light" | "dark";
}

export const MainParagraph:React.FC<Props> = ({children, background}) =>  {
    const paragraphStyle = background === "light" ? styles.paragraphTextForLight : styles.paragraphTextForDark;
    return (
        <div className={styles.paragraphContainer}>
            <h1 className={paragraphStyle}>
                {children}
            </h1>
        </div>
    )
}