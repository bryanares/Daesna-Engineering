import React from "react";

export default function Container({ children, className = "" }) {
    return (
        <div className={`max-w-[1600px] mx-auto px-2 ${className}`}>
            {children}
        </div>
    );
}
