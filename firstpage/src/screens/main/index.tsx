import styles from "./index.module.css"
import Image from "next/image";
import React from "react";
import {SectionTitle} from "@/components/section-title/SectionTitle";
import {Icon} from "@iconify/react";
import {Button} from "@/components/button/Button";

const rightAddon =<Icon
    icon="ph:arrow-up-right"
    style={{ fontSize: '28px', color: 'rgb(255, 255, 255)' }}
    rotate={0}
    flip="none"
/>;

export const MainScreen = () => {
    return (
            <div className={styles.cutArticle}>
                <SectionTitle background={"light"}>Booking software</SectionTitle>
                <div className={styles.mainInfo}>
                    <div className={styles.paragraphContainer}>
                        <h1 className={styles.paragraphText}>
                            Increase profits and optimize <br/>escape room performance
                        </h1>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <div className={styles.descriptionText}>Escape Navigator CRM - your ultimate All-in-One solution
                            for <br/>flexible management, marketing, and personnel tracking.
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <div style={{height: "48px", width: "160px"}}>
                            <Button rightAddon={rightAddon} line={"inline"} link={"#tryForFree"}>Try for free</Button>
                        </div>
                        <div style={{height: "48px", width: "130px"}}>
                            <Button rightAddon={null} line={"outline"} link={"#bookADemo"}>Book a demo</Button>
                        </div>
                    </div>
                    <Image src="/picture/pic1.webp" alt="pic1" width={1024} height={604}/>
                </div>
            </div>
    )
}