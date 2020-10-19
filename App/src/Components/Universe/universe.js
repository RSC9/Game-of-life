import React, { useEffect } from 'react';
import { getUniverse } from '../../Services/UniverseService';

const Universe = (props) => {
    const [universe, setUniverse] = React.useState([]);

    const buildUniverseHandler = () => {
        return (
            universe.map((row, i) => (
                <div key={i}>
                    {row.map((col, j) => (
                        <span key={j}>{col}</span>
                    ))}
                </div>
            ))
        );
    };

    async function fetchUniverse() {
        setUniverse(await getUniverse());
    };

    useEffect(() => {
        setInterval(fetchUniverse, 2000);
    }, []);

    return (
        <div>
            {buildUniverseHandler()}
        </div>
    );
};

export default Universe;