import styles from "./index.module.css"
import Image from "next/image";
import React from "react";
import {SectionTitle} from "@/components/section-title/SectionTitle";
import {MainParagraph} from "@/components/main-paragraph/MainParagraph";
import {companyLogos, textForCard1, textForCard2} from "@/screens/integrations/integrations";
import {IntegrationCard} from "@/components/integration-card/IntegrationСard";
import {CheckMark} from "@/components/check-mark/CheckMark";




export const IntegrationsScreen = () => {
    return (
        <div className={styles.cutArticle}>
            <SectionTitle background={"light"}>Integrations</SectionTitle>
            <div className={styles.mainInfo}>
                <div style={{width: "auto", height: "44px"}}>
                    <MainParagraph background={"light"}>Boost efficiency with Escape Navigator
                        integrations</MainParagraph>
                </div>
                <div className={styles.description}>
                    Escape Navigator supports over 20 different integrations, including Zapier, allowing for seamless
                    interaction among all your systems.
                </div>
                {/*<div className={styles.logoCarousel}>*/}
                {/*    <div className={styles.logoTrack}>*/}
                {/*        {[...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => (*/}
                {/*            <a*/}
                {/*                key={index}*/}
                {/*                href="#"*/}
                {/*                className={`${styles.logoLink} ${styles.logo}`}*/}
                {/*            >*/}
                {/*                <Image*/}
                {/*                    src={company.src}*/}
                {/*                    alt={company.alt}*/}
                {/*                    width={50}*/}
                {/*                    height={50}*/}
                {/*                    className={styles.logoImg}*/}
                {/*                />*/}
                {/*            </a>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={styles.logoCarousel}>
                    {companyLogos.map((company, index) => (
                        <div
                            key={index}
                            className={styles.logoItem}
                        >
                            <Image src={company.src} alt={company.alt} width={43} height={43}/>
                        </div>
                    ))}
                </div>
                <div style={{paddingTop: "100px", paddingLeft:"-16px"}}>
                    <IntegrationCard title={"Easy Migration to Our CRM"} picture={"/picture/card1.webp"}
                                     icon={<CheckMark checkMark={styles.checkMark} checkMarkDiv={styles.checkMarkDiv}/>}
                                     text={textForCard1} position={"picture-before"}/>
                </div>
                <div style={{paddingTop: "70px"}}>
                <IntegrationCard title={"Forget about contracts"} picture={"/picture/card2.webp"}
                                     icon={<CheckMark checkMarkDiv={styles.checkMarkDiv} checkMark={styles.checkMark}/>}
                                     text={textForCard2} position={"picture-after"}/>
                </div>
            </div>
            <div style={{paddingTop: "100px", gap: "0px"}}>
                <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionText}>"No need to stay tied to old solutions. We offer flexible
                        configurations that help you adapt to any changes and ensure steady growth for your business."
                    </div>
                </div>
                <div className={styles.avatar}>
                    <Image src={"/picture/fedor.avif"} alt={"fedor"} width={50} height={50}
                           style={{borderRadius: "50%", justifyContent:"center"}}/>
                    <div>
                        <div className={styles.name}>Fedor Samorodov</div>
                        <div className={styles.founder}>Founder Escape Navigator</div>
                    </div>
                </div>
            </div>
        </div>
    )
}