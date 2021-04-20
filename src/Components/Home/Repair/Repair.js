import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCamera , faLaptop , faTabletAlt , faVideo , faGamepad} from '@fortawesome/free-solid-svg-icons';


const Repair = () => {
    return (
        <>
            <div className="container">
                <h1 class="text-center text-primary my-5">WE REPAIR</h1>
                <div className="row my-5">
                    <div className="col-md-4 col-sm-12 m-sm-auto d-flex justify-content-center">
                        <div className="col-md-2 fs-2">
                        <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        <div className="col-md-10">
                            <h4>MOBILE PHONES</h4>
                            <p>The mobile phone is stimulating one of the most important technological revolutions in human history. This article first presents impacts, challenges, and predictions of mobile phone use.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faCamera} /></div>
                        <div className="col-md-10">
                            <h4>PHOTO CAMERAS</h4>
                            <p>Though there are many types of cameras, all include five indispensable components: (1) the camera box, which holds and protects the sensitive film from all light except that entering through the lens.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faTabletAlt} /></div>
                        <div className="col-md-10">
                            <h4>TABLETS</h4>
                            <p>In recent years, Tablets have emerged as devices that chalk out the perfect balance between smartphones and laptops. A tablet can be defined as a portable notebook that is built on a mobile operating system platform.</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faLaptop} /></div>
                        <div className="col-md-10">
                            <h4>COMPUTERS</h4>
                            <p>The first computers were used primarily for numerical calculations. However, as any information can be numerically encoded, people soon realized that computers are capable of general-purpose information processing.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faVideo} /></div>
                        <div className="col-md-10">
                            <h4>VIDEO CAMERAS</h4>
                            <p>A still video camera resembling traditional photographic apparatus (the Sony Mavica single-lens reflex) was first demonstrated in 1981. It uses a fast-rotating magnetic disc, two inches in diameter.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <div className="col-md-2 fs-2"><FontAwesomeIcon icon={faGamepad} /></div>
                        <div className="col-md-10">
                            <h4>GAME CONSOLES</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Repair;