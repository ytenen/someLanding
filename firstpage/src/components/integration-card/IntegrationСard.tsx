import React, {ReactNode} from "react";
import {MainParagraph} from "@/components/main-paragraph/MainParagraph";
import styles from "./integrationCard.module.css"
import {Button} from "@/components/button/Button";
import {Icon} from "@iconify/react";
import Image from "next/image";

type Props = {
    title: string;
    picture: string;
    icon: ReactNode;
    text: Array<string>;
    position: "picture-before"|"picture-after";
}

const rightAddon =<Icon
    icon="ph:arrow-up-right"
    style={{ fontSize: '28px', color: 'rgb(255, 255, 255)' }}
    rotate={0}
    flip="none"
/>;


export const IntegrationCard:React.FC<Props> = ({title,picture,icon,text,position})=> {
    
    const card = <div className={styles.cardContainer}>
        <div style={{display: "flex", flexDirection: "column", gap:"20px"}}>
            <div style={{display:"flex", justifyContent:"start"}}>
                <MainParagraph background={"light"}>{title}</MainParagraph>
            </div>
            {text.map((line, index) => (
                <div key={index} className={styles.textLine}>
                    {icon}
                    <span className={styles.text}>{line}</span>
                </div>
            ))}
            <div className={styles.buttonContainer}>
                <div style={{height: "48px", width: "160px"}}>
                    <Button rightAddon={rightAddon} line={"inline"} link={"#tryForFree"}>Try for free</Button>
                </div>
                <div style={{height: "48px", width: "130px"}}>
                    <Button rightAddon={null} line={"outline"} link={"#bookADemo"}>Book a demo</Button>
                </div>
            </div>
        </div>
    </div>;

    if (position === "picture-before") {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <Image src={picture} alt={"pic1"} height={516} width={525}/>
                {card};
            </div>
        )
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            {card};
            <Image src={picture} alt={"pic1"} height={516} width={525}/>
        </div>
    );
}