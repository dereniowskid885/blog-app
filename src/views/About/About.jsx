import React from 'react';
import './About.scss';
import '/src/components/layout/ContentBlock/ContentBlock.scss';
import Contact from '../../components/layout/Contact/Contact';
import ContentBlock from '../../components/layout/ContentBlock/ContentBlock';
import ExperienceBlock from '../../components/layout/ExperienceBlock/ExperienceBlock';
import data from '/src/data/About';

function About() {
    return (
        <main className='about'>
            { data.hero &&
                <div className='hero'>
                    <div className='hero__content'>
                        <h1 className='hero__title'>
                            { data.hero.title && data.hero.title }
                        </h1>
                        <h2 className='hero__sub-title'>
                            { data.hero.subtitle && data.hero.subtitle }
                        </h2>
                    </div>
                    <div className='hero__image'>
                        <img src={data.hero.img} alt='about section image' />
                    </div>
                </div>
            }
            { data.firstSection &&
                <div className='content'>
                    <div className='content__block'>
                        <div className='content__image'>
                            <img src={data.firstSection.img} alt='first section image' />
                        </div>
                        <div className='content__wrapper'>
                            { data.firstSection.title && <h2 className='content__title'>{data.firstSection.title}</h2> }
                            { data.firstSection.content_1 && <div className='content__text'>{data.firstSection.content_1}</div> }
                            { data.firstSection.content_2 && <div className='content__text'>{data.firstSection.content_2}</div> }
                        </div>
                    </div>
                </div>
            }
            <ExperienceBlock />
            { data.secondSection &&
                <ContentBlock data={data.secondSection} />
            }
            <Contact />
        </main>
    )
}

export default About;