import React from 'react';
import './service.styles.scss';

const ServicePage = () => (
    <div className ='container'>
        <h1 className ='title1'>Our services</h1>
    <div className = 'service-page'>
        
        <div className ='list'>
            <table className='table'>
              

                <tr className ='title'>
                    <td className ='name'>Eyelash extensions</td>
                    <td className ='price'>80</td>
                </tr>

                <tr className ='title'>
                    <td className ='name'>Lash Lift</td>
                    <td className ='price'>60</td>
                </tr>

                <tr className ='title'>
                    <td className ='name'>Brow shape and tint</td>
                    <td className ='price'>25</td>
                </tr>

                <tr className ='title'>
                    <td className ='name'>Gel manicure/pedicure</td>
                    <td className ='price'>40/50</td>
                </tr>

                <tr className ='title'>
                    <td className ='name'>Shellac manicure/pedicure</td>
                    <td className ='price'>30/40</td>
                </tr>
            </table>
        </div>
    </div>
    </div>
);

export default ServicePage;