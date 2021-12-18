import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia } from "@mui/material";

function ProductCarousel({ image_urls }) {
    return (
        <>
            {typeof window !== "undefined" && image_urls && (
                <Carousel autoPlay={false} animation={"slide"}>
                    {image_urls.map((image, index) => {
                        return (
                            <Card
                                sx={{
                                    maxWidth: 430,
                                    borderRadius: 0,
                                }}
                                key={index}
                            >
                                <CardMedia
                                    component="img"
                                    height="550px"
                                    image={image}
                                    alt="product image"
                                />
                            </Card>
                        );
                    })}
                </Carousel>
            )}
        </>
    );
}

export default ProductCarousel;
