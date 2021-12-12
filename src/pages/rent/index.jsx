import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import NavbarContext from "src/states/NavbarContext";
import RentContext, { RentProvider } from "@src/states/RentContext";
import StepOne from "@components/rent/steps/StepOne";
import StepTwo from "@components/rent/steps/StepTwo";
import StepThree from "@src/components/rent/steps/StepThree";
import StepDone from "@src/components/rent/steps/StepDone";

function Rent() {
    const router = useRouter();
    const { step } = router.query;

    const [rentContext, rentContextActions] = useContext(RentContext);
    const [navState, navActions] = useContext(NavbarContext);
    useEffect(() => {
        navActions.setHeader("렌탈 신청하기");
    }, []);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;
        const { product_id } = router.query;
        const fetchProduct = async () => {
            const apiUrl = process.env.NEXT_PUBLIC_API;
            const res = await axios.get(`${apiUrl}/products/${product_id}`);
            return setProduct(res.data.product);
        };
        fetchProduct();
    }, [router.isReady]);

    useEffect(() => {
        console.log(rentContext);
    }, [rentContext]);

    return (
        <>
            {product && (
                <RentProvider>
                    {step === "1" && <StepOne product={product} />}
                    {step === "2" && <StepTwo product={product} />}
                    {step === "3" && <StepThree product={product} />}
                    {step === "done" && <StepDone product={product} />}
                </RentProvider>
            )}
        </>
    );
}

export default Rent;
