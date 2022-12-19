import React, { useEffect, useState } from 'react';
import './Home.scss';
import ContactBlock from '/src/components/layout/ContactBlock/ContactBlock';
import Hero from '/src/components/layout/Hero/Hero';
import Carousel from '/src/components/layout/Carousel/Carousel';
import data from '/src/data/Home';
import contactData from '/src/data/ContactBlock.js';
import ContentBlock from '/src/components/layout/ContentBlock/ContentBlock';
import OpinionItem from '/src/components/layout/Carousel/OpinionItem/OpinionItem';

function Home() {
    const [ contentBlocks, setContentBlocks ] = useState([]);
    const [ opinions, setOpinions ] = useState([]);
    const anyContentBlocks = contentBlocks.length > 0;
    const anyOpinions = opinions.length > 0;

    useEffect(() => {
        fetch('http://localhost:8000/api/content-blocks/home/', {
            method: 'GET',
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        })
        .then(data => {
            if (data) {
                setContentBlocks(data);
            }
        })
        .catch(error => {
            console.log('Error: ', error);
        });

        fetch('http://localhost:8000/api/opinions/', {
            method: 'GET',
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        })
        .then(data => {
            if (data) {
                setOpinions(data);
            }
        })
        .catch(error => {
            console.log('Error: ', error);
        });
    }, []);

    return (
        <main className='home'>
            <Hero data={data.hero} />
            { anyContentBlocks &&
                <ContentBlock data={contentBlocks} />
            }
            { anyOpinions &&
                <Carousel data={opinions} Block={OpinionItem} title={data.carouselTitle} />
            }
            <ContactBlock data={contactData} />
        </main>
    );
}

export default Home;