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
            { data.hero &&
                <Hero data={data.hero} />
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
            { contactData &&
                <ContactBlock data={contactData} />
            }
        </main>
    )
}

export default About;