import React from 'react';
import useComments from '../../hooks/useComments';
import Review from '../Review/Review';

const Reviews = () => {
    const [comment,setComment] = useComments()


   
    return (
        <div className='grid grid-cols-3 gap-4'>
          {
             comment.map(revew=><Review
             revew={revew}
             key={revew.id}
             ></Review>)
          }
        </div>
    );
};

export default Reviews;