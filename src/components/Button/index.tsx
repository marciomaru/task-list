import React from "react";
import styles from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    text: string;
}

export default function Button({ type, onClick, text }: Props) {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
}