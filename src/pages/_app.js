import React, { createContext } from "react";
import "../styles/globals.css";
import { motion } from "framer-motion";
import Navbar from "@components/navbar/Navbar";
import { AuthProvider } from "@src/states/AuthContext";
import { NavbarProvider } from "src/states/NavbarContext.js";
import commons from "@styles/commons/Commons.module.css";

function MyApp({ Component, pageProps, router }) {
    const pwaStyler = {
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        width: "100%",
        maxWidth: "430px",
        margin: "0 auto",
    };
    return (
        <div style={pwaStyler}>
            <AuthProvider>
                <NavbarProvider>
                    <Navbar />
                    {/* <motion.div
                    key={router.route}
                    initial="pageInitial"
                    animate="pageAnimate"
                    variants={{
                        pageInitial: {
                            translateX: "100%",
                        },
                        pageAnimate: {
                            translateX: 0,
                        },
                    }}
                > */}
                    <Component {...pageProps} />
                    {/* </motion.div> */}
                </NavbarProvider>
            </AuthProvider>
        </div>
    );
}

export default MyApp;
