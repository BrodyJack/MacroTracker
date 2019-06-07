import React from 'react';

export default ({log}) => (
    <div>
        <h2>Food Log</h2>
        {log.map(entry => {
            return <LogEntry key={entry.name} {...entry} />
        })}
        {log.length === 0 ?
            <h2>No Entries</h2> : null}
    </div>
);

const LogEntry = ({name, carbs, fat, protein}) => {
    return (
        <div className="Entry-card">
            <h4>{name}</h4>
            <span>Carbs: {carbs || 0}g | </span>
            <span>Fat: {fat || 0}g | </span>
            <span>Protein: {protein || 0}g</span>
        </div>
    );
};