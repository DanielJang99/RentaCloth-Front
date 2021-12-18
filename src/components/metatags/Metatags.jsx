import React from "react";

function Metatags() {
    return (
        <>
            <meta property="og:title" content="렌타클로스" />
            <meta property="og:site_name" content="렌타클로스" />
            <meta
                name="description"
                content="남성 브랜드 의류 대여 서비스, 렌타클로스"
            />
            <meta
                property="og:description"
                content="남성 브랜드 의류 대여 서비스, 렌타클로스"
            />
            <meta
                property="og:image"
                content="https://rentaclothbucket.s3.ap-northeast-2.amazonaws.com/rentacloth_og.png"
            />
            <meta
                property="og:image:secure_url"
                content="https://rentaclothbucket.s3.ap-northeast-2.amazonaws.com/rentacloth_og.png"
            />
        </>
    );
}

export default Metatags;
