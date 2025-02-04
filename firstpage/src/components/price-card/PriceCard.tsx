import React, {ReactNode} from "react";
import styles from "./priceCard.module.css";
import {Button} from "@/components/button/Button";
import {IBM_Plex_Mono} from "next/font/google";


const Ibm_mono = IBM_Plex_Mono({
    weight: ['500'],  // Укажите желаемые веса шрифта
    subsets: ['latin'],       // Укажите набор символов
});

type Props = {
    title: string,
    description: string,
    price: string,
    text: Array<string>,
    buttonText: string,
    buttonType: "basic" | "buttonComponent",
    buttonComponentType:"tryForFreeButton" | "simpleButton",
    icon: ReactNode,
    buttonLink: string,
    isPopular: boolean,
}

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            width: '100%',
            height: '100%',
            display: 'inline-block',
            fill: 'var(--token-c85acba2-c587-413a-a6d5-9218b0e34428, rgb(89, 117, 255))',
            flexShrink: 0,
        }}
        focusable="false"
        viewBox="0 0 24 24"
        color="var(--token-c85acba2-c587-413a-a6d5-9218b0e34428, rgb(89, 117, 255))"
    >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
);

export const PriceCard: React.FC<Props> = ({title, description, price, text, buttonText, buttonType, buttonComponentType,icon, buttonLink, isPopular}) => {
    const borderColor = isPopular ? "rgb(89, 117, 255)" : "#e5e7eb";
    return (
        <div style={{borderColor: borderColor}} className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <div style={{width:"414px", height:"100px"}}>
                    <div>
                        {!isPopular ? (
                            <div className={styles.title}>
                                {title}
                            </div>
                        ) : isPopular ? (
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <svg width="250px" height="33px">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor: "rgb(61,86,212)", stopOpacity: 1}}/>
                                            <stop offset="100%" style={{stopColor: "rgb(114,60,222)", stopOpacity: 1}}/>
                                        </linearGradient>
                                    </defs>
                                    <text x="0" y="25" fontSize="24" fontWeight="700" fill="url(#gradient)">
                                        {title}
                                    </text>
                                </svg>

                                <div
                                    className={`${Ibm_mono.className} ${styles.popularDiv}`}
                                >
                                    <div
                                        className={styles.popularCircle}
                                    ></div>
                                    Popular
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className={styles.description}>
                        {description}
                    </div>
                </div>
                <div className={styles.price}>
                    {price}
                </div>
            </div>

            <div className={styles.linesContainer}>
                {text.map((line, index) => (
                    // <div key={index} className="item" >
                    <div key={index} className={styles.lines}>
                        <div style={{width: "20px", height: "20px"}}>
                            <CheckIcon/>
                        </div>
                        {line}
                    </div>
                ))}
            </div>
            <div className={styles.buttonContainer}>
                {buttonType === "basic" ? (
                    <a className={styles.buttonBasic} href={buttonLink}
                       style={{width: "414px", height: "48px"}}>{buttonText}</a>
                ) : buttonComponentType === "simpleButton" ? (
                    <div style={{width: "414px", height: "48px"}}>
                        <Button rightAddon={null} line="outline" link={buttonLink}>
                            {buttonText}
                        </Button>
                    </div>
                ) : (
                    <div style={{width: "414px", height: "48px"}}>
                        <Button rightAddon={icon} line="inline" link={buttonLink}>
                            {buttonText}
                        </Button>
                    </div>
                )}
            </div>


        </div>
    )
}