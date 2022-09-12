

import React, { useState } from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import InputText from "../Form/InputText";
import '../../components/Modal/ContactUs.less'
import './OtpPopup.less'

const OtpPopup = (props) => {
debugger;
    const { modalData } = props;
    const [isChecked, setIsChecked] = useState(
        modalData ? modalData.Status : false
    );

    const handleSubmit = (values) => {
        debugger;
        let param = {
            verifyOTP: values.verifyOTP,
        };

        props.OTPVerificationHandler(param);

    };

    return (


        <Modal
            visible={props.visible}
            footer={null}
            className="otp-modal"
            width={"650px"}
            onCancel={props.closeModal}
        >
            <div className="otp-modal-header">

                <div className="cancelBtn" onClick={props.closeModal} >
                    <img src={require('../../assets/images/png/cancelBtn.png')}
                        className='otpCancelBtnIMG' />

                </div>

                <div class="Please-verify-your-account">
                    {modalData == undefined
                        ? "  Please verify your account"
                        : "  Please verify your account"
                    }
                </div>
                <div class="Enter-the-4-digit-code-we-sent-to-your-email-id">
                    Enter the 4-digit code we sent to your email id
                </div>
            </div>
            <Formik
                initialValues={{
                    verifyOTP: modalData ? modalData.verifyOTP : "",
                }}
                onSubmit={(values) => handleSubmit(values)}

                render={({ values, handleChange, handleBlur, setFieldValue }) => {
                    return (
                        <Form>
                            <div className="otp-modal-body oneThird">

                                <div className="InputField">
                                    <InputText
                                        className="first"
                                        style={{ 'width': '300px' }}
                                        name="verifyOTP"
                                        placeholder={"Enter OTP"}
                                        value={values.verifyOTP}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />


                                </div>



                            </div>

                            <div className="otp-modal-footer">
                                <div className="otp-modal-footer__btns">
                                    <button type="submit" className="otpButton">Submit</button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            />
        </Modal>
    );
};

export default OtpPopup;