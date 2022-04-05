import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommentRe = () => {

    const navigate = useNavigate()

    const shoComent=()=>{
        const path = "/review"
        navigate(path)
    }

    return (
        <div className='m-40 '>
          
             <button onClick={shoComent} className='px-16 py-4 text-2xl  text-gray-800 bg-green-300 rounded font-bold ' href="">Reavew all</button> 
        </div>
    );
};

export default CommentRe;