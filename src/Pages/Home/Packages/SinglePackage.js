import React from 'react';
import flower1 from '../../../assests/packages/01.png'
import flower2 from '../../../assests/packages/02.png'
import flower3 from '../../../assests/packages/03.png'

const SinglePackage = () => {
    return (
        <div  className=''>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-3'>
                <div>
                    <div className="card w-68 bg-base-100 shadow-xl ">
                        <figure><img src={flower1} alt="Shoes" className='w-68 p-2 h-56' /></figure>
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
                    <div className="card w-68 bg-base-100 shadow-xl">
                        <figure><img src={flower2} alt="Shoes" className='w-68 p-2 h-56' /></figure>
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
                    <div className="card w-68 bg-base-100 shadow-xl">
                        <figure><img src={flower3} alt="Shoes" className='w-68 p-2 h-56' /></figure>
                        <div className="card-body h">
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