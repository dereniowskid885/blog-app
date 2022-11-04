import React from 'react';
import './Home.scss';
import Contact from '../../components/layout/Contact/Contact';
import Hero from '../../components/layout/Hero/Hero';
import Carousel from '../../components/layout/Carousel/Carousel';
import data from '/src/data/Home';
import ContentBlock from '../../components/layout/ContentBlock/ContentBlock';
import OpinionItem from '../../components/layout/Carousel/OpinionItem/OpinionItem';

function Home() {
    return (
        <main className='home'>
            <Hero logo={data.hero.logo} buttonText={data.hero.buttonText} img={data.hero.img} />
            <ContentBlock data={data.contentBlocks} />
            <Carousel title={data.opinions.title} data={data.opinions.items} block={OpinionItem} />
            <Contact />
        </main>
    )
}

export default Home;