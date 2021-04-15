import React from 'react';
import c3 from '../../../Images/c3.png';
import c2 from '../../../Images/c2.png';
import c1 from '../../../Images/c1.png';

const Choose = () => {
    return (
        <>
            <div className="container-fluid bg-light mt-5">
            <div className="container">
                <h1 class="text-center my-5">WHY CHOOSE US</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img src={c3} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4> QUALITY GUARANTEE</h4>
                        <p class="text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4> CORPORATE SERVICES</h4>
                        <p class="text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="col-md-6">
                    <img src={c1} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <img src={c2} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4> CUSTOMER SERVICE</h4>
                        <p class="text-wrap" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Choose;