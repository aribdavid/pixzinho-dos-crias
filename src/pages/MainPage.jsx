import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

export default function MainPage() {
  return (
    <main className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Header />
      <div className="flex justify-end">
        <Button text="Log in" />
        <Button text="Sign up" />
      </div>
      <section className="bg-white py-8">
        <NavBar />
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </section>

    </main>
  );
}
