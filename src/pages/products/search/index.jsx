import React, { useEffect, useState, useContext } from "react";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/search/Search.module.css";
import Search from "@components/landing/Search";
import { useRouter } from "next/router";
import axios from "axios";
import ProductGrid from "@components/commons/ProductGrid";
import WarningIcon from "@mui/icons-material/Warning";
import SearchIcon from "@mui/icons-material/Search";
import { useNavbar } from "@src/states/NavbarContext";
import classnames from "classnames";

function ProductsBySearch() {
    const router = useRouter();
    const { query } = router.query;
    const [products, setProducts] = useState([]);

    const { setHeader } = useNavbar();
    useEffect(() => {
        setHeader("상품 검색");
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const api_url = process.env.NEXT_PUBLIC_API;
            const res = await axios.get(`${api_url}/products?search=${query}`);
            return setProducts(res.data.obj_product);
        };
        fetchProducts();
    }, [query]);

    return (
        <div
            className={classnames(
                commons.page_container,
                commons.slide_from_right,
            )}
        >
            <div className={commons.section_container}>
                <div className={styles.search_wrapper}>
                    <Search searchQuery={query} />
                </div>
                <div className={styles.search_total}>
                    {query && products && `총 ${products.length}개의 검색결과`}
                </div>
                {products && products.length > 0 ? (
                    <ProductGrid products={products} />
                ) : (
                    <div className={styles.search_none}>
                        {query ? (
                            <>
                                <WarningIcon sx={{ fontSize: 100 }} />
                                <div className={styles.search_none_text}>
                                    해당 상품이 없습니다. 검색어를 변경해보세요.
                                </div>
                            </>
                        ) : (
                            <>
                                <SearchIcon sx={{ fontSize: 100 }} />
                                <div className={styles.search_none_text}>
                                    찾으시는 상품을 검색해보세요.
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductsBySearch;
