"use client";

import React from "react";
import styles from "./menu.module.css";
import {EditIcon, HeartIcon, StarIcon} from "@/components/icon-for-menu/IconsForMenu";



type MenuProps = {
    setActiveTab: React.Dispatch<React.SetStateAction<"main" | "marketing" | "personal">>;
    activeTab: "main" | "marketing" | "personal";
};

export const Menu: React.FC<MenuProps> = ({ setActiveTab, activeTab }) => {
    return (
        <div className={styles.menu}>
            <a
                aria-selected={activeTab === "main"}
                className={`${styles.menuButton} ${activeTab === "main" ? styles.active : ""}`}
                onClick={() => setActiveTab("main")}
            >
                <HeartIcon activeTab={activeTab} />
                Main
            </a>
            <a
                aria-selected={activeTab === "marketing"}
                className={`${styles.menuButton} ${activeTab === "marketing" ? styles.active : ""}`}
                onClick={() => setActiveTab("marketing")}
            >
                <EditIcon activeTab={activeTab} />
                Marketing
            </a>
            <a
                aria-selected={activeTab === "personal"}
                className={`${styles.menuButton} ${activeTab === "personal" ? styles.active : ""}`}
                onClick={() => setActiveTab("personal")}
            >
                <StarIcon activeTab={activeTab} />
                Personal
            </a>
        </div>
    );
};
