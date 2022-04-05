import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <h2 className='text-2xl text-left text-indigo-700'>1.What is context api</h2>
            <small className='text-left m-5'>As with most component-based frontend frameworks, passing some form of data from one component to another is usualy a real need. Typicaly it comes in the form of passing data from a parent to a child component or even child  parent components.The Context API is a component structure provided by the React framework, which enables us to share specific forms  data across all level of the application. Its aimed at solving the problem of
            As we mentioned earlier, the Context API is useful for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and more.</small>
            <h2 className='text-2xl text-left text-indigo-700'>What is simantic tag</h2>
            <small className='text-left m-5'>Semantic HTML tags allow you to add meaning to your markup screen readers, and web browsers can make sense of it. By default, when a user agent reads your content it doesn understand the context and meaning. Semantic HTML tags let you serve structured content to your users, which is especially important for on-page SEO and accessibility.Perhaps its not surprising that the most frequently used semantic elements are the ones that had already existed before HTML5 came forth. Actually, there are three semantic tags without which you cant even create an HTML document You can use inline tags within block-level elements, for instance an emphasized text string within a paragraph or list. Besides block-level semantic elements,</small>
        </div>
    );
};

export default Blogs;