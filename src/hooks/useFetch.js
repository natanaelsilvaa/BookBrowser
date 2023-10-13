import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            try{
                const res = await fetch(url).then((response) => response.json())

                setData(res)

            } catch (error) {
                console.log(error.message)
                setError('Houve um erro ao carregar os Dados!')
            }
            setLoading(false)
        }
        fetchData()
    }, [url])

    return {data, error, loading}




}