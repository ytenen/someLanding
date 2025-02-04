import styles from "./index.module.css"
import React from "react";
import {SectionTitle} from "@/components/section-title/SectionTitle";
import {Icon} from "@iconify/react";
import {MainParagraph} from "@/components/main-paragraph/MainParagraph";
import {PriceCard} from "@/components/price-card/PriceCard";
import {card1, card2} from "@/screens/prices/prices";
import {CheckMark} from "@/components/check-mark/CheckMark";

const rightAddon =<Icon
    icon="ph:arrow-up-right"
    style={{ fontSize: '28px', color: 'rgb(255, 255, 255)' }}
    rotate={0}
    flip="none"
/>;


export const PricesScreen = () => {
    return (
        <div className={styles.cutArticle}>
            <SectionTitle background={"light"}>Prices</SectionTitle>
            <div className={styles.mainInfo}>
                <MainParagraph background={"light"}>Choose Your Plan</MainParagraph>
            </div>
            <div className={styles.cardsContainer}>
                <PriceCard title={"Navigator Basic"} description={"Everything you need for an efficient \n" +
                    "escape room. Free Forever!"} price={"$0 /month"} text={card1} buttonText={"Get Basic"} buttonComponentType={"simpleButton"} buttonType={"basic"} icon={rightAddon} buttonLink={"#getBasic"} isPopular={false}/>
                <PriceCard title={"Navigator PRO"} description={"A Professional Solution \n" +
                    "for Market Leaders!"} price={"from $24 /month"} text={card2} buttonText={"Try for free"} buttonType={"buttonComponent"} buttonComponentType={"tryForFreeButton"} icon={rightAddon} buttonLink={"#tryForFree"} isPopular={true}/>
            </div>
            <div className={styles.checkMarksContainer}>
                <div className={styles.mark}>
                    <CheckMark checkMarkDiv={styles.checkMarkDiv} checkMark={styles.checkMark}/>
                    Free trial
                </div>
                <div className={styles.mark}>
                    <CheckMark checkMarkDiv={styles.checkMarkDiv} checkMark={styles.checkMark}/>
                    Cancel anytime
                </div>
                <div className={styles.mark}>
                    <CheckMark checkMarkDiv={styles.checkMarkDiv} checkMark={styles.checkMark}/>
                    Support included
                </div>
            </div>
        </div>
    )
}