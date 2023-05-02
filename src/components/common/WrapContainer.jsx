import React from 'react';
import * as cs from '../../style/commonStyle'

function WrapContainer(props) {
    return (
        <cs.WrapContainer>{props.children}</cs.WrapContainer>
    );
}

export default WrapContainer;