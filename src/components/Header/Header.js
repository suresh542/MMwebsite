import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SignUp from '../../components/Modal/SignUp';
import { ActionContactUs, ActionNavigation } from '../../store/actions/actions-server-data';
import { Popover } from 'antd';
import CommonDialog from '../Modal/CommonDialog';
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import { URL_MAP } from '../../constants/urls';
import { buildRoute } from '../../configs/routes';
import './Header.less'

class Header extends Component {
    state = {
        isModalOpen: false,
        isSignModalOpen: false,
        isStateUpdated: false,
        modalData: undefined,
        isDeleteModalOpen: false,

    }

    routeNavigate = (param) => {
        this.props.ActionNavigation(param)
    }

    addEditHandler = (param) => {
        debugger;
        this.props.ActionContactUs(param)
        this.setState({ isSignModalOpen: false, modalData: undefined, isStateUpdated: false })
    }



    addEditCommonHandler = () => {
        debugger;
        this.setState({ isModalOpen: false, modalData: undefined })
    }
    render() {

        const { isModalOpen, isSignModalOpen,isCommingSoonModalOpen, modalData, isDeleteModalOpen, pagination } = this.state;
        debugger;
        return (
            <div className='headerDiv'>
                {
                    isModalOpen &&
                    <CommonDialog
                        visible={isModalOpen}
                        closeModal={() => this.setState({ isModalOpen: false })}
                        addEditCommonHandler={this.addEditCommonHandler}
                    />

                }
                {
                    isSignModalOpen &&

                    <SignUp
                        visible={isSignModalOpen}
                        modalData={modalData}
                        closeModal={() => this.setState({ isSignModalOpen: false, modalData: undefined })}
                        addEditHandler={this.addEditHandler}
                    />

                }
              
                <div className="container">

                    <div className="row" >
                        <div className="col">

                            <div className='HeaderParentDiv'>
                                <h1 className='headerh1'>
                                    <div className='munchMagicHeaderLogoDiv'>
                                        <img src={require('../../assets/images/png/munchMagicLogo.png')} alt='' className='munchMagicLogo' style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.home, "point": "homeScroll", "height": '100' })} />
                                    </div>
                                    <div className='SignUpandMenu'>
                                        <ul className='HeaderUl'>
                                            <li className='SignupBTN'><button type='button' onClick={() => this.setState({ isSignModalOpen: true, modalData: undefined })}>Keep In Touch</button></li>



                                            <li className='MenuDiv'>
                                                <Popover children className='popoverDiv' placement="left" >
                                                    <span className="header-content-profile">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" color='white' fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" onClick={() => this.setState({ isModalOpen: true })} trigger="click">
                                                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                                        </svg>
                                                    </span>
                                                </Popover>
                                            </li>

                                        </ul>
                                    </div>
                                </h1>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        )
    }
}
function mapStateToProps({ rLoading, rServerData, rSession }) {
    debugger;
    return {



    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionContactUs,
        ActionNavigation
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
