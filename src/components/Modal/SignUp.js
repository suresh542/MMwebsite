import React, { useState } from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import InputText from "../Form/InputText";
import { signUpFormValidationSchema } from "../../utils/utils-validation";
import './SignUp.less'

import '../../components/Modal/ContactUs.less'

const SignUp = (props) => {
    debugger;
    const { modalData } = props;
    const [isChecked, setIsChecked] = useState(
        modalData ? modalData.Status : false
    );

    const handleSubmit = (values) => {
        debugger;
        let param = {
            email: values.email,
            message: "",
        };

        props.addEditHandler(param);

    };

    return (
        <div className="signUpMainPage">

            <Modal
                visible={props.visible}
                footer={null}
                className="cs-modal"
                width={"550px"}
                onCancel={props.closeModal}
            >

                <div className="cs-modal-header">
                    <div className="cancelBtn">
                        <img src={require('../../assets/images/png/cancelBtn.png')}
                            className='cancelBtnIMG' onClick={props.closeModal} />

                    </div>

                    <h5 className="signUpTitle">
                        {modalData == undefined
                            ? "Keep In Touch"
                            : "Keep In Touch"
                        }
                    </h5>

                </div>
                <Formik
                    initialValues={{
                        name: modalData ? modalData.name : "",
                        email: modalData ? modalData.email : "",
                    }}
                    validationSchema={signUpFormValidationSchema}

                    onSubmit={(values) => handleSubmit(values)}

                    render={({ values, handleChange, handleBlur, setFieldValue }) => {
                        return (
                            <Form>
                                <div className="cs-modal-body oneThird">
                                    <InputText
                                        className="first"
                                        style={{ 'width': '1000px' }}
                                        name="name"
                                        label={"Name*"}
                                        placeholder={"Name"}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}

                                    />

                                    <div className="firstINP">
                                        <InputText
                                            className="first"
                                            style={{ 'width': '1000px' }}
                                            name="email"
                                            label={"Email*"}
                                            placeholder={"Email"}
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                    </div>



                                </div>

                                <div className="cs-modal-footer">
                                    <div className="cs-modal-footer__btns">
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </Form>
                        );
                    }}
                />
            </Modal>
        </div>
    );
};

export default SignUp;