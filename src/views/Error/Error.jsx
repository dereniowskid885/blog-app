import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';
import data from '/src/data/Error.js';
import Breadcrumbs from '/src/components/layout/Breadcrumbs/Breadcrumbs';

function Error() {
    return (
        <main className='error'>
            { data.breadcrumbsTitle &&
                <Breadcrumbs title={data.breadcrumbsTitle} />
            }
            <div className='error__content'>
                { data.title &&
                    <h2>{data.title}</h2>
                }
                { data.buttonText &&
                    <Link to={'/'}>
                        <button className='btn'>{data.buttonText}</button>
                    </Link>
                }
            </div>
        </main>
    )
}

export default Error;