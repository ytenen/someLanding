"use client";

import styles from "./index.module.css";
import React, {useState} from "react";
import {SectionTitle} from "@/components/section-title/SectionTitle";
import {MainParagraph} from "@/components/main-paragraph/MainParagraph";
import {Menu} from "@/components/menu/Menu";
import {Dashboard} from "@/components/dashboard/Dashboard";

export const Features = () => {
    const [activeTab, setActiveTab] = useState<"main" | "marketing" | "personal">("main");
    return (
        <div className={styles.page}>
            <SectionTitle background={"light"}>Features</SectionTitle>
            <div style={{width: "420px", height: "88px"}}>
                <MainParagraph background={"light"}>Advanced Features for Your Business</MainParagraph>
            </div>
            <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
            <Dashboard activeTab={activeTab} />
        </div>
    );
};
