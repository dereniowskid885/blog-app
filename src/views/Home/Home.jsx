import React from 'react';
import './Home.scss';
import Contact from '../../components/layout/Contact/Contact';
import Hero from '../../components/layout/Hero/Hero';
import Carousel from '../../components/layout/Carousel/Carousel';
import homeData from '/src/data/Home';
import opinionsData from '/src/data/Opinions.js';
import ContentBlock from '../../components/layout/ContentBlock/ContentBlock';
import OpinionItem from '../../components/layout/Carousel/OpinionItem/OpinionItem';

function Home() {
    return (
        <main className='home'>
            <Hero />
            <ContentBlock data={homeData} />
            <Carousel title={opinionsData.title} data={opinionsData.items} block={OpinionItem} />
            <Contact />
        </main>
    )
}

export default Home;