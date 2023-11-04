import heroimg from '/assets/images/Group77.png';

export default function Hero(){
    return (
        <div className='hero'>
            <img src={heroimg} alt="Hero-img" className='hero--photo'/>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}