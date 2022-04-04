import React, { useState } from 'react';


const Comment = ({user}) => {

  

    const {name,id,picture,retting} = user
    
    return (
        <>
       <div className='ml-3 p-2 w-80 h-60 border-4 rounded  m-4'>
           <div className=' flex  justify-items-center '>
                  <img className='w-10 rounded-full mr-3' src={picture} alt="" />
                <p className='text-violet-700 mt-2'>{name}</p>
                
            </div>
            <p className='mt-8'>Look cool. I am interested in trying nothing earbuds. So many options. Im using master and dynamic mw07+ at the moment. I got my mw07+ under $100 brand new.</p>
            
        </div>
       
       
      </>
      
    );
};

export default Comment;