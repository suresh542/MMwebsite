import React, { useState } from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import InputText from "../Form/InputText";
import { contactUsUpFormValidationSchema } from "../../utils/utils-validation";
import '../../components/Modal/ContactUs.less'

const ContactUs = (props) => {
    const { modalData } = props;
    const [isChecked, setIsChecked] = useState(
        modalData ? modalData.Status : false
    );

    const handleSubmit = (values) => {
        debugger;
        let param = {
            email: values.email,
            message: values.message,
            refresh:true
        };

        props.addEditHandler(param);

    };

    return (

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
                {modalData == undefined
                    ? "Contact Us"
                    : "Contact Us"}
            </div>
            <Formik
                initialValues={{
                    email: modalData ? modalData.email : "",
                    message: modalData ? modalData.message : "",
                }}
                onSubmit={(values) => handleSubmit(values)}

                validationSchema={contactUsUpFormValidationSchema}
                render={({ values, handleChange, handleBlur, setFieldValue }) => {
                    return (
                        <Form>
                            <div className="cs-modal-body oneThird">

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

                                    <InputText
                                        id="messageInput"
                                        type="textarea"
                                        className="first"
                                        style={{ 'width': '1000px' }}
                                        name="message"
                                        label={"Message"}
                                        placeholder={"Message"}
                                        value={values.message}
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
    );
};

export default ContactUs;