import React from 'react';
import './Breadcrumbs.scss';
import { 
    Breadcrumbs as MUIBreadcrumbs,
    Link,
    Typography 
} from '@mui/material';

function Breadcrumbs(props) {
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <MUIBreadcrumbs className='breadcrumbs' aria-label='breadcrumb'>
            <Link href='/'>{'Home'}</Link>
            {pathnames.map((element, index) => {
                const lastElement = index === pathnames.length - 1;
                const link = `/${pathnames.slice(0, index + 1).join('/')}`;

                return lastElement ? (
                    <Typography key={index} color='text.primary'>{props.title ? props.title : element}</Typography>
                ) : (
                    <Link key={index} color='inherit' href={link}>{element}</Link>
                );
            })}
        </MUIBreadcrumbs>
    )
}

export default Breadcrumbs;