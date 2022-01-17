import React from 'react';
import PageContainer from "../container/page";

const LayoutDefault = ({children, className, revealFooter}) => {
    return (
        <PageContainer className={className} revealFooter={revealFooter}>
            {children}
        </PageContainer>
    );
};

export default LayoutDefault;
