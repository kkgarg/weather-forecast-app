import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

function average(data) {
    return _.round[_.sum(data)/data.length];
}

export default (props) => {
    return (
        <div>
            <Sparklines height={60} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>
            <div>Avg: {average(props.data)}</div>
        </div> 
    );
}
