import { createElement } from 'react';

export default function Tabs({children, buttons, buttonsContainer="menu"}) {
    const ButtonsContainer = buttonsContainer;
    // let el = createElement(
    //     buttonsContainer,
    //     null,
    //     buttons
    // )
    return <>                
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}