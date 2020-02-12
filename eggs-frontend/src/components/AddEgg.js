import React, { useRef, useState } from 'react';
import './AddEgg.css';

// const Egg = ({ egg } ) => <img className={`egg ${egg.size}`} src="/images/egg-icon.png" alt="Egg" />;

const AddEgg = ({ saveEgg }) => {
    const eggSize = useRef(null);
    const eggType = useRef(null);

    const handleAdd = ( ) => {
        const egg = {
            size: eggSize.current.value,
            type: eggType.current.value
        }
        saveEgg( egg );
    }
    return (
        <div className="add-eggs">
            <div className="egg-size">
                <label htmlFor="egg-size">Egg Size</label>
                <select id="egg-size" ref={eggSize}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div className="egg-type">
                <label htmlFor="egg-type">Egg Size</label>
                <select id="egg-type" ref={eggType}>
                    <option value="chicken">Chicken</option>
                    <option value="duck">Duck</option>
                </select>
            </div>
            <button onClick={handleAdd}>
                Add Egg
            </button>
        </div>
    );
}

export default AddEgg;
