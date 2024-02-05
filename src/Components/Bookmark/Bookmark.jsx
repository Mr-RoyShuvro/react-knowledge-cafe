import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='text-white rounded-xl p-4 m-4 bg-gradient-to-r from-red-800 to-orange-600 hover:from-red-800 hover:to-red-600'>
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;