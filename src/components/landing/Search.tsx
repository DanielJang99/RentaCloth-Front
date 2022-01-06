import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@styles/landing/Search.module.css";

interface SearchProps {
    searchQuery?: string;
}

function Search({ searchQuery }: SearchProps) {
    const router = useRouter();
    const [query, setQuery] = useState("");

    useEffect(() => {
        searchQuery && setQuery(searchQuery);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value);
    };

    const goToSearch = (): void => {
        router.push(`/products/search?query=${query}`);
    };
    return (
        <div className={styles.search_bar}>
            <input
                type="text"
                placeholder={query ? query : "찾으시는 상품이 있나요?"}
                className={styles.search_input}
                onChange={handleChange}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    e.key === "Enter" && goToSearch();
                }}
            />
            <div className={styles.search_img} onClick={() => goToSearch()} />
        </div>
    );
}

export default Search;
