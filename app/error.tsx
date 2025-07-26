"use client";

interface ErrorProps {
    error: Error;
}

export default function Error({ error }: ErrorProps) {
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", error.message);

    return (
        <>
            <h1>Oops! Error!!!</h1>
            <p>{error.message}</p>
        </>
    );
}
