import React from 'react';

const Review = (props) => {
    const {name,id,picture,retting,comment} = props.revew
    return (
        <div className='ml-10 h-60 w-80 border mt-10 rounded'>
           <div className='flex'>
           <img className='w-20' src={picture} alt="" />
           <p className='text-2xl mt-6 text-indigo-800'>{name}</p>
          
            </div> 
            <p className='mt-8 text-gray-700'>{comment}</p>
        </div>
    );
};

export default Review;