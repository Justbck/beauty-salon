import React from 'react';
import './service-item.scss';
import {Link} from 'react-router-dom';


const ServiceItem = ({name,imageUrl,price, history, linkUrl,match}) => (
    <div className = 'item1'>
        <div className ='title1'>
            <div class='booking'>
                <div className = 'button'>
                <Link className = 'button-link' to ='/book'> Book now </Link>
                </div>
        <div className ='image-ser' style = {{ backgroundImage: `url(${imageUrl})`
    }}></div>
    </div>
    <div className = 'text-space'>
        <div className ='name'>{name}</div>
        <div className ='price'>{price}</div>
    </div>
    </div>
    
    </div>

);

export default ServiceItem;

