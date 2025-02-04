import {SectionTitle} from "@/components/section-title/SectionTitle";
import {MainParagraph} from "@/components/main-paragraph/MainParagraph";
import classes from "./index.module.css"
import React from "react";


export const WidgetsScreen = () =>{
    return (
        <div className={classes.widgets}>
            <SectionTitle background={"dark"}>Widgets</SectionTitle>
            <div style={{width:"auto", height:"44px"}}>
                <MainParagraph background={"dark"}>Online booking widgets</MainParagraph>
            </div>
            <div className={classes.descriptionContainer}>
                <div className={classes.descriptionText}>Better to try once than hear a thousand words. Experience our demo widgets for yourself and see the difference.
                </div>
            </div>
            <div style={{width:"480px", height:"44px", fontSize:"14px", textAlign:"center", color:"rgba(247, 247, 247, 0.4)"}}>
                You can book online using the card number: 4242 4242 4242 4242 with any CVC and expiration date.
            </div>
        </div>
    )
}
