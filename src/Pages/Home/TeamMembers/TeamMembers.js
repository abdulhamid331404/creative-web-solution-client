import React from 'react';

const TeamMembers = () => {
    return (
        <center className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2 mb-10'>
            <div>
                <div className="card card-compact w-78 bg-base-100 shadow-xl">
                    <figure><img className="w-78" src="https://thispersondoesnotexist.com/image" alt="Shoes" /></figure>
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
                <div className="card card-compact w-78 bg-base-100 shadow-xl">
                    <figure><img className="w-78" src="https://thispersondoesnotexist.com/image" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </center>
    );
};

export default TeamMembers;