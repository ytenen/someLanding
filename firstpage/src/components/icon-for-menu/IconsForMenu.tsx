import React from "react";

type Props = {
    activeTab: string
}

export const HeartIcon:React.FC<Props> = ({activeTab}) => {
    const color = activeTab === 'main' ? 'rgb(89,117,255)' : 'rgb(192,192,192)';
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={color}
        aria-hidden="true"
        data-slot="icon"
        className="heart-icon"
        style={{width: '100%', height: '100%'}}
    >
        <path
            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
    </svg>)
};

export const EditIcon:React.FC<Props> = ({activeTab}) => {
    const color = activeTab === 'marketing' ? 'rgb(89,117,255)' : 'rgb(192,192,192)';
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={color}
        aria-hidden="true"
        data-slot="icon"
        className="edit-icon"
        style={{width: '100%', height: '100%'}}
    >
        <path
            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
        />
    </svg>)
};

export const StarIcon:React.FC<Props> = ({activeTab}) => {
    const color = activeTab === 'personal' ? 'rgb(89,117,255)' : 'rgb(192,192,192)';
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={color}
        aria-hidden="true"
        data-slot="icon"
        className="star-icon" // Класс для применения стилей
        style={{width: '100%', height: '100%'}}
    >
        <path
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        />
    </svg>)
};






