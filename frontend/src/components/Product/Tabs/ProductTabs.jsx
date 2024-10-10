import React, { useState } from 'react';
import './ProductTabs.css';

function ProductTabs({ details, specifications }) {
    const [activeTab, setActiveTab] = useState('details'); // Estado para la pestaña activa

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                <button
                    className={`tab-button ${activeTab === 'details' ? 'active' : ''}`}
                    onClick={() => setActiveTab('details')}
                >
                    Details
                </button>
                <button
                    className={`tab-button ${activeTab === 'specifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('specifications')}
                >
                    Specifications
                </button>
            </div>

            <div className="tabs-content">
                {activeTab === 'details' && (
                    <div className="tab-content">
                        <div dangerouslySetInnerHTML={{ __html: details }} />
                    </div>
                )}

                {activeTab === 'specifications' && (
                    <div className="tab-content">
                        <div dangerouslySetInnerHTML={{__html: specifications}}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductTabs;