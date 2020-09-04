import React from 'react';
import './service-item.scss';


const ServiceItem = ({name,imageUrl}) => (
    <div className = 'item1'>
    <tr><div className ='title1'>
        <td><div className ='image-ser' style = {{ backgroundImage: `url(${imageUrl})`
    }}></div></td>
        <td><div className ='name'>{name}</div></td>
        <td><div className ='price'>80</div></td>
        </div>
    </tr>
    </div>

);

export default ServiceItem;

