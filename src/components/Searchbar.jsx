import PropTypes from 'prop-types';


function Searchbar ({placeholder, onSearch}) {

    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

return (
        <div className='flex justify-start m-6'>
            <input  type="text" className='w-60 h-6 p-8 font-Rubik text-xl bg-slate-200 cursor-pointer outline-1 outline-slate-400  hover:bg-slate-300/75 rounded-xl hover:rounded-xl'
            onChange={handleInputChange}
            placeholder={placeholder}
            />
        </div>
        )
}

Searchbar.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
};

Searchbar.defaultProps = {
    placeholder: 'Search...',
};


export default Searchbar; 

