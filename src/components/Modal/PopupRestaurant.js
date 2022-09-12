import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import InputText from "../Form/InputText";
import { Tabs, Radio } from 'antd';
import { uploadFile } from 'react-s3';
import SingleSelect from '../../components/Form/SingleSelect'
import OtpPopup from '../../components/Modal/OtpPopup';
import { store } from '../../store/store';
import './PopupRestaurant.less'
import { values } from "lodash";
import { async } from "q";
import { restaurantFormValidationSchema } from "../../utils/utils-validation";
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import {
    ActionAddRestaurantPage, actionGetCuisineList, actionGetRestaurantOperator,
    ActinRestaurantOTPGenerator,
    ActionAddRestaurantType
} from '../../store/actions/actions-server-data';



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
const { TabPane } = Tabs;


class PopupRestaurant extends Component {
    constructor(props) {
        debugger;
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    state = {
        checkOthers: false,
        selectedFile: null,
        selectedSignature: null,
        tab: "1",
        isModalVisible: false,
        data: [],
        accountList: [
            {
                "label": "Savings",
                "value": 1
            },
            {
                "label": "Checking",
                "value": 2
            }

        ]
    }

    showModal(values) {
        debugger;
        if (this.state.tab === "1") {
            var param = {
                "name": values.restaurantName,
                "email": values.email,
                "phone": values.contactNumber,
            }
            debugger;
            if (values.restaurantName != "" && values.contactNumber != "" && values.email != "") {
                this.props.ActinRestaurantOTPGenerator(param);
                this.setState({ isModalVisible: true });
            }
        }
        else {

            this.setState({ tab: (Math.min(4, parseInt(this.state.tab) + 1)).toString() });
        }

    };


    OTPVerificationHandler = (param) => {
        debugger;
        var checkOTP = store.getState().rServerData.RestaurantOTPGenerator.data.otp;
        if (checkOTP == param.verifyOTP) {
            this.setState({ tab: (Math.min(4, parseInt(this.state.tab) + 1)).toString(), isModalVisible: false });
        }
        else {
            alert('invalid OTP');
            this.setState({ isModalVisible: true });
        }
    }

    handleAddPhoto = async (e) => {
        debugger;
        if (e.target.files[0]) {
            await uploadFile(e.target.files[0], config)
                .then(data => {
                    this.setState({ accountImageUrl: data.location });
                })
                .catch(err => console.error(err))
        }
    }

    handleFileInputSign = async (e) => {
        if (e.target.files[0]) {
            await uploadFile(e.target.files[0], config)
                .then(data => {
                    this.setState({ signatureUrl: data.location });
                })
                .catch(err => console.error(err))
        }
    }

    uploadRestaurantImage = async (e) => {
        if (e.target.files[0]) {
            await uploadFile(e.target.files[0], config)
                .then(data => {
                    this.setState({ restaurantImageUrl: data.location });
                    debugger;
                })
                .catch(err => console.error(err))
        }
    }

    handleSubmit = (values) => {
        debugger;
        var image;
        var cuisineMaxId = this.props.cuisineMaxId;
        var restaurantOtherType = values.otherType;
        var restaurantOtherTypeMap = []
        var restaurantOtherTypeMappingObj = []

        if (values.otherType = !"") {
            values.restaurantTypeMapping.splice(values.restaurantTypeMapping.findIndex(a => a.value === 20), 1)
            var otherTypeObject = { "value": cuisineMaxId + 1, "label": restaurantOtherType }
            var restaurantTypeObject = { "position": cuisineMaxId + 1, "name": restaurantOtherType, "imageUrl": "" }
            values.restaurantTypeMapping.push(otherTypeObject);
            _.map(values.restaurantTypeMapping, obj => restaurantOtherTypeMappingObj.push({ "restaurentTypeId": obj.value }))
            debugger;

            restaurantOtherTypeMap.push(restaurantTypeObject);
            this.props.ActionAddRestaurantType(restaurantOtherTypeMap);
        } else {
            _.map(values.restaurantTypeMapping, obj => restaurantOtherTypeMappingObj.push({ "restaurentTypeId": obj.value }))
        }


        let param = {
            Name: values.restaurantName,
            contactNumber: values.contactNumber,
            email: values.email,
            address: values.address,
            country: values.country,
            state: values.state,
            city: values.city,
            zipCode: values.zipCode,
            licenceNumber: values.licenceNumber,
            franchiseCount: values.franchiseCount,
            description: values.description,
            appNotificationStatus: values.appNotificationStatus,
            pushNotificationStatus: values.pushNotificationStatus,
            mailNotificationStatus: values.mailNotificationStatus,
            preparationTime: values.preparationTime,
            restaurantStatusId: 1,
            restaurantContact: {
                name: values.ownerName,
                contactNumber: values.ownerContactNumber,
                email: values.ownerEmail,
                operatorId: values.userType,

            },


            "restaurantTypeMapping": restaurantOtherTypeMappingObj,// values.restaurantTypeMapping,
            "restaurantTypecheck": values.restaurantTypecheck,

            restaurantOperationalHours: [
                {
                    day: values.sunday,
                    openHours: values.sundayOpenHours,
                    closedHours: values.sundayClosedHours,
                },
                {
                    day: values.monday,
                    openHours: values.mondayClosedHours,
                    closedHours: values.mondayClosedHours,
                },
                {
                    day: values.tuesday,
                    openHours: values.tuesdayOpenHours,
                    closedHours: values.tuesdayClosedHours,
                },
                {
                    day: values.wednesday,
                    openHours: values.wednesdayOpenHours,
                    closedHours: values.wednesdayClosedHours,
                },
                {
                    day: values.thursday,
                    openHours: values.thursdayOpenHours,
                    closedHours: values.thursdayClosedHours,
                },
                {
                    day: values.friday,
                    openHours: values.fridayOpenHours,
                    closedHours: values.fridayClosedHours,
                },
                {
                    day: values.saturday,
                    openHours: values.saturdayOpenHours,
                    closedHours: values.saturdayClosedHours,
                }
            ],
            companyName: values.companyName,
            authorizeName: values.authorizeName,
            accountAddress: values.accountAddress,
            accountCity: values.accountCity,
            accountState: values.accountState,
            accountZipCode: values.accountZipCode,
            socialSecurity: values.socialSecurity,

            accountName: values.accountName,
            accountNumber: values.accountNumber,
            routingNumber: values.routingNumber,
            bankName: values.bankName,

            accountType: values.accountType,
            signName: values.signName,
            authorizeNameFinal: values.authorizeNameFinal,
            accountimageurl: this.state.accountImageUrl,
            signName: values.signName,
            signimageurl: this.state.signatureUrl,
            signdate: values.signdate,
            imageUrl: this.state.restaurantImageUrl,

        };



        if (values.restaurantName != "" && values.contactNumber != "" && values.email != "") {
            this.props.ActionAddRestaurantPage(param)
            this.props.closeRestaurantHandler(param);
        }



    };

    next = (key) => {
        if (values.restaurantName != "" && values.contactNumber != "" && values.email != "") {

            this.setState({ tab: (Math.min(4, parseInt(this.state.tab) + 1)).toString() });
        }
    }

    currentTab = (key) => {
        this.setState({ tab: key })
    }

    prev = () => {
        this.setState({ tab: (Math.max(1, parseInt(this.state.tab) - 1)).toString() });
    }


    componentDidMount() {
        this.props.actionGetCuisineList();
        this.props.actionGetRestaurantOperator();

    }
    closeModal() {
        this.props.closeRestaurantHandler()
    }


    render() {
        const { modalData, tab } = this.state;
        const { restaurantVisible } = this.props;
        debugger;
        return (

            <Modal
                visible={restaurantVisible}
                footer={null}
                className="ccss-modal"
                width={"1000px"}
                onCancel={this.closeModal}
            >
                {
                    this.state.isModalVisible &&

                    <OtpPopup
                        visible={this.state.isModalVisible}
                        OTPVerificationHandler={this.OTPVerificationHandler}
                        closeModal={() => this.setState({ isModalVisible: false })}
                    />

                }
                <div className="ccss-modal-header">

                    <div className="PopupRestaurantcancelBtn">
                        <img src={require('../../assets/images/png/cancelBtn.png')}
                            className='cancelBtnIMG' onClick={this.state.closeModal} />

                    </div>

                    <div className="Register-Your-Restaurant">
                        {modalData == undefined
                            ? "Register Your Restaurant"
                            : "Register Your Restaurant"}
                    </div>

                </div>
                <Formik
                    initialValues={{
                        restaurantTypeMapping: [],
                        restaurantTypecheck: [],

                        restaurantName: "",
                        contactNumber: "",
                        email: "",
                        address: "",
                        country: "",
                        state: "",
                        city: "",
                        zipCode: "",
                        licenceNumber: "",
                        franchiseCount: "",
                        description: "",
                        ownerName: "",
                        ownerContactNumber: "",
                        ownerEmail: "",
                        userType: "",
                        pushNotificationStatus: "",
                        appNotificationStatus: "",
                        mailNotificationStatus: "",
                        restaurantType: "",
                        preparationTime: "",
                        alldaysOpenHours: "",
                        alldaysClosedHours: "",
                        sundayOpenHours: "",
                        sundayClosedHours: "",
                        sunday: "Sunday",
                        monday: "Monday",
                        tuesday: "Tuesday",
                        wednesday: "Wednesday",
                        thursday: "Thursday",
                        friday: "Friday",
                        saturday: "Saturday",
                        mondayOpenHours: "",
                        mondayClosedHours: "",
                        tuesdayOpenHours: "",
                        tuesdayClosedHours: "",
                        wednesdayOpenHours: "",
                        wednesdayClosedHours: "",
                        thursdayOpenHours: "",
                        thursdayClosedHours: "",
                        fridayOpenHours: "",
                        fridayClosedHours: "",
                        saturdayOpenHours: "",
                        saturdayClosedHours: "",
                        allDayscheck: false,
                        companyName: "",
                        authorizeName: "",
                        accountAddress: "",
                        accountCity: "",
                        accountState: "",
                        accountZipCode: "",
                        socialSecurity: "",
                        accountName: "",
                        bankName: "",
                        accountNumber: "",
                        routingNumber: "",
                        accountType: "",
                        authorizeName: "",
                        authorizeNameFinal: "",
                        accountImageUrl: "",
                        signName: "",
                        signatureUrl: "",
                        signdate: "",
                        otherType: "",
                        restaurantImageUrl: "",
                        mobileNumbercheck: false

                    }}
                    validationSchema={restaurantFormValidationSchema}
                    onSubmit={(values) => this.handleSubmit(values)}
                    enableReinitialize
                    render={({ values, handleChange, handleBlur, setFieldValue }) => {
                        return (

                            <div className='ccss-modal-body oneThird'>

                                <Form className="AddRestaInf">

                                    <Tabs defaultActiveKey="1" activeKey={this.state.tab} onNextClick={this.next} onTabClick={this.currentTab} onPrevClick={this.prev}>
                                        <TabPane className='Details' tab=" Restaurant Informantion" key="1">

                                            <div class="Restaurant-Information">
                                                Restaurant Information
                                            </div>

                                            <div className="row" >
                                                <div className="row">

                                                    <div className="col">
                                                        <InputText name="restaurantName" label="Restaurant Name*" placeholder="restaurant Name" value={values.restaurantName} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <InputText name="contactNumber" label="Mobile Number*" placeholder="contactNumber" value={values.contactNumber} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="emailDiv">
                                                        <InputText type="email" name="email" label="Email*" placeholder="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="address" label="Address*" placeholder="Address" value={values.address} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="country" label="Country*" placeholder="Country" value={values.country} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                    <div className="col">
                                                        <InputText name="state" label="State*" placeholder="State" value={values.state} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>



                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="city" label="City*" placeholder="City" value={values.city} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                    <div className="col">
                                                        <InputText name="zipCode" label="zipCode*" placeholder="zipCode" value={values.zipCode} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>


                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="licenceNumber" label="Licence Number*" placeholder="Licence Number" value={values.licenceNumber} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                    <div className="col">
                                                        <InputText name="franchiseCount" label="Franchise count" placeholder="Franchise count" value={values.franchiseCount} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="description" label=" Description -Info* (This is what user will see)" placeholder="Descripition -info" value={values.description} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col">
                                                        <h2 className='restaurantImageLabel'> Restaurant Images</h2>
                                                        <p className='restaurantImgPara'> Please upload atleast one facade shot</p>
                                                        {
                                                            this.state.restaurantImageUrl ? <img src={this.state.restaurantImageUrl} alt="restaurantImageUrl" width={100} height={100} className="restaurantImageDiv" /> : <div></div>
                                                        }
                                                        <input type="file" onChange={this.uploadRestaurantImage} placeholder="Add Photoes" accept="image/*" />
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <span class="Restaurant-Owner-Details">
                                                        Restaurant Owner Details
                                                    </span>
                                                    <div className="col">
                                                        <InputText name="ownerName" label="Restaurant Owner Name*" placeholder="Restaurant Owner Name" value={values.ownerName} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                    <div className="col">
                                                        <InputText name="ownerContactNumber" label="Mobile Number*" placeholder="Mobile Number" value={values.ownerContactNumber} onChange={handleChange} onBlur={handleBlur} />



                                                        <div className="form-check" id='ApplyContactNumber'>
                                                        <input className="form-check-input" name="mobileNumbercheck" type="checkbox" value={values.mobileNumbercheck} checked={values.mobileNumbercheck} id="flexCheckDefault" onChange={handleChange}

                                                            onClick={() => {
                                                                debugger;
                                                                if (!(values.mobileNumbercheck)) {
                                                                    setFieldValue("ownerContactNumber", values.contactNumber)


                                                                } else {
                                                                    setFieldValue("contactNumber", "")


                                                                }
                                                            }
                                                            }
                                                        />
                                                        <label id="ApplyContactNumber" className="form-check-label" for="flexCheckDefault"  >

                                                            Same as restaurant mobile number
                                                        </label>
                                                    </div>
                                                    </div>
                                   

                                                </div>
                                                <br />

                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="ownerEmail" label="Restaurant Owner Email Address*" placeholder="Restaurant Owner Email Address" value={values.ownerEmail} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                    <div className="col">

                                                        <SingleSelect
                                                            name="userType"
                                                            label={" Select User Type*"}
                                                            placeholder={"Select User Type"}
                                                            value={_.filter(this.props.listRestaurantOperator, obj => obj.value == values.userType)}
                                                            onChange={(name, value) => setFieldValue('userType', value)}
                                                            options={this.props.listRestaurantOperator}


                                                        />

                                                    </div>

                                                </div>


                                                <div class="Order-Notifications">
                                                    <p> Order Notifications</p>
                                                </div>
                                                <span class="Notification-can-select-more-than-one">
                                                    Notification can select more than one
                                                </span>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="flexCheckDefault" name="pushNotificationStatus" value={values.pushNotificationStatus} onChange={handleChange} onBlur={handleBlur} />
                                                    <label class="form-check-label" htmlFor="flexCheckDefault">
                                                        Push Notification </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked" name="appNotificationStatus" value={values.appNotificationStatus} onChange={handleChange} onBlur={handleBlur} />
                                                    <label class="form-check-label" htmlFor="flexCheckChecked">
                                                        App Notification  </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked" name="mailNotificationStatus" value={values.mailNotificationStatus} onChange={handleChange} onBlur={handleBlur} />
                                                    <label class="form-check-label" htmlFor="flexCheckChecked">
                                                        Mail Notification  </label>
                                                </div>

                                            </div>
                                        </TabPane>

                                        <TabPane className='Details' tab=" Restaurant Type & Timings" key="2">
                                            <div className="2ndTabForm">
                                                <div className='RestaurntTypeDiv'>
                                                    <div class="Restaurant-Type-and-Timing">
                                                        Restaurant Type and Timing
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="row">

                                                        <div className="col">

                                                            <SingleSelect
                                                                name="restaurantTypeMapping"
                                                                label={"Restaurant Type*"}
                                                                placeholder={"Select Restaurant Type"}
                                                                // onChange={setFieldValue}
                                                                value={values.restaurantTypeMapping}
                                                                options={this.props.listCuisine}
                                                                isMulti={true}
                                                                onChange={(name, value) => {
                                                                    setFieldValue(name, value);
                                                                    setFieldValue("restaurantTypecheck", value.filter(x => x.value == 20));
                                                                }}
                                                            />
                                                            {
                                                                values.restaurantTypecheck.length >= 1 ?
                                                                    <InputText name="otherType" label="Other Restaurant Type" placeholder="Other Restaurant Type" value={values.otherType} onChange={handleChange}

                                                                        onBlur={handleBlur} />

                                                                    : ""
                                                            }






                                                        </div>

                                                        <div className="col">

                                                            <InputText name="preparationTime" label="Average Preparation Time(Min)*" placeholder="Ex: 10 -15" value={values.preparationTime} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>

                                                    </div>
                                                    <span class="Restaurant-operational-hours">
                                                        Restaurant operational hours*
                                                    </span>
                                                    <div className='row'>
                                                        <div className="col">
                                                            <InputText type="time" name="alldaysOpenHours" label="Open Time*" placeholder="Open Time" value={values.alldaysOpenHours} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>
                                                        <div className="col">
                                                            <InputText type="time" name="alldaysClosedHours" label="Close Time*" placeholder="Close Time" value={values.alldaysClosedHours} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>
                                                        <div className="form-check" id='ApplyToAllDays'>
                                                            <input className="form-check-input" name="allDayscheck" type="checkbox" value={values.allDayscheck} checked={values.allDayscheck} id="flexCheckDefault" onChange={handleChange}

                                                                onClick={() => {
                                                                    debugger;
                                                                    if (!(values.allDayscheck)) {
                                                                        setFieldValue("sundayOpenHours", values.alldaysOpenHours)
                                                                        setFieldValue('sundayClosedHours', values.alldaysClosedHours)
                                                                        setFieldValue("mondayOpenHours", values.alldaysOpenHours)
                                                                        setFieldValue('mondayClosedHours', values.alldaysClosedHours)
                                                                        setFieldValue("tuesdayOpenHours", values.alldaysOpenHours)
                                                                        setFieldValue('tuesdayClosedHours', values.alldaysClosedHours)
                                                                        setFieldValue("wednesdayOpenHours", values.alldaysOpenHours)
                                                                        setFieldValue('wednesdayClosedHours', values.alldaysClosedHours)
                                                                        setFieldValue("thursdayOpenHours", values.alldaysOpenHours)
                                                                        setFieldValue('thursdayClosedHours', values.alldaysClosedHours)
                                                                        setFieldValue("fridayOpenHours", values.alldaysOpenHours)
                                                                        setFieldValue('fridayClosedHours', values.alldaysClosedHours)
                                                                        setFieldValue("saturdayOpenHours", values.alldaysOpenHours)
                                                                        setFieldValue('saturdayClosedHours', values.alldaysClosedHours)

                                                                    } else {
                                                                        setFieldValue("sundayOpenHours", "")
                                                                        setFieldValue('sundayClosedHours', "")
                                                                        setFieldValue("mondayOpenHours", "")
                                                                        setFieldValue('mondayClosedHours', "")
                                                                        setFieldValue("tuesdayOpenHours", "")
                                                                        setFieldValue('tuesdayClosedHours', "")
                                                                        setFieldValue("wednesdayOpenHours", "")
                                                                        setFieldValue('wednesdayClosedHours', "")
                                                                        setFieldValue("thursdayOpenHours", "")
                                                                        setFieldValue('thursdayClosedHours', "")
                                                                        setFieldValue("fridayOpenHours", "")
                                                                        setFieldValue('fridayClosedHours', "")
                                                                        setFieldValue("saturdayOpenHours", "")
                                                                        setFieldValue('saturdayClosedHours', "")

                                                                    }
                                                                }
                                                                }
                                                            />
                                                            <label id="ApplyAlldays" className="form-check-label" for="flexCheckDefault"  >

                                                                Apply to all days
                                                            </label>
                                                        </div>

                                                    </div>

                                                    <span class="Apply-Advance-Settings">
                                                        Apply Advance Settings
                                                    </span>

                                                    <h4><div className='days' name="monday">{values.monday} </div></h4>
                                                    <div className='row' id="openingAndClosing">
                                                        <div className="col">
                                                            <InputText type="time" name="mondayOpenHours" label="Open Time" placeholder="Open Hours" value={values.mondayOpenHours} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>
                                                        <div className="col">
                                                            <InputText type="time" name="mondayClosedHours" label="Close Time" placeholder="Close Hours" value={values.mondayClosedHours} onChange={handleChange} onBlur={handleBlur} />

                                                        </div>

                                                    </div>
                                                    <br />
                                                    <br />
                                                    <h4><div className='days' name="tuesday">{values.tuesday} </div></h4>
                                                    <div className='row' id="openingAndClosing">
                                                        <div className="col">
                                                            <InputText type="time" name="tuesdayOpenHours" label="Open Time" placeholder="Open Time" value={values.tuesdayOpenHours} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>
                                                        <div className="col">
                                                            <InputText type="time" name="tuesdayClosedHours" label="Close Time" placeholder="Close Time" value={values.tuesdayClosedHours} onChange={handleChange} onBlur={handleBlur} />

                                                        </div>

                                                    </div>
                                                    <br />
                                                    <br />
                                                    <h4><div className='days' name="wednesday">{values.wednesday} </div></h4>
                                                    <div className='row' id="openingAndClosing" >
                                                        <div className="col">
                                                            <InputText type="time" name="wednesdayOpenHours" label="Open Time" placeholder="Open Time" value={values.wednesdayOpenHours} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>
                                                        <div className="col">
                                                            <InputText type="time" name="wednesdayClosedHours" label="Close Time" placeholder="Close Time" value={values.wednesdayClosedHours} onChange={handleChange} onBlur={handleBlur} />

                                                        </div>

                                                    </div>
                                                    <br />
                                                    <br />
                                                    <h4><div className='days' name="thursday">{values.thursday} </div></h4>
                                                    <div className='row' id="openingAndClosing">
                                                        <div className="col">
                                                            <InputText type="time" name="thursdayOpenHours" label="Open Time" placeholder="Open Time" value={values.thursdayOpenHours} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>
                                                        <div className="col">
                                                            <InputText type="time" name="thursdayClosedHours" label="Close Time" placeholder="Close Time" value={values.thursdayClosedHours} onChange={handleChange} onBlur={handleBlur} />

                                                        </div>

                                                    </div>
                                                    <br />
                                                    <br />
                                                    <h4><div className='days' name="friday">{values.friday} </div></h4>

                                                    <div className='row' id="openingAndClosing">
                                                        <div className="col">
                                                            <InputText type="time" name="fridayOpenHours" label="Open Time" placeholder="Open Time" value={values.fridayOpenHours} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>
                                                        <div className="col">
                                                            <InputText type="time" name="fridayClosedHours" label="Close Time" placeholder="Close Time" value={values.fridayClosedHours} onChange={handleChange} onBlur={handleBlur} />

                                                        </div>

                                                    </div>
                                                    <br />
                                                    <br />
                                                    <h4><div className='days' name="saturday">{values.saturday} </div></h4>

                                                    <div className='row' id="openingAndClosing">
                                                        <div className="col">
                                                            <InputText type="time" name="saturdayOpenHours" label="Open Time" placeholder="Open Time" value={values.saturdayOpenHours} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>
                                                        <div className="col">
                                                            <InputText type="time" name="saturdayClosedHours" label="Close Time" placeholder="Close Time" value={values.saturdayClosedHours} onChange={handleChange} onBlur={handleBlur} />

                                                        </div>

                                                    </div>

                                                    <h4><div className='days' name="sunday">{values.sunday} </div></h4>
                                                    <div className='row' id="openingAndClosing">
                                                        <div className="col" >
                                                            <InputText type="time" name="sundayOpenHours" label="Open Time" placeholder="Open Time" value={values.sundayOpenHours} onChange={handleChange} onBlur={handleBlur} />
                                                        </div>
                                                        <div className="col">
                                                            <InputText type="time" name="sundayClosedHours" label="Close Time" placeholder="Close Time" value={values.sundayClosedHours} onChange={handleChange} onBlur={handleBlur} />

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>

                                        </TabPane>

                                        <TabPane className='Details' tab=" Account Informantion" key="3">
                                            <div className="row">

                                                <div class="Account-Information">
                                                    Account Information
                                                </div>

                                                <div className="row">

                                                    <div className="col">
                                                        <InputText name="companyName" label="I hereby authorize*" placeholder="I hereby authorize" value={values.companyName} onChange={handleChange} onBlur={handleBlur} />
                                                        <div className="accountInfoPara">
                                                            <p>to directly deposit to the account listed above.  These deposits may be made electronically or by any other commercially accepted method.
                                                                This authorization will remain in effect until I modify or cancel it in writing.</p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="informationh5">
                                                    <h5>Information</h5>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <InputText name="authorizeNameFinal" label="Name*" placeholder="name" value={values.authorizeNameFinal} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <InputText name="accountAddress" label="Address*" placeholder={"Address"} value={values.accountAddress} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>




                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="accountCity" label="City*" placeholder="City" value={values.accountCity} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                    <div className="col">
                                                        <InputText name="accountState" label="State*" placeholder="State" value={values.accountState} onChange={handleChange} onBlur={handleBlur} />


                                                    </div>
                                                </div>


                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="accountZipCode" label="Zipcode*" placeholder="Zipcode" value={values.accountZipCode} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                    <div className="col">
                                                        <InputText name="socialSecurity" label="  Social Security*" placeholder="  Social Security" value={values.socialSecurity} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>

                                                <div class="Financial-Institution-Information">
                                                    Financial Institution Information
                                                </div>
                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="accountName" label="Account Name*" placeholder="Account Name" value={values.accountName} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>

                                                <div className='row'>

                                                    <div className="col">
                                                        <InputText name="bankName" label="Bank Name*" placeholder="Bank Name" value={values.bankName} onChange={handleChange} onBlur={handleBlur} />


                                                    </div>
                                                    <div className="col">
                                                        <InputText name="accountNumber" label="Account Number*" placeholder="Account Number" value={values.accountNumber} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>

                                                </div>



                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="routingNumber" label={"Routing Number*"} placeholder={"Routing Number"} value={values.routingNumber} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                    <div className="col">
                                                        <SingleSelect
                                                            name="accountType"
                                                            label={"Account Type*"}
                                                            placeholder={"Select Restaurant Type"}
                                                            onChange={(name, value) => setFieldValue('accountType', value)}
                                                            value={_.filter(this.state.accountList, obj => obj.value == values.accountType)}
                                                            options={this.state.accountList}

                                                        />

                                                    </div>
                                                </div>

                                                <div className="aboutAddPgoto">
                                                    <p>Please attach a voided cheque for each bank account to which funds should be deposited (if necessary).</p>
                                                </div>



                                                <input type="file" onChange={this.handleAddPhoto} placeholder="uploadFile" />
                                                <div className="authorization">
                                                    <p>This authorization will remain in effect until revoked by me in writing.</p>

                                                </div>

                                                <div className='row'>
                                                    <div className="col">
                                                        <InputText name="signName" label="Name*" placeholder="Name" value={values.signName} onChange={handleChange} onBlur={handleBlur} />

                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="col">
                                                        <label>Signature*</label>
                                                        {
                                                            this.state.signatureUrl ? <img src={this.state.signatureUrl} alt="signature" width={100} height={100} /> : <div></div>
                                                        }
                                                        <input type="file" onChange={this.handleFileInputSign} placeholder="uploadFile" />
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="col">

                                                        <label>Date*</label>

                                                        <InputText type="date" name="signdate" placeholder="Date Of Birth" value={values.signdate} onChange={handleChange} onBlur={handleBlur} />
                                                    </div>
                                                </div>


                                            </div>



                                        </TabPane>

                                    </Tabs>

                                    <div className='SubmitBtn'>
                                        {
                                            tab == "2" ?
                                                <div className='previousAndNextButtons'>

                                                    <div className='previousAndNextButtonsChild'>
                                                        <button onClick={this.prev}>previous</button>
                                                        <button button type="button" class="btn btn-primary" onClick={() => this.showModal(values)} >Next</button>
                                                    </div>
                                                </div>

                                                :

                                                tab == "1" ?
                                                    <div className='cancelAndNextButton'>
                                                        <div className='cancelAndNextButtonChild'>
                                                            <button button class="btn btn-danger" onClick={this.closeModal}>Cancel</button>
                                                            <button button type="button" class="btn btn-success" onClick={() => this.showModal(values)} >Next</button>
                                                        </div>

                                                    </div> :
                                                    tab == "3" ?
                                                        <div>
                                                            <button onClick={this.prev}>previous</button>
                                                            <button button class="btn btn-danger" onClick={this.closeModal}>Cancel</button>
                                                            <div className="ccss-modal-footer">
                                                                <div className="ccss-modal-footer__btns">
                                                                    <button type="submit" >Submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div>
                                                        </div>

                                        }
                                    </div>

                                </Form>
                            </div>



                        );
                    }}
                />
            </Modal>

        )
    }
}
function mapStateToProps({ rLoading, rServerData, rSession }) {
    debugger;
    let listCuisine = [];
    let cuisineMaxId;
    rServerData.CuisineList ?
        _.map(rServerData.CuisineList, obj => listCuisine.push({ "value": obj.id, "label": obj.name })) : []
    if (listCuisine.length >= 1) {
        const ids = listCuisine.map(object => {
            return object.value;
        });
        cuisineMaxId = Math.max(...ids);
    }



    let listRestaurantOperator = [];
    rServerData.restaurantOperator ?
        _.map(rServerData.restaurantOperator, obj => listRestaurantOperator.push({ "value": obj.id, "label": obj.Name })) : []

    // let restaurantOthersList = []
    // rServerData.restaurantTypeMapping ?
    //     _.map(rServerData.restaurantTypeMapping, obj => restaurantOthersList.push({ "value": obj.id, "label": obj.name })) : []


    return {

        isLoading: rLoading.login || false,
        CuisineList: rServerData.CuisineList || {},
        listCuisine: listCuisine || [],
        listRestaurantOperator: listRestaurantOperator || [],
        OTPGeneratorParam: rServerData.OTPGeneratorParam || {},
        navigations: rServerData.navigations || {},
        RestaurantOTPGenerator: rServerData.RestaurantOTPGenerator,
        cuisineMaxId: cuisineMaxId

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionAddRestaurantPage,
        actionGetCuisineList,
        actionGetRestaurantOperator,
        ActinRestaurantOTPGenerator,
        ActionRouteNavigate,
        ActionAddRestaurantType
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupRestaurant);


