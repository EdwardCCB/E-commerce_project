import React from "react";
import "../styles/Brands.css";
import intel from "../assets/brands-assets/intel.svg"

export function Brands () {
    return (
        <div >
            <section className="brands">
                <div className="brands-text">
                    <h2 className="brands-text-title">Brands</h2>
                    <p className="brands-text-content">Some brands from our sponsor.</p>
                </div>
                <div className="brands-collage">
                <button className="prev-brand" onClick={() => moveSlide(-1)}>&#10094;</button>
                    <div class="brands-collage-content">
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
                    <button className="next-brand" onClick={() => moveSlide(1)}>&#10095;</button>
                </div>
            </section>
        </div>
    )
}