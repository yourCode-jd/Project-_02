import React from 'react'

type buttonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    // variant: string;
}

const Button = ({ type, title, icon }: buttonProps) => {
    return (
        <>
            <button className='primaryBtn primaryBtn-text mt-5' type={type}>
                {icon}
                <label className='cursor-pointer'>{title}</label>
            </button>
        </>
    )
}

export default Button