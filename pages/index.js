import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import SlideImage1 from '../images/slideshow/slideshow-1.jpeg';
// import SlideImage2 from '../images/slideshow/slideshow-2.jpeg';
// import SlideImage3 from '../images/slideshow/slideshow-3.jpeg';


import Hero from '../components/Hero';
import Info from '../components/Info';

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
    </>
  );
}
