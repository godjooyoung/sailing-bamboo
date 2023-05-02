import React from 'react';
import main from '../../main.png';
import * as cs from '../../style/commonStyle';

function Header() {

    return (
        <cs.Header>
            <cs.ImgContainer>
                <cs.ImgBanner alt="main" src={main} ></cs.ImgBanner>
                <cs.MainTitle>항해99 대나무숲</cs.MainTitle>
            </cs.ImgContainer>
        </cs.Header>
    );
}

export default Header;

