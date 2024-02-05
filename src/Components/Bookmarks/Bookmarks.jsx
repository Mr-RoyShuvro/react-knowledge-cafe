import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3'>
            <div className='bg-gray-100 p-4 m-4 border-solid border-2 rounded-t-2xl border-blue-700'>
                <h3 className='text-3xl text-blue-700 font-bold'>Spent time on read:{readingTime}</h3>
            </div>
            <div className="bg-gray-300 p-4 m-4 rounded-b-2xl">
            <h2 className="text-2xl text-center font-semibold">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;