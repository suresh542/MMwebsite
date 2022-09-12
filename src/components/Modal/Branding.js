import React, { useState } from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import InputText from "../Form/InputText";
import { uploadFile } from 'react-s3';
import SingleSelect from '../../components/Form/SingleSelect'
import '../../components/Modal/Branding.less'
import { brandingFormValidationSchema } from "../../utils/utils-validation";
import RadioInput from '../Form/RadioInput';



const S3_BUCKET = 'munch-n-give-app';
const REGION = 'us-east-1';
const ACCESS_KEY = 'AKIA27HVTDDGG2EAZ4VO';
const SECRET_ACCESS_KEY = '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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const Branding = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedSignature, setSelectedSignatureFile] = useState(null);



    const { modalData } = props;
    const [isChecked, setIsChecked] = useState(
        modalData ? modalData.Status : false
    );

    let countryList = [
        {
            "label": "India",
            "value": 1
        },
        {
            "label": "USA",
            "value": 2
        },
        {
            "label": "UK",
            "value": 3
        },
        {
            "label": "Japan",
            "value": 4
        },
        {
            "label": "Germany",
            "value": 5
        },
        {
            "label": "France",
            "value": 6
        },
        {
            "label": "Italy",
            "value": 7
        },
        {
            "label": "Canada",
            "value": 8
        },
        {
            "label": "Finland",
            "value": 9
        },
        {
            "label": "Singapore",
            "value": 10
        }

    ];
    const YesNoOptions = [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
    ]


    const handleFileInputInsta = (e) => {
        debugger;
        setSelectedFile(e.target.files[0]);
    }
    const handleFileInputSign = (e) => {
        debugger;
        setSelectedSignatureFile(e.target.files[0]);
    }


    const handleUpload = async (file, values) => {
        debugger;
        var image;
        if (file) {
            await uploadFile(file, config)
                .then(data => {
                    image = data.location;
                })
                .catch(err => console.error(err))
        }
        var param = {
            name: values.name,
            address: values.address,
            countryId: values.countryId,
            phone: values.phone,
            email: values.email,
            dob: values.dob,
            whatsappStatus: values.whatsappStatus,
            telegramStatus: values.telegramStatus,
            twitterLink: values.twitterLink,
            instagramLink: values.instagramLink,
            facebookLink: values.facebookLink,
            tiktokLink: values.tiktokLink,
            youtubeLink: values.youtubeLink,
            snapChatLink: values.snapChatLink,
            pinterestLink: values.pinterestLink,
            blogLink: values.blogLink,
            twitchLink: values.twitchLink,
            othersLink: values.othersLink,
            uploadInstaImageUrl: image,
            munchMagicMakerAns: values.munchMagicMakerAns,
            preExpStatus: values.preExpStatus,
            expGrounOnlineAns: values.expGrounOnlineAns,
            ambassadorAns: values.ambassadorAns,
            favoriteFoodAns: values.favoriteFoodAns,
            ngoPassinate: values.ngoPassinate,
            description: values.description,
            signatureURL: image,
        }
        debugger;
        if (values.name != "" && values.address != "" && values.countryId != "" && values.email != "" && values.dob != "" && values.munchMagicMakerAns != "" && values.expGrounOnlineAns != "" && values.ambassadorAns != "" && values.favoriteFoodAns != "" && values.ngoPassinate != "" && values.description != "") {
            props.addEditHandler(param);
        }

    }


    return (
        <div className="brandingPage">

            <Modal
                visible={props.brandVisible}
                footer={null}
                className="csc-modal"
                width={"1000px"}
                onCancel={props.closeModal}
            >
                <div className="csc-modal-header">

                    <div className="brandigcancelBtn">
                        <img src={require('../../assets/images/png/cancelBtn.png')}
                            className='brandigcancelBtnIMG' onClick={props.closeModal} />

                    </div>

                    <div className="brandAmbassadorForm">
                        {modalData == undefined
                            ? "Brand Ambassador Application"
                            : "Brand Ambassador Application"}
                    </div>
                    <div class="Welcome-Were-so-excited-to-meet-you">
                        Welcome! We’re so excited to meet you!
                    </div>
                    <div class="Join-a-growing-communityPara">
                        Join a growing community of like-minded, big-hearted,
                        fun-loving Magic Makers.
                    </div>
                    <div class="This-is-where-successesContentPara">
                        This is where successes are savoured together,
                        learning experiences shared and friends are made.
                    </div>

                </div>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p className="brandingPara1">
                                We respect your privacy.
                            </p>

                        </div>

                    </div>
                    <div class="row">
                        <div class="col">
                            <p className="brandingPara2">
                                All information and images are confidential.
                            </p>
                        </div>

                    </div>
                </div>
                <Formik
                    initialValues={{

                        name: "",
                        address: "",
                        countryId: "",
                        phone: "",
                        email: "",
                        dob: "",
                        whatsappStatus: false,
                        telegramStatus: false,
                        twitterLink: "",
                        instagramLink: "",
                        facebookLink: "",
                        tiktokLink: "",
                        youtubeLink: "",
                        snapChatLink: "",
                        pinterestLink: "",
                        blogLink: "",
                        twitchLink: "",
                        othersLink: "",
                        uploadInstaImageUrl: "",
                        munchMagicMakerAns: "",
                        preExpStatus: 1,
                        expGrounOnlineAns: "",
                        ambassadorAns: "",
                        favoriteFoodAns: "",
                        ngoPassinate: "",
                        description: "",
                        signatureURL: "",

                    }}

                    onSubmit={(values) => handleSubmit(values)}
                    validationSchema={brandingFormValidationSchema}

                    render={({ values, handleChange, handleBlur, setFieldValue }) => {
                        return (
                            <Form>
                                <div className="csc-modal-body">

                                    <div className="brandingInp">
                                        <div className="row">
                                            <div class="container">

                                                <div className="row">

                                                    <div className="col">
                                                        <InputText name="name" label="Name*" placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="container">
                                                <div className="row">
                                                    <div className="col">
                                                        <InputText name="address" label="Address*" placeholder="Address" value={values.address} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="container">
                                                <div className="row" >

                                                    <div className="col" id="countryIdDivParent">
                                                        <SingleSelect
                                                            id="countryIdDiv"
                                                            name="countryId"
                                                            label={"Country of residence*"}
                                                            placeholder={"Country of residence*"}
                                                            onChange={(name, value) => setFieldValue('countryId', value)}
                                                            value={_.filter(countryList, obj => obj.value == values.countryId)}
                                                            options={countryList}
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="container">

                                                <div className="row">

                                                    <div className="col">
                                                        <InputText name="phone" label="Phone number*" placeholder="Phone number" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="container">

                                                <div className="row">

                                                    <div className="col">
                                                        <InputText name="email" label="Email*" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>


                                            <div class="container">

                                                <div className="row">

                                                    <div className="col" id="dateOfBirth">
                                                        <InputText type="date" name="dob" label="Date Of Birth*" placeholder="Date Of Birth" value={values.dob} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="checkBoxDiv">
                                                <div class="container">
                                                    <div className="row" id="checkDivYes">
                                                        <div className="col" >
                                                            <div class="Instant-Messaging-App">
                                                                Instant Messaging
                                                                App:
                                                            </div>
                                                            <div id="checkParentDiv">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" name="whatsappStatus" id="flexCheckDefault"
                                                                        value={values.whatsappStatus} onChange={handleChange} onBlur={handleBlur} />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        WhatsApp </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked" name="telegramStatus"
                                                                        value={values.telegramStatus} onChange={handleChange} onBlur={handleBlur} />
                                                                    <label class="form-check-label" for="flexCheckChecked">
                                                                        Telegram </label>
                                                                </div>
                                                            </div>

                                                            <div class="Active-Social-Media-Channels">
                                                                Active Social Media Channels
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <div class="container">

                                                <div className="row" id="activeSocialMediaSideBySide">

                                                    <div className="col">
                                                        <InputText name="instagramLink" label="Instagram" placeholder="Add link" value={values.instagramLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                    <div className="col">
                                                        <InputText name="twitterLink" label="Twitter" placeholder="Add link" value={values.twitterLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="container">


                                                <div className="row" id="activeSocialMediaSideBySide">

                                                    <div className="col">
                                                        <InputText name="facebookLink" label="Facebook" placeholder="Add link" value={values.facebookLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                    <div className="col" id="activeSocialMediaSideBySide">
                                                        <InputText name="tiktokLink" label="TikTok" placeholder="Add link" value={values.tiktokLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="container">
                                                <div className="row" id="activeSocialMediaSideBySide">

                                                    <div className="col">
                                                        <InputText name="youtubeLink" label="YouTube" placeholder="Add link" value={values.youtubeLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                    <div className="col">
                                                        <InputText name="snapChatLink" label="SnapChat" placeholder="Add link" value={values.snapChatLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="container" id="activeSocialMediaSideBySide">

                                                <div className="row">

                                                    <div className="col">
                                                        <InputText name="pinterestLink" label="Pinterest" placeholder="Add link" value={values.pinterestLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                    <div className="col">
                                                        <InputText name="blogLink" label="blog" placeholder="Add link" value={values.blogLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>

                                            </div>


                                            <div class="container">

                                                <div className="row" id="activeSocialMediaSideBySide">

                                                    <div className="col">
                                                        <InputText name="twitchLink" label="Switch" placeholder="Add link" value={values.twitchLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                    <div className="col">
                                                        <InputText name="othersLink" label="Others" placeholder="Add link" value={values.othersLink} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>

                                            </div>



                                            <label className="uploadInstaInsight"> Upload Instagram Insights </label>
                                            <input type="file" onChange={handleFileInputInsta} placeholder="uploadFile" />

                                            <div class="container">


                                                <div className="row">

                                                    <div className="col">
                                                        <InputText name="munchMagicMakerAns" label=" Why are you interested in becoming a Magic Maker?*"
                                                            placeholder=" Add description" value={values.munchMagicMakerAns} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="container">
                                                <div className="row" id="preExpStatusRadio">

                                                    <div className="col">
                                                        <label className=" doYouhavePreviousExperience ">
                                                            Do you have an previous experience as a brand ambassador*?
                                                        </label>
                                                        <RadioInput
                                                            name="preExpStatus"
                                                            // label={"preExpStatus"}
                                                            value={values.preExpStatus}
                                                            onChange={(e) => setFieldValue("preExpStatus", e.target.value)}
                                                            options={YesNoOptions}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="container">

                                                <div className="row">

                                                    <div className="col">
                                                        <InputText name="expGrounOnlineAns" label="   If so, is your experience in on the ground or online?*"
                                                            placeholder=" Add description" value={values.expGrounOnlineAns} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="container">

                                                <div className="row">

                                                    <div className="col">
                                                        <InputText name="ambassadorAns" label="  How did you find out about our ambassador program?*"
                                                            placeholder=" Add description" value={values.ambassadorAns} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="container">
                                                <div className="row">
                                                    <div className="col">
                                                        <InputText name="favoriteFoodAns" label=" What is your favorite food?*"
                                                            placeholder=" Add description" value={values.favoriteFoodAns} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="container">
                                                <div className="row">
                                                    <div className="col">
                                                        <InputText name="ngoPassinate" label=" What cause or NGO are you passionate about?*"
                                                            placeholder=" Add description" value={values.ngoPassinate} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="container">
                                                <div className="row">
                                                    <div className="col" id="DescriptionDiv">
                                                        <InputText name="description" label=" Please give us a snapshot of your community
                                                     involvement by letting us know what activities you are involved with and are passionate about?*"
                                                            placeholder=" Add description" value={values.description} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="signatureDiv">
                                                <div class="container">
                                                    <div >
                                                        {
                                                            selectedSignature ? <img src={URL.createObjectURL(selectedSignature)} alt="signature" width={100} height={100} /> : <div></div>
                                                        }
                                                        <div className="col">
                                                            <label>Signature*</label>
                                                            <input type="file" onChange={handleFileInputSign} placeholder="uploadFile" />
                                                        </div>
                                                        <p className="aboutSignaturePara">By uploading your signature, you are signing the document electronically and legally binding</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="csc-modal-footer">
                                    <div className="csc-modal-footer__btns">
                                        <div className="brandingSubmitButton">
                                            <button type="submit" onClick={() => handleUpload(selectedFile, values)}>Submit</button>

                                        </div>
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

export default Branding;