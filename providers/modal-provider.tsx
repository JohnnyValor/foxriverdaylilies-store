"use client";

import { useEffect, useState } from "react";

import PreviewModal from "../components/preview-modal";

const ModalProvider = () => {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <PreviewModal />
        </>
    )
}

export default ModalProvider;