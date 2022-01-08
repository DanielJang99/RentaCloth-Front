import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useNavbar } from "@src/states/NavbarContext";
import { RentProvider } from "@src/states/RentContext";
import StepOne from "@components/rent/steps/StepOne";
import StepTwo from "@components/rent/steps/StepTwo";
import StepThree from "@src/components/rent/steps/StepThree";
import StepDone from "@src/components/rent/steps/StepDone";
import Product from "@src/types/product.type";

function Rent(): React.ReactElement {
    const router = useRouter();

    const step = router.query.step as string;
    const size = router.query.size as string;
    const color = router.query.color as string;

    const { setHeader } = useNavbar();
    useEffect(() => {
        setHeader("렌탈 신청하기");
    }, []);

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (!router.isReady) return;
        const { product_id } = router.query;
        const fetchProduct = async () => {
            const apiUrl = process.env.NEXT_PUBLIC_API;
            const res = await axios.get(`${apiUrl}/products/${product_id}`);
            const productData: Product = res.data.product;
            return setProduct(productData);
        };
        fetchProduct();
    }, [router.isReady]);

    return (
        <>
            {product && (
                <RentProvider>
                    {step === "1" && (
                        <StepOne product={product} size={size} color={color} />
                    )}
                    {step === "2" && <StepTwo product={product} />}
                    {step === "3" && <StepThree product={product} />}
                    {step === "done" && <StepDone product={product} />}
                </RentProvider>
            )}
        </>
    );
}

export default Rent;
