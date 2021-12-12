import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@styles/landing/Search.module.css";

function Search({ searchQuery }) {
    const router = useRouter();
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (searchQuery) {
            setQuery(searchQuery);
        }
    }, []);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const goToSearch = () => {
        router.push(`/products/search?query=${query}`);
    };
    return (
        <div className={styles.search_bar}>
            <input
                type="text"
                placeholder={query ? query : "찾으시는 상품이 있나요?"}
                className={styles.search_input}
                onChange={handleChange}
                onKeyPress={(e) => {
                    e.key === "Enter" && goToSearch();
                }}
            />
            <div className={styles.search_img} onClick={() => goToSearch()} />
        </div>
    );
}

export default Search;
