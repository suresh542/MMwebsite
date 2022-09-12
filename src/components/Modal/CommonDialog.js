import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import { URL_MAP } from '../../constants/urls';
import { buildRoute } from '../../configs/routes';
import { ActionNavigation } from '../../store/actions/actions-server-data';
import CommingSoonPopup from '../../components/Modal/CommingSoonPopup';
import ContactUs from '../../components/Modal/ContactUs';


import './commonDialog.less'


class CommonDialog extends Component {
    constructor(props) {
        debugger;
        super(props);
        this.state.visible = this.props.visible;
        this.closeHandler = this.closeHandler.bind(this);
    }
    state = {
        modalData: undefined,
        visible: false,
        refresh: false,
        isCommingSoonModalOpen: false,
        isModalOpen: false,


    }
    routeNavigate = (param) => {
        this.props.ActionNavigation(param)
    }

    handleCancel = () => {
        setIsModalVisible(false);
    };
    closeHandler() {
        debugger;
        this.props.addEditCommonHandler();
    };

    addEditHandler = (param) => {
        debugger;
        this.props.ActionContactUs(param)
        this.setState({ isModalOpen: false, isCommingSoonModalOpen: false })
    }



    render() {
        const { isCommingSoonModalOpen, modalData, isDeleteModalOpen, pagination ,isModalOpen} = this.state;
        debugger;
        return (
            <div className="CommonDialogPage">

                {
                    isCommingSoonModalOpen &&

                    <CommingSoonPopup
                        visible={isCommingSoonModalOpen}
                        modalData={modalData}
                        closeModal={() => this.setState({ isCommingSoonModalOpen: false, modalData: undefined })}
                        addEditHandler={this.addEditHandler}
                    />

                }


                {
                    isModalOpen &&

                    <ContactUs
                        visible={isModalOpen}
                        modalData={modalData}
                        closeModal={() => this.setState({ isModalOpen: false, modalData: undefined })}
                        addEditHandler={this.addEditHandler}
                    />

                }

                <Modal
                    visible={this.state.visible}
                    footer={null}
                    className="cc-modal"
                    width={"293px"}
                    onCancel={this.closeHandler}

                >
                    <div className="popContent">
                        <div className="cc-modal-header">
                            <ul style={{ width: '293px' }} className="HeaderPopupUl">

                                <li class="home" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.home))}><p>Home</p></li>
                                <li class="shop" id='hoverSessionDiv' onClick={() => this.setState({ isCommingSoonModalOpen: true, modalData: undefined })}><p>Shop <span className='Comming-Coon'> Coming Soon</span></p>
                                    <ul className='subContent'>
                                        <li><span class="Food-order-from-restaurantSub">  Food-order from restaurant</span></li>
                                        <li><span class="GiftsSub">  Gifts</span></li>
                                        <li><span class="NGOsSub">  NGO's</span></li>

                                    </ul >
                                </li>
                                <li class="info"><p>Info</p></li>
                                <ul>
                                    <li id='hoverMovementSubDiv'><span class="The-MovementSub" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.movement))}>  The Movement</span></li>
                                </ul>
                                <li class="how-it-Works-Ordering" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.order))} ><p>How it Works-Ordering</p></li>
                                <li class="easy-Gifting" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.gift))}> <p>Easy Gifting</p></li>
                                <li class="meaningful-Donation" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.ngo))}><p>Meaningful Donation</p></li>
                                <li class="restaurant" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.restaurant, "point": "CommonRestaurant", "height": '100' })}><p>Restaurant</p></li>
                                <li class="vendors" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.restaurant, "point": "CommonVendor", "height": '3900' })}><p>Vendors</p></li>
                                <li class="nGOs" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.restaurant, "point": "CommonNGO", "height": '4700' })}><p>NGO's</p></li>
                                <li class="corporate-and-Teams" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.corporateandteams, "point": "CommonCorporate", "height": '100' })}><p>Corporate and Teams</p></li>
                                <li class="landlord-and-Building" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.corporateandteams, "point": "CommonLandlord", "height": '2000' })}><p>Landlord and Building</p></li>
                                <li class="universities" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.corporateandteams, "point": "CommonUniversities", "height": '3500' })}> <p>Universities</p></li>
                                <li class="ambassador-Program" id='hoverSessionDiv' style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.brandambassador, "point": "CommonAmbassador", "height": '100' })}><p>Ambassador Program</p></li>
                                <li class="app" id='hoverSessionDiv' onClick={() => this.setState({ isCommingSoonModalOpen: true, modalData: undefined })}><p>App</p></li>
                                <li class="contact-Us" id='hoverSessionDiv' onClick={() => this.setState({ isModalOpen: true, modalData: undefined })}><p>Contact Us</p></li>



                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }


};



function mapStateToProps({ rLoading, rServerData, rSession }) {
    debugger;
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionRouteNavigate,
        ActionNavigation
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonDialog);