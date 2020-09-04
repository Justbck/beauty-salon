import React from 'react';
import './service-item.scss';


const ServiceItem = ({name,imageUrl}) => (
    <div className = 'item1'>
    <div className ='title1'>
    <div class='booking'>
    <div className = 'button'>"Lorem "</div>
        <div className ='image-ser' style = {{ backgroundImage: `url(${imageUrl})`
    }}></div>
    </div>
    <div className = 'text-space'>
        <div className ='name'>{name}</div>
        <div className ='price'>80</div>
    </div>
    </div>
    
    </div>

);

export default ServiceItem;

