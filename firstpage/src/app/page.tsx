import styles from "./page.module.css";
import {MainScreen} from "@/screens/main";
import {Header} from "@/components/header/Header";
import {WidgetsScreen} from "@/screens/widgets";
import {Onest} from "next/font/google";
import {IntegrationsScreen} from "@/screens/integrations";
import {PricesScreen} from "@/screens/prices";
import {Features} from "@/screens/features";

const onest = Onest({
    weight: ['500'],
    subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${styles.main} ${onest.className}`}>
        <div style={{position:"relative"}}>
            <Header />
        </div>
        <div style={{marginLeft:"1px", marginTop:"-9px"}}>
            <MainScreen/>
        </div>
        <div>
            <Features />
        </div>
        <div>
            <WidgetsScreen/>
        </div>
        <div>
            <IntegrationsScreen/>
        </div>
        <div>
            <PricesScreen/>
        </div>
    </div>
  );
}
