import React from 'react';
import './pricing.styles.scss';
import { withRouter} from 'react-router-dom';

import ServiceItem from '../service-item/service-item.component';

class Pricing extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                name: 'Eyebrow shaping',
                id:1,
                price:'15$',
                imageUrl:'https://i.pinimg.com/564x/48/41/6e/48416e662bb6182da26c87113b38a21b.jpg',
                linkUrl:'book'
            },
            {
                name:'Eyebrow Tint',
                id:2,
                price:'15$',
                imageUrl:'https://i.pinimg.com/564x/b2/72/fe/b272fe919deb4780b3b668cd3a8f9833.jpg',
                linkUrl:'eyebrow-tint'
            },
            {
                name:'Gel Maniucure',
                id:3,
                price:'40$',
                imageUrl:'https://i.pinimg.com/474x/5f/52/e1/5f52e1bf29f04d73e58024569c3be3db.jpg',
                linkUrl:'gel-manicure'

            },
            {
                name:'Shellac Manicure',
                id:4,
                price:'30$',
                imageUrl:'https://i.pinimg.com/564x/a2/d2/97/a2d2972e5c08bdcaca03a420f0e25e79.jpg',
                linkUrl:'shellac-manicure'
            },
            {
                name:'Lash Lift',
                id:5,
                price:'60$',
                imageUrl:'https://i.pinimg.com/564x/46/8d/63/468d63c71946444e2e4c6618b0215593.jpg',
                linkUrl:'lash-lift'
            },
            {
                name:'Eyelash extensions',
                id:6,
                price:'80$',
                imageUrl:'https://i.pinimg.com/564x/4b/a9/63/4ba963bf41a11816d0810af8a858edca.jpg',
                linkUrl:'lash-extentions'            }
            
        ]
   }
}


     render(){
         return(
             
            <div className='pricing-container'>
             <h1 className ='title1'>Our services</h1>
             <h1 className ='title-b'>Our services</h1>
             <div className='pricing-menu'>  
             {
                 this.state.sections.map(({id,name,imageUrl,price, linkUrl}) => (
                     <ServiceItem key = {id} name={name} imageUrl={imageUrl} linkUrl = {linkUrl} price ={price}/>
                 ))   
                }
             </div>
             </div>

         )
     }
}

export default withRouter(Pricing);




