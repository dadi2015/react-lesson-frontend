import React from 'react';
import {ILayout} from "../../common/types/layout";
import TopBarComponent from "../top-bar";

const LayoutComponent = ({children}: ILayout) => {
    return (
        <>
            <TopBarComponent />
            {children}
        </>
    );
};

export default LayoutComponent;