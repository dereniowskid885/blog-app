import React from 'react';
import './About.scss';
import '/src/components/layout/ContentBlock/ContentBlock.scss';
import ContactBlock from '../../components/layout/ContactBlock/ContactBlock';
import ContentBlock from '../../components/layout/ContentBlock/ContentBlock';
import ExperienceBlock from '../../components/layout/ExperienceBlock/ExperienceBlock';
import data from '/src/data/About';
import contactData from '/src/data/ContactBlock.js';
import Hero from '../../components/layout/Hero/Hero';

function About() {
    return (
        <main className='about'>
            <Hero data={data.hero} />
            <ContentBlock data={data.firstSection} />
            <ExperienceBlock data={data.experienceBlock} />
            <ContentBlock data={data.secondSection} />
            <ContactBlock data={contactData} />
        </main>
    )
}

export default About;