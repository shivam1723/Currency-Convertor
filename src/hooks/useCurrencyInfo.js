import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function apiCall() {
            try {
                let res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
                res = await res.json();
                setData(res[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        }
        apiCall();
    }, [currency]);

    return data; 
}

export default useCurrencyInfo;
