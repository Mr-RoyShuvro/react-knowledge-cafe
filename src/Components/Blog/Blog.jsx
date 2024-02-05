import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {id, title, cover, author_img, author, posted_date, reading_times, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_times} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-800 text-2xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-extrabold mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="https://www.w3schools.com/"> {hash}</a></span>)
                }
            </p>
            <button className='text-blue-700 underline text-xl' onClick={()=> handleReadingTime(id, reading_times)}>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog;