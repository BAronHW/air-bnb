import stars from './images/Star1.png'
import PropTypes from 'prop-types';

export default function Card(props) {
    const {coverImg,reviewCount,location,title,price} = props;
    return(
        <div className='card'>
            {console.log(coverImg)}
            <img src={coverImg} alt="Swimmer" onError={(e) => console.log('Image failed to load', e)} />
            <div className='card--stats'>
                <img src={stars} alt="stars" className='card--star'/>
                <span className='gray'>({reviewCount}) • </span>
                <span className='gray'>{location}</span>
            </div>
                <p className='card--title'>{title}</p>
                <p className='card--price'><span className='bold'>From ${price} / person</span></p>
            
        </div>
    )
}

Card.propTypes = {
    coverImg: PropTypes.string.isRequired,
    reviewCount: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};