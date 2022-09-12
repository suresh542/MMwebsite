import React, { useState } from "react";
import { Modal } from "antd";
import './CommingSoonPopup.less'

import '../../components/Modal/ContactUs.less'

const CommingSoonPopup = (props) => {
    debugger;
    const { modalData } = props;
    const [isChecked, setIsChecked] = useState(
        modalData ? modalData.Status : false
    );

    const handleSubmit = (values) => {
        debugger;
        let param = {

        };

        props.addEditHandler(param);

    };




    return (
        <div className="signUpMainPage">

            <Modal
                visible={props.visible}
                footer={null}
                className="commingSoon-modal"
                width={"550px"}
                onCancel={props.closeModal}
            >

                <div className="commingSoon-modal-header">
                    <div className="commingSoonCancelBtn">
                        <img src={require('../../assets/images/png/cancelBtn.png')}
                            className='commingSoonCancelBtnIMG' onClick={props.closeModal} />
                    </div>


                </div>
                <div className="commingSoonImageDiv">
                    <img src={require('../../assets/images/png/CommingSoonImage.png')}
                        className='commingSoonImage' />
                </div>

                <div className="commingSoon-modal-footer">
                    <div class="Were-currently-working-on-creating-our-new-website-Well-be-launching-soon">
                        <p>We're currently working on creating our new website.
                            We'll be launching soon.</p>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default CommingSoonPopup;