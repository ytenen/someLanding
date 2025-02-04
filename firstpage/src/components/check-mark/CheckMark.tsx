import React from "react";

type Props = {
    checkMark: string,
    checkMarkDiv: string,
}

export const CheckMark:React.FC<Props> = ({checkMarkDiv,checkMark}) => {
    return (
        <div
            className={checkMark}
        >
            <div
                className={checkMarkDiv}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        width: "100%",
                        height: "100%",
                        fill: "white",
                        flexShrink: 0,
                    }}
                    focusable="false"
                    viewBox="0 0 24 24"
                >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
            </div>
        </div>
    );
};