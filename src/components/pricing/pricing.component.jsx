import React from 'react';
import './pricing.styles.scss';

import ServiceItem from '../service-item/service-item.component';

class Pricing extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                name: 'Eyebrow shaping',
                id:1,
                imageUrl:'https://i.pinimg.com/564x/48/41/6e/48416e662bb6182da26c87113b38a21b.jpg'
                
            },
            {
                name:'Eyebrow Tint',
                id:2,
                imageUrl:'https://i.pinimg.com/564x/b2/72/fe/b272fe919deb4780b3b668cd3a8f9833.jpg'
            },
            {
                name:'Gel Maniucure',
                id:3,
                imageUrl:'https://i.pinimg.com/474x/5f/52/e1/5f52e1bf29f04d73e58024569c3be3db.jpg'

            },
            {
                name:'Shellac Manicure',
                id:4,
                imageUrl:'https://i.pinimg.com/564x/a2/d2/97/a2d2972e5c08bdcaca03a420f0e25e79.jpg'
            },
            {
                name:'Lash Lift',
                id:5,
                imageUrl:'https://i.pinimg.com/564x/46/8d/63/468d63c71946444e2e4c6618b0215593.jpg'
            },
            {
                name:'Eyelash extensions',
                id:6,
                imageUrl:'https://i.pinimg.com/564x/4b/a9/63/4ba963bf41a11816d0810af8a858edca.jpg'
            }
            
        ]
   }
}


     render(){
         return(
             <div className='pricing-menu'>

             <h1 className ='title1'>Our services</h1>
                {
                 this.state.sections.map(({id,name,imageUrl}) => (
                     <ServiceItem key = {id} name={name} imageUrl={imageUrl}/>
                 ))   
                }
             </div>

         )
     }
}

export default Pricing;




