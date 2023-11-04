import './index.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import carddata from './data'

const data = carddata.map((info)=>{
    return(
        // eslint-disable-next-line react/jsx-key
        <Card
          img={info.coverImg}
          rating={info.stats.rating}
          reviewCount={info.stats.reviewCount}
          location={info.location}
          title={info.title}
          price={info.price}
        />

        
    )
})

  export default function App() {
    return (
      <div>
        <Navbar/>
        <Hero/>
        {data}
      </div>
        
    )
    
}
