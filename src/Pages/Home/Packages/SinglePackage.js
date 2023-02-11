import React from 'react';
import flower1 from '../../../assests/flowers/rose.jpg'
import flower2 from '../../../assests/flowers/rose2.jpg'
import flower3 from '../../../assests/flowers/rose3.jpg'

const SinglePackage = () => {
    return (
        <div  className=''>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
                <div>
                    <div className="card w-64 bg-base-100 shadow-xl ">
                        <figure><img src={flower1} alt="Shoes" className='w-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-64 bg-base-100 shadow-xl">
                        <figure><img src={flower2} alt="Shoes" className='w-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-64 bg-base-100 shadow-xl">
                        <figure><img src={flower3} alt="Shoes" className='w-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePackage;