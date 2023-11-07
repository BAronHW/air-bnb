import './index.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import carddata from './data'


const data = carddata.map((item) => {
  return (
    <Card
    key={item.id}
    {...item}
    />
  );
});

export default function App(){
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
}