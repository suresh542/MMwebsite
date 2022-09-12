import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContactUs from '../../components/Modal/ContactUs';
import { ActionContactUs, ActionNavigation } from '../../store/actions/actions-server-data';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { URL_MAP } from '../../constants/urls';
import { buildRoute } from '../../configs/routes';
import { ActionRouteNavigate } from "../../store/actions/actions-route";


import './corporateandteams.less'

class corporateandteams extends Component {
    state = {
        isModalOpen: false,
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
        this.setState({ isModalOpen: false, modalData: undefined, isStateUpdated: false })
    }
    componentDidMount() {

        scroll.scrollTo(this.props.navigations.height);

    }
    render() {
        const { isModalOpen, modalData, isDeleteModalOpen, pagination } = this.state;

        const { navigations } = this.props;
        return (
            <div className='CorporateAndTeams'>
                <Header />

                <div className='CorporateAndTeamsBrownColorScreen'>

                    {
                        isModalOpen &&

                        <ContactUs
                            visible={isModalOpen}
                            modalData={modalData}
                            closeModal={() => this.setState({ isModalOpen: false, modalData: undefined })}
                            addEditHandler={this.addEditHandler}
                        />

                    }
                    <div id='CorporateandTeams' className="container">
                        <Link activeClass="active"
                            to={navigations.point}
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            isDynamic={true}
                            delay={2000}
                            ignoreCancelEvents={false}
                            spyThrottle={500} />
                        <div className="row">
                            <div className="col">
                                <div className="CorporateandTeams">
                                    Corporate and Teams
                                </div>

                                <div className="All-Under-One-Easy-Umbrella">
                                    All Under One, Easy Umbrella
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='corporateAndTeamsBtns'>
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <div className='employeeAppreciationbutton'>
                                        <Link to="EmployeeAPP" className='EmployeeAppreciationBtn'><span class="Employee-Appreciation">
                                            Employee Appreciation
                                        </span></Link>
                                    </div>

                                </div>
                                <div className="col-3">
                                    <div className='teamMoralandBuildingButton'>
                                        <Link to="TeamMoral" className='TeamMoralandBuildingBtn'><span class="Team-Moral-and-Building">
                                            Team Moral and Building
                                        </span></Link>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className='customerAppreciationButton'>
                                        <Link to="CustomerApp" className='CustomerAppreciation'><span className="Customer-Appreciation">
                                            Customer Appreciation
                                        </span></Link>
                                    </div>

                                </div>
                                <div className="col-3">
                                    <div className='corporateGivingProgramsButton'>
                                        <Link to="corporateGiving" className='CorporateGivingPrograms'><span class="Corporate-Giving-Programs">
                                            Corporate Giving Programs
                                        </span></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='EmployeeAPP' className='EmployeeAppreciationDiv'>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <img src={require('../../assets/images/png/EmployeeAppreciation.png')} alt='' className='EmployeeAppreciationImg' />

                                </div>
                                <div className="col-8">
                                    <div className=' employeeAppreciationParent'>
                                        <div class="EmployeeAppreciationContentTitle">
                                            Employee Appreciation
                                        </div>
                                        <div className='innerParent'>
                                            <div className=' employeeAppreciationCheckMark1'>
                                                <img src={require('../../assets/images/png/checkMark1.png')} alt=' employeeCheckMark1' />

                                            </div>

                                            <div className='employeeAppreciationContent'>
                                                <p> Easily reward your team with the sustenance they need.</p>
                                            </div>
                                        </div>

                                        <div className='innerParent2'>
                                            <div className=' employeeAppreciationCheckMark2'>
                                                <img src={require('../../assets/images/png/checkMark1.png')} alt=' employeeCheckMark2' />

                                            </div>

                                            <div className='employeeAppreciationContent2'>
                                                <p> Send them a quick pick me up.</p>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                    <div id='TeamMoral' className="container">
                        <div className="row">
                            <div className="col-8">
                                <div class="Team-Moral-and-Building-InSecondImage">
                                    Team Moral and Building
                                </div>
                                <div className='EmployeeAppreciationUl'>

                                    <div className='TeamMoralAndBuildingParent'>
                                        <div className='TeamMoralAndBuildingCheckMarkImgDiv'>
                                            <img src={require('../../assets/images/png/checkMark2.png')} alt='TeamMoralAndBuildingCheckMark' />
                                        </div>
                                        <div className='TeamMoralAndBuildingCheckMarkPara'>
                                            <p>  Gel your team by giving them the common ground of food and community.</p>
                                        </div>
                                    </div>

                                    <div className='TeamMoralAndBuildingParent2'>

                                        <div className='TeamMoralAndBuildingCheckMarkImgDiv2'>
                                            <img src={require('../../assets/images/png/checkMark2.png')} alt='TeamMoralAndBuildingCheckMark2' />
                                        </div>
                                        <div className='TeamMoralAndBuildingCheckMarkPara2'>
                                            <p>They can see what others are eating, send their free gift coins to other members on the team, send thank you’s, well-done’s or hang-in-there treats or jump on causes together.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-4">
                                <img src={require('../../assets/images/png/TeamImg.png')} alt='' className='TeamImg' />

                            </div>

                        </div>
                    </div>
                    <div id='CustomerApp' className=' CustomerAppreciationParentDiv'>
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <img src={require('../../assets/images/png/man.png')} alt='' className='man' />

                                </div>
                                <div class="col-8" >
                                    <div className='customerAppreciationParantDiv'>
                                        <div class="CustomerAppreciationContent">
                                            Customer Appreciation
                                        </div>

                                        <div className='EmployeeAppreciation'>

                                            <div className='CustomerAppreciationParent1'>
                                                <div className='CustomerAppreciationCheckMarkImgDiv1'>
                                                    <img src={require('../../assets/images/png/checkMark3.png')} alt='' className='CustomerAppreciationCheckMark1' />
                                                </div>
                                                <div className='CustomerAppreciationCheckMarkPara1'>
                                                    <p> Easily reward your most loyal customers.</p>
                                                </div>
                                            </div>

                                            <div className='CustomerAppreciationParent2'>
                                                <div className='CustomerAppreciationCheckMarkImgDiv2'>
                                                    <img src={require('../../assets/images/png/checkMark3.png')} alt='' className='CustomerAppreciationCheckMark2' />
                                                </div>
                                                <div className='CustomerAppreciationCheckMarkPara2'>
                                                    <p>Appreciation keep's them talking wonders and coming back.</p>
                                                </div>
                                            </div>

                                            <div className='CustomerAppreciationParent3'>
                                                <div className='CustomerAppreciationCheckMarkImgDiv3'>
                                                    <img src={require('../../assets/images/png/checkMark3.png')} alt='' className='CustomerAppreciationCheckMark3' />
                                                </div>
                                                <div className='CustomerAppreciationCheckMarkPara3'>
                                                    <p>Get your stragglers attention and lure them back with a treat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id='corporateGiving' class="container">
                        <div class="row">
                            <div class="col-8">
                                <div className='corporateGivingProgramsParent'>
                                    <div class="Corporate-Giving-Programs">
                                        Corporate Giving Programs
                                    </div>

                                    <div className='FirstCheckMarkContentParent'>
                                        <div className='firstCheckMarkImg'>
                                            <img src={require('../../assets/images/png/checkMark4.png')} alt='' className='checkMark4' />

                                        </div>
                                        <div className='firstCheckMarKContent'>
                                            <p> Personalized Campaign Page.</p>
                                        </div>
                                    </div>

                                    <div className='secondCheckMarkContentParent'>
                                        <div className='secondCheckMarkImg'>
                                            <img src={require('../../assets/images/png/checkMark4.png')} alt='' className='checkMark4' />

                                        </div>
                                        <div className='secondCheckMarKContent'>
                                            <div class="Your-campaign-page-will-not-only-be-visible-to-your-employees-and-clients-but-all-Munchers-within-the-app">
                                                <p> Your campaign page will not only be visible to your employees and clients, but all Munchers within the app.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='thirdCheckMarkContentParent'>
                                        <div className='ThirdCheckMarkImg'>
                                            <img src={require('../../assets/images/png/checkMark4.png')} alt='' className='checkMark4' />

                                        </div>
                                        <div className='thirdCheckMarKContent'>
                                            <div class="thirdPara">
                                                <p>   Every donation (from the organization, employees or towards your campaign) is published both on your page and in the feed to inspire all Munchers.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <img src={require('../../assets/images/png/charityImg.png')} alt='' className='charityImg' />

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <button className='Learn-More'>Learn More</button>
                            </div>

                        </div>
                    </div>


                </div>
                <div id='landlordsAndBuildings' className='corporateandteamsBlueScreen'>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="landlordsAndBuildings">
                                    Landlords and Buildings
                                </div>
                                <div class="RewardsLoyaltyAndOnlineOrdering">
                                    Rewards, Loyalty and Online Ordering
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-8">
                                <div className='ResidentialAndCommercialBuildingsColumn8Div'>
                                    <div class="ResidentialAndCommercialBuildings">
                                        Residential and Commercial Buildings
                                    </div>
                                    <div className='ResidentialAndCommercialBuildingsUl'>

                                        <div className='CommercialBuildingsParent1'>
                                            <div className='CommercialBuildingsArrow1'>
                                                <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow1' />

                                            </div>
                                            <div className='CommercialBuildingsPara1'>
                                                <p> Reward your tenants for paying rent on time.</p>
                                            </div>
                                        </div>

                                        <div className='CommercialBuildingsParent2'>
                                            <div className='CommercialBuildings0Arrow2'>
                                                <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow2' />

                                            </div>
                                            <div className='CommercialBuildingsPara2'>
                                                <p> Create incentives (signing a new lease, reporting a maintenance issue) and reward your tenants for fulfilling them.</p>
                                            </div>
                                        </div>
                                        <div className='CommercialBuildingsParent3'>
                                            <div className='CommercialBuildingsArrow3'>
                                                <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow3' />

                                            </div>
                                            <div className='CommercialBuildingsPara3'>
                                                <p>Give your renters another reason to renew their lease.</p>
                                            </div>
                                        </div>
                                        <div className='CommercialBuildingsParent4'>
                                            <div className='CommercialBuildingsArrow4'>
                                                <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow4' />

                                            </div>
                                            <div className='CommercialBuildingsPara4'>
                                                <p> Elevate your buildings’ appeal and tenant experience with the amenity of food and online ordering.</p>
                                            </div>
                                        </div>
                                        <div className='CommercialBuildingsParent5'>
                                            <div className='CommercialBuildingsArrow5'>
                                                <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow5' />

                                            </div>
                                            <div className='CommercialBuildingsPara5'>
                                                <p> Connect your tenants and create community.</p>
                                            </div>
                                        </div>
                                        <div className='CommercialBuildingsParent6'>
                                            <div className='CommercialBuildingsArrow6'>
                                                <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow6' />

                                            </div>
                                            <div className='CommercialBuildingsPara6'>
                                                <p> Gain insights into what rewards delight your tenants.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <img src={require('../../assets/images/png/BuildingIMG.png')} alt='' className='BuildingIMG' />

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div>
                                    <img src={require('../../assets/images/png/coffeeShop.png')} alt='' className='coffeeShop' />

                                </div>
                            </div>
                            <div class="col">
                                <div class="Malls-and-Food-Courts">
                                    Malls and Food Courts
                                </div>

                                <div class="Connect-shoppers-with-online-ordering">
                                    Connect shoppers with online ordering.
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-8">
                                <div class="Hotels">
                                    Hotels
                                </div>

                                <div class="Connect-guests-with-online-ordering-for-your-kitchen-andor-local-eats">
                                    Connect guests with online ordering for your kitchen and/or local eats.
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <img src={require('../../assets/images/png/HotelIMG.png')} alt='' className='HotelIMG' />

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="CorporateAndTeamContactUsBtn">
                                    <button onClick={() => this.setState({ isModalOpen: true, modalData: undefined })}><span class="ContactUsCorporateAndTeam">
                                        Contact Us
                                    </span></button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div id='Universities' className='corporateAndTeamsYellowScreen'>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="corporateAndTeamsYellowScreenUniversities">
                                    Universities
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-8">
                                <div className='mainParentDiv'>
                                    <div className='UniversitiesParent1'>
                                        <div className='UniversitiesArrow1'>
                                            <img src={require('../../assets/images/png/GraterthenIMG.png')} alt='' className='GraterthenIMG1' />
                                        </div>
                                        <div className='UniversitiesFirstPara1'>
                                            <p> Whether your campus would like to more deeply engage students or increase sales,</p>
                                        </div>

                                    </div>
                                    <div className='UniversitiesParent2'>
                                        <div className='UniversitiesArrow2'>
                                            <img src={require('../../assets/images/png/GraterthenIMG.png')} alt='' className='GraterthenIMG2' />
                                        </div>
                                        <div className='UniversitiesFirstPara2'>
                                            <p>   Whether you already have online ordering or you are looking to add online ordering to your services,</p>
                                        </div>

                                    </div>
                                    <div className='UniversitiesParent3'>
                                        <div className='UniversitiesThirdArrow'>
                                            <img src={require('../../assets/images/png/GraterthenIMG.png')} alt='' className='GraterthenIMG3' />
                                        </div>
                                        <div className='UniversitiesFirstPara3'>
                                            <p>   Munch Magic can add value to your campus dining programs.</p>
                                        </div>

                                    </div>
                                    <div class="UniversitiesLastPara">
                                        Pleases
                                        <span class="text-style-1"  onClick={() => this.setState({ isModalOpen: true, modalData: undefined })}>Contact Us</span>
                                        to see how Munch Magic can serve both you and your community.
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div className='UnivercityMainImage'>
                                    <img src={require('../../assets/images/png/UnivercityIMG.png')} alt='' className='UnivercityIMG' />

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <Link activeClass="active"
                    to={navigations.point}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    isDynamic={true}
                    delay={2000}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                />


                {/* <Footer /> */}
                <div className='PurpleColorDiv'>

                    <div class="container">
                        <div class="row" >
                            <div class="col">
                                <div class="HomeRectangle-91">
                                    <div class="Cant-find-us-in-your-area-Cant-find-a-certain-restuarant">
                                        Can't find us in your area? Can't find a certain restaurant?
                                    </div>

                                    <div class="HomeRectangle-19580">
                                        <button onClick={() => this.setState({ isModalOpen: true, modalData: undefined })} >Let Us Know</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" id='HomeList'>
                            <div class="col">
                                <div className='HomeListDeta'>

                                    <tbody>
                                        <tr>
                                            <td><span className="Home" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.home))}>Home</span></td>
                                            <td><span className="FooterDiv-How-it-Works" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.order))}>   How it Works</span></td>
                                            <td><span className="Restaurant" style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.restaurant, "point": "vendor", "height": '100' })}>Restaurant</span></td>
                                            <td><Link to='CorporateandTeams'> <span className="Corporate-and-Teams" style={{ cursor: 'pointer' }} >Corporate and Teams</span></Link></td>
                                            <td><span className="Ambassador-Program" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.brandambassador))}>Ambassador Program</span></td>

                                        </tr>

                                        <tr>
                                            <td><span className="FooterDiv-Shop">  Shop</span></td>
                                            <td><span className="FooterDiv-Easy-Gifting" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.gift))}>  Easy Gifting</span></td>
                                            <td> <span className="FooterDiv-Vendors" style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.restaurant, "point": "vendor", "height": '3900' })}>Vendors</span></td>
                                            <td><Link to='landlordsAndBuildings'><span class="Landlords-and-Buildings" style={{ cursor: 'pointer' }} >  Landlords and Buildings</span></Link></td>
                                            <td><span class="App">App</span></td>
                                        </tr>
                                        <tr>
                                            <td><span class="The-Movement" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.movement))}>The Movement</span></td>
                                            <td><span class="FooterDiv-Meaningful-Donation" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.ngo))}>  Meaningful Donation</span></td>
                                            <td><span class="NGOs" style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.restaurant, "point": "NonGovernmental", "height": '4700' })}>NGO's</span></td>
                                            <td> <Link to='Universities'><span class="Universities" style={{ cursor: 'pointer' }} >Universities</span></Link></td>
                                            <td><span class="Site-Map">Site Map</span></td>

                                        </tr>

                                    </tbody>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='lineDiv'></div>

                <div className="HomeRectangle">

                <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='FooterDivParent'>
                                <div class="Munch-Magic-All-Rights-Reserved">
                                    <p>©2022 Munch Magic. All Rights Reserved.</p>
                                </div>


                                <div className='HomeSocialmediaDiv'>
                                    <div className="Apple-Arcade">
                                        Connect With Us
                                    </div>

                                    <div className="HomeConnectWithUs">
                                        <ul>
                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" visibility= "hidden">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg></li>
                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" >
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg></li>
                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"visibility= "hidden">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg></li>
                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" visibility= "hidden">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="Terms-Condition">
                                    <p> Terms & Condition</p>
                                </div>

                                <div class="Privacy-Policy">
                                    <p>Privacy Policy</p>
                                </div>

                                </div>
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

        navigations: rServerData.navigations || {}


    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionContactUs,
        ActionRouteNavigate,
        ActionNavigation,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(corporateandteams);
