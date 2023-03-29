import { useState, useEffect } from "react"
function useFetch(url, category = null) {
    const [data, Setdata] = useState([])
    const [isPending, SetisPending] = useState(false)
    const [eror, Seteror] = useState(false)

    const fetchApi = async () => {
        try {
            const req = await fetch(url)
            if (!req.ok) {
                throw new Error(req.statusText)
            }
            const data = await req.json()
            if (category) {
                filterData(category,data.menu)
            }else{
                Setdata(data.menu)
                
            }
        } catch (err) {
            console.log(err.message);
        }
    }
    function filterData(category,items) {
       
            const filteredData = items.filter((item) => {
                return item.category === category
            })
            Setdata(filteredData)
        }
    
    useEffect(() => {
        fetchApi()
    }, [url,category])


    return (
        { data, isPending, eror }
    )
}

export default useFetch