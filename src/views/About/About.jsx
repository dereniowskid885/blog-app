import React from 'react';
import './About.scss';
import '/src/components/layout/ContentBlock/ContentBlock.scss';
import Contact from '../../components/layout/Contact/Contact';
import ContentBlock from '../../components/layout/ContentBlock/ContentBlock';
import ExperienceBlock from '../../components/layout/ExperienceBlock/ExperienceBlock';
import aboutData from '/src/data/About';
import experienceData from '/src/data/ExperienceBlock.js';

function About() {
    return (
        <main className='about'>
            { aboutData.hero &&
                <div className='hero'>
                    <div className='hero__content'>
                        <h1 className='hero__title'>
                            { aboutData.hero.title && aboutData.hero.title }
                        </h1>
                        <h2 className='hero__sub-title'>
                            { aboutData.hero.subtitle && aboutData.hero.subtitle }
                        </h2>
                    </div>
                    <div className='hero__image'>
                        <img src={aboutData.hero.img} alt='about section image' />
                    </div>
                </div>
            }
            { aboutData.firstSection &&
                <div className='content'>
                    <div className='content__block'>
                        <div className='content__image'>
                            <img src={aboutData.firstSection.img} alt='first section image' />
                        </div>
                        <div className='content__wrapper'>
                            { aboutData.firstSection.title && <h2 className='content__title'>{aboutData.firstSection.title}</h2> }
                            { aboutData.firstSection.content_1 && <div className='content__text'>{aboutData.firstSection.content_1}</div> }
                            { aboutData.firstSection.content_2 && <div className='content__text'>{aboutData.firstSection.content_2}</div> }
                        </div>
                    </div>
                </div>
            }
            { experienceData &&
                <ExperienceBlock data={experienceData} />
            }
            { aboutData.secondSection &&
                <ContentBlock data={aboutData.secondSection} />
            }
            <Contact />
        </main>
    )
}

export default About;