import React from 'react';
import img1 from '../../../images/icons/group.svg';
import img2 from '../../../images/icons/check.svg';
import img3 from '../../../images/icons/deliveryt.svg';
import img4 from '../../../images/icons/person.svg';
import img5 from '../../../images/icons/deliveryt.svg';
import img6 from '../../../images/icons/Wrench.svg';

const Feathers = () => {
    return (
        <div>
            <div className='text-center my-10'>
                <h5 className='text-orange-600 font-bold'>Core Feathers</h5>
                <h1 className='text-4xl font-bold my-2'>Why Choose Us</h1>
                <small>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</small>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-10'>
                <div className='border-2 p-2'>
                    <img className='w-100 mx-auto' src={img1} alt='' />
                    <h5 className='text-center mt-2'>Expert Team</h5>
                </div>
                <div className='border-2 p-2'>
                    <img className='w-100 mx-auto' src={img2} alt='' />
                    <h5 className='text-center mt-2'>Timely Delivery</h5>
                </div>
                <div className='border-2 p-2'>
                    <img className='w-100 mx-auto' src={img3} alt='' />
                    <h5 className='text-center mt-2'>24/7 Support</h5>
                </div>
                <div className='border-2 p-2'>
                    <img className='w-100 mx-auto' src={img4} alt='' />
                    <h5 className='text-center mt-2'>Best Equipment</h5>
                </div>
                <div className='border-2 p-2'>
                    <img className='w-100 mx-auto' src={img5} alt='' />
                    <h5 className='text-center mt-2'>100% Guarantee</h5>
                </div>
                <div className='border-2 p-2'>
                    <img className='w-100 mx-auto' src={img6} alt='' />
                    <h5 className='text-center mt-2'>Quick Processing</h5>
                </div>
            </div>
        </div>
    );
};

export default Feathers;