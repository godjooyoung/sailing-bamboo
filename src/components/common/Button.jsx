import React from 'react';
import * as cs from '../../style/commonStyle'

function Button(props) {
    return (
        <>
            {
                props.size === 'm' ? <cs.BtnM type={props.type} onClick={props.onClick}>{props.children}</cs.BtnM> : <cs.BtnS type={props.type} onClick={props.onClick}>{props.children}</cs.BtnS>
            }
        </>
    );
}

export default Button;