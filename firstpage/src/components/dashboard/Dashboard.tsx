import React from "react";
import { tabs } from "@/components/dashboard/Tabs"; // Импортируем данные
import styles from "./dashboard.module.css"
import {Onest} from "next/font/google";

const onest = Onest({
    subsets: ["latin"],
});

type CardWithList = {
    title: string;
    description: string;
    list: string[];
    icon: string;
    gridColumn: string;
    gridRow: string;
    height: string;
};

type CardWithoutList = {
    title: string;
    description: string;
    list?: never;
    icon: string;
    gridColumn: string;
    gridRow: string;
    height: string;
};

type Card = CardWithList | CardWithoutList;

type DashboardProps = {
    activeTab: "main" | "marketing" | "personal";
};

export const Dashboard: React.FC<DashboardProps> = ({ activeTab }) => {
    const activeTabData = tabs[activeTab];

    return (
        <div className={styles.container}>
            <div className={`${styles.gridContainer} ${styles[activeTab]}`}>
                {activeTabData.map((card, index) => (
                    <div
                        className={styles.contentContainer}
                        key={index}
                        style={{
                            gridColumn: card.gridColumn,
                            gridRow: card.gridRow,
                            height: card.height,
                        }}
                    >
                        <div className={styles.iconPlaceholder}>
                            <img src={`/${card.icon}`} alt={`${card.title} icon`} className={styles.icon}/>
                        </div>
                        <h3 className={`${styles.cardTitle} ${onest.className}`}>{card.title}</h3>
                        {"list" in card && card.list ? (
                            <>
                                <p>{card.description}</p>
                                <ul className={`${styles.description} ${onest.className}`}>
                                    {card.list.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p className={`${styles.description} ${onest.className}`}>{card.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
};