import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h3 className="text-3xl">Blogs:{blogs.length}</h3>
            {
                blogs.map(blog => <Blog 
                    handleReadingTime = {handleReadingTime}
                    handleAddToBookmark={handleAddToBookmark}
                    key={blog.id} 
                    blog={blog}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blogs;