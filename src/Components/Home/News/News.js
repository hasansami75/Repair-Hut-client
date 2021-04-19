import React from 'react';
import n1 from '../../../Images/n1.jpg';
import n2 from '../../../Images/n2.jpg';
import n3 from '../../../Images/n3.jpg';
import './News.css';

const News = () => {
    return (
        <div className="container">
            <h1 className="text-center my-5">OUR NEWS</h1>
            <div className="row">
                <div className="col-md-4">
                    <div class="card bg-warning">
                        <img src={n1} class="card-img-top img-resize" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">HOW TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="text-decoration-none text-danger" href="#">Read More...</a>
                        </div>
                        <div class="card-footer text-muted text-center">
                        Updated: 2 days ago
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card bg-info">
                        <img src={n2} class="card-img-top img-resize" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">THE TRANSFER OF DATA FROM TABLET TO PHONE</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="text-decoration-none text-danger" href="#">Read More...</a>
                        </div>
                        <div class="card-footer text-muted text-center">
                        Updated: 10 days ago
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card bg-warning">
                        <img src={n3} class="card-img-top img-resize" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">TERMS OF USE OF PHONES AND TABLETS IN HOT COUNTRIES</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="text-decoration-none text-danger" href="#">Read More...</a>
                        </div>
                        <div class="card-footer text-muted text-center">
                           Updated: 5 days ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;