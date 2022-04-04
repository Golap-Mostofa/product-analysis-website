import { useEffect, useState } from "react"

const useComments = () =>{
    const [comment,setComment] = useState([])

    useEffect(()=>{
        fetch("comments.json")
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    return [comment,setComment]
}
export default useComments