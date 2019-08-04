import React from 'react';
import './styles.css';

const Stats = ({ stats }) => {
    if (!stats) {
        // Loading not started
        return <span className="stats">Loading ...</span>;
    }
    return (
        <div className="stats">
            {stats.error && 'Error'}
            {stats.isLoading && 'Loading ...'}
            {stats.downloads !== null && `${stats.downloads} downloads`}
        </div>
    );
};

export default Stats;
