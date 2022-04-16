import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import myContext from '../context/myContext';
import NavBar from '../components/NavBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function MainPage() {
  const { filter, data } = useContext(myContext);

  return (
    <main className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <nav id="header" className=" sticky z-50 w-full  bg-white  top-0 py-1">
        <Header />
        <NavBar />
      </nav>
      <Carousel>
        <div>
          <img src="assets/1.jpeg" alt="x" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" alt="x" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" alt="x" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {data
            .filter((elem) => elem.category.includes(filter))
            .map((elem) => (
              <ProductCard
                key={elem.id}
                name={elem.productName}
                manufacturer={elem.manufacturer}
                image={elem.image}
                preco={elem.preco}
                id={elem.id}
              />
            ))}
        </div>

      </section>

    </main>
  );
}
