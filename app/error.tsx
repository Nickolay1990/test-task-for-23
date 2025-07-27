"use client";

interface ErrorProps {
    error: Error;
}

export default function Error({ error }: ErrorProps) {
    return (
        <>
            <h1>Oops! Error!!!</h1>
            <p>{error.message}</p>
        </>
    );
}
