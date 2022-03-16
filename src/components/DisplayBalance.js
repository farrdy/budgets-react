import React from 'react';
import { Statistic } from 'semantic-ui-react'

function DisplayBalance({ title, Value, Color = "black", size = 'tiny' }) {
    return (
        <Statistic size={size} color={Color}>
            <Statistic.Label style={{ textAlign: 'left' }}>
                {title}
            </Statistic.Label>
            <Statistic.Value>
                {Value}
            </Statistic.Value>

        </Statistic>
    );
}

export default DisplayBalance;