import React from 'react';
import './Home.scss';
import ContactBlock from '../../components/layout/ContactBlock/ContactBlock';
import Hero from '../../components/layout/Hero/Hero';
import Carousel from '../../components/layout/Carousel/Carousel';
import data from '/src/data/Home';
import contactData from '/src/data/ContactBlock.js';
import ContentBlock from '../../components/layout/ContentBlock/ContentBlock';
import OpinionItem from '../../components/layout/Carousel/OpinionItem/OpinionItem';

function Home() {
    return (
        <main className='home'>
            { data.hero &&
                <Hero data={data.hero} />
            }
            { data.contentBlocks &&
                <ContentBlock data={data.contentBlocks} />
            }
            { data.opinions &&
                <Carousel data={data.opinions} Block={OpinionItem} />
            }
            { contactData &&
                <ContactBlock data={contactData} />
            }
        </main>
    )
}

export default Home;