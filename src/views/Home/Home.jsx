import React from 'react';
import './Home.scss';
import Contact from '../../components/layout/Contact/Contact';
import Hero from '../../components/layout/Hero/Hero';
import Carousel from '../../components/layout/Carousel/Carousel';
import data from '../../data/Home';
import ContentBlock from '../../components/layout/ContentBlock/ContentBlock';

function Home() {
    return (
        <main className='home'>
            <Hero />
            <ContentBlock data={data} />
            <Carousel />
            <Contact />
        </main>
    )
}

export default Home;