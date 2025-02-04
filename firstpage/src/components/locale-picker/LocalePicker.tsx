import styles from './localePicker.module.css';

export const LocalePicker = () => {
    return (
        <div className={styles.localePicker}>
            <details className={styles.details}>
                <summary className={styles.summary}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24" fill="rgb(66, 62, 62)">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H175.8c-1.41-28.46-10.27-55.47-25.12-77A88.2,88.2,0,0,1,215.63,120ZM128,215.89c-18.73-20.27-30.09-49-31.77-79.89h63.54C158.09,166.87,146.73,195.62,128,215.89ZM96.23,120c1.68-30.87,13-59.62,31.77-79.89,18.73,20.27,30.09,49,31.77,79.89Zm9.09-77C90.47,64.53,81.61,91.54,80.2,120H40.37A88.2,88.2,0,0,1,105.32,43ZM40.37,136H80.2c1.41,28.46,10.27,55.47,25.12,77A88.2,88.2,0,0,1,40.37,136Zm110.31,77c14.85-21.56,23.71-48.57,25.12-77h39.83A88.2,88.2,0,0,1,150.68,213Z"/>
                    </svg>
                </summary>
                <select
                    id="languageSelect"
                    autoComplete="off"
                    defaultValue="default"
                    className={styles.select}
                >
                    <option value="default">English</option>
                    <option value="de">Germany</option>
                </select>
            </details>
        </div>
    );
}
