import React from 'react';
import './Home.scss';
import ContactBlock from '/src/components/layout/ContactBlock/ContactBlock';
import Hero from '/src/components/layout/Hero/Hero';
import Carousel from '/src/components/layout/Carousel/Carousel';
import data from '/src/data/Home';
import contactData from '/src/data/ContactBlock.js';
import ContentBlock from '/src/components/layout/ContentBlock/ContentBlock';
import OpinionItem from '/src/components/layout/Carousel/OpinionItem/OpinionItem';

function Home() {
    return (
        <main className='home'>
            <Hero data={data.hero} />
            <ContentBlock data={data.contentBlocks} />
            <Carousel data={data.opinions} Block={OpinionItem} />
            <ContactBlock data={contactData} />
        </main>
    )
}

export default Home;