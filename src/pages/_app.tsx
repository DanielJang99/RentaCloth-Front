import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import styles from "@styles/app/App.module.css";
import Navbar from "@components/navbar/Navbar";
import { AuthProvider } from "@src/states/auth.context";
import { NavbarProvider } from "src/states/navbar.context";
import * as gtag from "@src/lib/gtag";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/renta_white.png" />
            </Head>
            <div className={styles.app}>
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
