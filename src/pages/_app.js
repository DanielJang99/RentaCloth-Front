import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import Navbar from "@components/navbar/Navbar";
import { AuthProvider } from "@src/states/AuthContext";
import { NavbarProvider } from "src/states/NavbarContext.tsx";
import * as gtag from "@src/lib/gtag";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    const pwaStyler = {
        minHeight: "100vh",
        backgroundColor: "#F2F2F2",
        width: "100%",
        maxWidth: "430px",
        margin: "0 auto",
    };

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/renta_white.png" />
            </Head>
            <div style={pwaStyler}>
                <AuthProvider>
                    <NavbarProvider>
                        <Navbar />
                        <Component {...pageProps} />
                    </NavbarProvider>
                </AuthProvider>
            </div>
        </>
    );
}

export default MyApp;
