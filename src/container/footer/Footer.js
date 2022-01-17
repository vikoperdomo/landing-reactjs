import React from 'react';
import {Col, Row} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="frisson-footer-area plr--100 plr_lg--30 plr_md--30 plr_sm--30 move-up wow">
            <div className="pt--20 pb--30">
                <Row>
                    <Col md={12} lg={12}>
                        <div className="inner text-center text-md-center">
                            <h6 className="heading heading-h6 text-white font-16 line-height-1-88 font-400">
                                ©  {new Date().getFullYear()} <strong>Frisson Studios, Inc.</strong> All Rights Reserved.
                            </h6>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;
