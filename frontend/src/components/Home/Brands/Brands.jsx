import React from "react";
import "./Brands.css";
import intel from "./assets/intel.svg"

export function Brands () {
    return (
        <div >
            <section className="brands">
                <div className="brands-text">
                    <h2 className="brands-text-title">Brands</h2>
                    <p className="brands-text-content">Some brands from our sponsor.</p>
                </div>
                <div className="brands-collage">
                    <div className="brands-collage-content">
                        <div className="brand-component">
                            <img src={intel} className="img"></img>
                        </div>
                        <div className="brand-component">
                            <img src={intel} className="img"></img>
                        </div>
                        <div className="brand-component">
                            <img src={intel} className="img"></img>
                        </div>
                    </div>
                    <div className="brand-buttons">
                        <button className="prev-brand" onClick={() => moveSlide(-1)}>&#10094;</button>
                        <button className="next-brand" onClick={() => moveSlide(1)}>&#10095;</button>
                    </div>
                </div>
            </section>
        </div>
    )
}