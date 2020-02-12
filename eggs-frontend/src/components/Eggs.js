import React from 'react';
import './Eggs.css';

const Egg = ({ egg } ) => <img className={`egg ${egg.size}`} src="/images/egg-icon.png" alt="Egg" />;

const Eggs = ({ eggs = []}) => {
    const eggsList = eggs.map( egg => <Egg key={egg.id} egg={egg} />);
    return (
        <div className="eggs-list">
            {eggsList}
        </div>
    );
}

export default Eggs;
