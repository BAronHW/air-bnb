import './index.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import carddata from './data'


const data = carddata.map((info) => {
  return (
    <Card
      key={info.id} // Assign a unique key using the 'id' property from your data
      coverImg={info.coverImg}
      rating={info.stats.rating}
      reviewCount={info.stats.reviewCount}
      location={info.location}
      title={info.title}
      price={info.price}
    />
  );
});

const App = () => {
  return (
    <div>
      <div>
          <Navbar/>
          <Hero/>
          <section className='cards-list'>
          {data}
          </section>
        </div>
    </div>
  );
};

export default App;