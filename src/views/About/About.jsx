import React from 'react';
import './About.scss';
import '/src/components/layout/ContentBlock/ContentBlock.scss';
import Contact from '../../components/layout/Contact/Contact';
import ContentBlock from '../../components/layout/ContentBlock/ContentBlock';
import ExperienceBlock from '../../components/layout/ExperienceBlock/ExperienceBlock';
import data from '/src/data/About';
import Hero from '../../components/layout/Hero/Hero';

function About() {
    return (
        <main className='about'>
            { data.hero &&
                <Hero img={data.hero.img} title={data.hero.title} subtitle={data.hero.subtitle} />
            }
            { data.firstSection &&
                <ContentBlock data={data.firstSection} />
            }
            { data.experienceBlock &&
                <ExperienceBlock data={data.experienceBlock} />
            }
            { data.secondSection &&
                <ContentBlock data={data.secondSection} />
            }
            <Contact />
        </main>
    )
}

export default About;