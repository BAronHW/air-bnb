import stars from '/assets/images/Star1.png'
import PropTypes from 'prop-types';

export default function Card(props) {
    const {coverImg,reviewCount,location,title,price} = props;
    console.log(coverImg);
    return(
        <div className='card'>
            <img src={`/images${coverImg}`} alt="swimmerimg" className='card--img' />
            <div className='card--stats'>
                <img src={stars} alt="stars" className='card--star'/>
                <span className='gray'>({reviewCount}) • </span>
                <span className='gray'>{location}</span>
            </div>
                <p>{title}</p>
                <p><span className='bold'>From ${price} / person</span></p>
            
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