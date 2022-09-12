import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContactUs from '../../components/Modal/ContactUs';
import {
    ActionContactUs, ActionAddRestaurantPage, actionGetCuisineList, actionGetRestaurantOperator,
    ActinRestaurantOTPGenerator, ActinRestaurantOTPVerification, ActionNavigation
} from '../../store/actions/actions-server-data';
import PopupRestaurant from '../../components/Modal/PopupRestaurant';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import { URL_MAP } from '../../constants/urls';
import { buildRoute } from '../../configs/routes';


import './restaurant.less'
import { async } from 'q';

class restaurant extends Component {



    state = {
        isModalOpen: false,
        isStateUpdated: false,
        modalData: undefined,
        isDeleteModalOpen: false,
        isPopupRestaurantModalOpen: false
    }

    routeNavigate = (param) => {
        this.props.ActionNavigation(param)
    }

    addotpGeneratorHandler = (param) => {
        debugger;
        this.props.ActinRestaurantOTPGenerator(param)
    }

    addRestaurantHandler = (param) => {
        debugger;
        this.props.ActionAddRestaurantPage(param)
        this.setState({ isPopupRestaurantModalOpen: false, modalData: undefined, isStateUpdated: false })
    }

    closeRestaurantHandler = (param) => {
        debugger;
        // this.props.ActionAddRestaurantPage(param)
        this.setState({ isPopupRestaurantModalOpen: false, modalData: undefined, isStateUpdated: false })
    }

    addEditHandler = (param) => {
        debugger;
        this.props.ActionContactUs(param)
        this.setState({ isModalOpen: false, modalData: undefined, isStateUpdated: false, isPopupRestaurantModalOpen: false })
    }
    componentDidMount() {

        scroll.scrollTo(this.props.navigations.height);

    }


    render() {
        const { isModalOpen, modalData, isDeleteModalOpen, pagination, isPopupRestaurantModalOpen } = this.state;
        const { CuisineList, listCuisine, listRestaurantOperator, OTPGeneratorParam, RestaurantOTPVerification, navigations } = this.props;

        debugger;
        return (
            <div className='restaurantPage'>
                <Header />
                {
                    isModalOpen &&

                    <ContactUs
                        visible={isModalOpen}
                        modalData={modalData}
                        closeModal={() => this.setState({ isModalOpen: false, modalData: undefined })}
                        addEditHandler={this.addEditHandler}

                    />

                }
                {
                    isPopupRestaurantModalOpen &&

                    <PopupRestaurant
                        restaurantVisible={isPopupRestaurantModalOpen}
                        modalData={modalData}
                        closeModal={() => this.setState({ isPopupRestaurantModalOpen: false, modalData: undefined })}
                        closeRestaurantHandler={this.closeRestaurantHandler}
                    />

                }
                <div className='restaurantPageYelloColorScreen'>

                    <Link activeClass="active"
                        to={navigations.point}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        isDynamic={true}
                        delay={2000}
                        ignoreCancelEvents={false}
                        spyThrottle={500} />
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="For-Restaurants">
                                    For Restaurants
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='restaurantScroll' className='RestaurantsImgSession'>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div className='RestaurantImage'>
                                        <img src={require('../../assets/images/png/RestaurantIMG.png')} alt='' className='RestaurantIMG' />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div className='ClouldImg'>
                                        <img src={require('../../assets/images/png/restaurantClouldImg.png')} alt='' className='Cloud' />
                                    </div>
                                    <div class="RegisterBTN">
                                        <button onClick={() => this.setState({ isPopupRestaurantModalOpen: true, modalData: undefined })}><span class="Register">
                                            Register
                                        </span></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="TransformingTheFoodDiv">
                                    <p>Transforming the Food Platform Experience</p>
                                </div>
                                <span class="We-put-the-social-into-food-ordering">
                                    WE PUT THE SOCIAL INTO FOOD ORDERING
                                </span>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div className='allDiv'>
                                    <div className='OrganicMarketing'>
                                        <span class="Organic-Marketing">
                                            Organic Marketing
                                        </span>
                                        <img src={require('../../assets/images/png/mobileMarketing.png')} alt='' className='mobileMarketing' />
                                        <div class="Organic-marketing-with-the-broadcasting-of-every-order-into-the-feed">
                                            Organic marketing with the broadcasting of every order into the feed.
                                        </div>
                                        <span class="organicMarketing-Know-More">
                                            <Link to='OrganikMarcket'>  <p>  Know More <span className='organicMarketingGreaterthanSymbol'> &gt;</span></p> </Link>
                                        </span>
                                    </div>
                                    <div className='BrandedRewards'>
                                        <span class="Branded-Rewards">
                                            Branded Rewards
                                        </span>
                                        <img src={require('../../assets/images/png/financeProfit.png')} alt='' className='financeProfit' />
                                        <span class="Branded-rewards-tangible-referrals-and-retargeting-features-drives-repeat-business">
                                            <p>Branded rewards, tangible referrals, and retargeting features drives repeat business.</p>
                                        </span>
                                        <span class="brandedRewards-Know-More-">
                                            <Link to='BrandedRewardCard'>   <p> Know More <span className='brandedRewardsreaterthanSymbol'> &gt;</span></p></Link>
                                        </span>

                                    </div>
                                    <div className=' DigitalRestaurant'>
                                        <span class="Digital-Restaurant">
                                            Digital Restaurant
                                        </span>
                                        <img src={require('../../assets/images/png/onlineFoodOrder.png')} alt='' className='onlineFoodOrder' />
                                        <span class="Digital-restaurant-culture-and-followership-for-your-brand">
                                            <p>Digital restaurant culture and followership for your brand.</p>
                                        </span>
                                        <span class="DigitalRestaurant-Know-More-">
                                            <Link to='HowIt'>  <p> Know More <span className='digitalRestaurantGreaterthanSymbol'> &gt;</span></p></Link>
                                        </span>

                                    </div>
                                    <div className='Analytics'>
                                        <span class="analytics">
                                            Analytics
                                        </span>
                                        <img src={require('../../assets/images/png/seoAnalytics.png')} alt='' className='seoAnalytics' />
                                        <span class="See-some-of-the-things-our-analytics-can-help-you-do">
                                            <p>See some of the things our analytics can help you do.</p>
                                        </span>
                                        <span class="analytics-Know-More-">
                                            <Link to='Analytics'>   <p> Know More <span className='analyticsGreaterthanSymbol'> &gt;</span></p></Link>
                                        </span>

                                    </div>
                                    <div className=' StreamlinedOrdering'>
                                        <span class="Streamlined-Ordering">
                                            Streamlined Ordering
                                        </span>
                                        <img src={require('../../assets/images/png/manExploringInternet.png')} alt='' className='manExploringInternet' />
                                        <span class="Streamline-your-operation-both-on-and-off-premise-with-online-payments-and-easy-ordering">
                                            <p> Streamline your operation both on and off premise with online payments and easy ordering.</p>
                                        </span>
                                        <span class="StreamlinedOrdering-Know-More-">
                                            <Link to='Streamline'>  <p> Know More <span className='streamlinedOrderingGreaterthanSymbol'> &gt;</span></p> </Link>
                                        </span>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='WinImgDiv'>
                        <div class="container">
                            <div class="row">
                                <div class="col-10">

                                    <div className='restaurantBlueCheckBoxParant1'>
                                        <div className='restaurantBlueCheckBoxIcon1'>
                                            <img src={require('../../assets/images/png/restaurantBlueCheckBox.png')} alt='' className='restaurantBlueCheckBox1' />

                                        </div>
                                        <div className='restaurantBlueCheckBoxContent1'>
                                            <p>Inventory management: easily place items out of stock.</p>
                                        </div>

                                    </div>
                                    <div className='restaurantBlueCheckBoxParant2'>
                                        <div className='restaurantBlueCheckBoxIcon2'>
                                            <img src={require('../../assets/images/png/restaurantBlueCheckBox.png')} alt='' className='restaurantBlueCheckBox2' />

                                        </div>
                                        <div className='restaurantBlueCheckBoxContent2'>
                                            <p>Customizable prep times specific to your items.</p>
                                        </div>

                                    </div>
                                    <div className='restaurantBlueCheckBoxParant3'>
                                        <div className='restaurantBlueCheckBoxIcon3'>
                                            <img src={require('../../assets/images/png/restaurantBlueCheckBox.png')} alt='' className='restaurantBlueCheckBox3' />

                                        </div>
                                        <div className='restaurantBlueCheckBoxContent3'>
                                            <p>Contactless Ordering.</p>
                                        </div>

                                    </div>
                                    <div className='restaurantBlueCheckBoxParant4'>
                                        <div className='restaurantBlueCheckBoxIcon4'>
                                            <img src={require('../../assets/images/png/restaurantBlueCheckBox.png')} alt='' className='restaurantBlueCheckBox4' />

                                        </div>
                                        <div className='restaurantBlueCheckBoxContent4'>
                                            <p>Contactless Payment.</p>
                                        </div>

                                    </div>
                                    <div className='restaurantBlueCheckBoxParant5'>
                                        <div className='restaurantBlueCheckBoxIcon5'>
                                            <img src={require('../../assets/images/png/restaurantBlueCheckBox.png')} alt='' className='restaurantBlueCheckBox5' />

                                        </div>
                                        <div className='restaurantBlueCheckBoxContent5'>
                                            <p>Wireless, no need for landlines.</p>
                                        </div>

                                    </div>
                                    <div className='restaurantBlueCheckBoxParant6'>
                                        <div className='restaurantBlueCheckBoxIcon6'>
                                            <img src={require('../../assets/images/png/restaurantBlueCheckBox.png')} alt='' className='restaurantBlueCheckBox6' />

                                        </div>
                                        <div className='restaurantBlueCheckBoxContent6'>
                                            <p>Wireless, no need for landlines.</p>
                                        </div>

                                    </div>
                                    <div className='restaurantBlueCheckBoxParant7'>
                                        <div className='restaurantBlueCheckBoxIcon7'>
                                            <img src={require('../../assets/images/png/restaurantBlueCheckBox.png')} alt='' className='restaurantBlueCheckBox7' />

                                        </div>
                                        <div className='restaurantBlueCheckBoxContent7'>
                                            <p>Express checkout with PayPal.</p>
                                        </div>

                                    </div>
                                    <div className='restaurantBlueCheckBoxParant8'>
                                        <div className='restaurantBlueCheckBoxIcon8'>
                                            <img src={require('../../assets/images/png/restaurantBlueCheckBox.png')} alt='' className='restaurantBlueCheckBox8' />

                                        </div>
                                        <div className='restaurantBlueCheckBoxContent8'>
                                            <p>Tap into Our Growing Community; Your listing on Munch Magic.</p>
                                        </div>

                                    </div>


                                </div>
                                <div class="col-2">
                                    <div>
                                        <img src={require('../../assets/images/png/winBuyImg.png')} alt='' className='winImg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='OrganikMarcket' className='OrganikMarcketContent'>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <span class="Organic-Marketing-with-Every-Order">
                                        Organic Marketing with Every Order
                                    </span>
                                    <ul>
                                        <li>
                                            <span className='theFeedContentFirstPara'>
                                                <p> Munchers are higher value customer because become they an ambassador for you. </p>
                                            </span>
                                        </li>


                                        <li>
                                            <span className='theFeedContentSecondPara'>
                                                <p>Each order and each gift sent from your establishment through Munch Magic is published in the feed for all of their friends to see. </p>
                                            </span>
                                        </li>


                                        <li>
                                            <span className='theFeedContentThirdPara'>
                                                <p>Munchers see this when searching for where or what to eat.
                                                    They also see items and businesses their friends have eaten and marked as a favorite while perusing the restaurant menus.</p>
                                            </span>

                                        </li>

                                    </ul>
                                </div>
                                <div class="col-4">
                                    <div className='RightSideSession'>
                                        <span class="The-Feed">
                                            The Feed
                                        </span>
                                        <img src={require('../../assets/images/png/theFeedMobileImg.png')} alt='' className='Group 23401' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='BrandedRewardCard' class="container">
                        <div class="row">
                            <div class="col-6">
                                <img src={require('../../assets/images/png/RewardCard.png')} alt='' className='BrandedRewardsImg' />

                            </div>
                            <div class="col-6">
                                <div className='BrandedRewardCardContent'>
                                    <span class="BrandedRewardsCard">
                                        Branded Rewards
                                    </span>
                                    <div class="RewardYourBestClients">
                                        Reward your best clients and target the trailers
                                    </div>
                                    <div class="DoYouRememberThePaper">
                                        Do you remember the paper punch cards that rewarded you with a free something on your tenth visit?
                                    </div>
                                    <span class="InMunchMagic">
                                        <p className='InMunchMagicPara1'>In Munch Magic, you get your own digitalized punchcard</p>
                                        <p className='InMunchMagicPara2'>with every customer who orders from you and each friend</p>
                                        <p className='InMunchMagicPara3'> to whom they send their gift coin after every order.</p>
                                        <p className='InMunchMagicPara4'>  Plus, you set the terms.</p>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id='HowIt' class="container">
                        <div class="row">
                            <div class="col">
                                <div class="How-It-Works">
                                    How It Works
                                </div>
                                <div className='HowItWorksContent'>
                                    <p>  The first time a customer orders from you, a punchcard for your establishment is set up with the first slot filled.
                                        The client is also given a gift coin to send to a friend. When she choses a friend and sends the gift coin, a punchcard for your establishment is also set up for the giftee (to doubly encourage her to order from you, both through the indirect recommendation of her friend and her punchcard incentive). You decide what is rewarded</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='Analytics' class="container">
                        <div class="row">
                            <div class="col">
                                <span class="Analytics-The-Power-of-Insight">
                                    Analytics: The Power of Insight
                                </span>

                                <div class="Some-of-the-things-our-analytics-can-help-you-do">
                                    Some of the things our analytics can help you do:
                                </div>

                                <div className='AnalyticsUL'>
                                    <ul>

                                        <li>
                                            <span className='AnalyticsContentPara1'>
                                                <p> Reward your best clients and target the trailers.</p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='AnalyticsContentPara2'>
                                                <p>Encourage off-hour visits by giving discounts only during that time period, helping you move food, fill tables and keep your regular patrons happy.</p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='AnalyticsContentPara3'>
                                                <p>Surprise with spontaneous rewards: draw in first time guests and pull them in for a second visit.</p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='AnalyticsContentPara4'>
                                                <p>Track which promotions are redeemed and easily see which are more effective to hone your marketing strategy.</p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='AnalyticsContentPara5'>
                                                <p>Optimise your menu by eliminating slower moving items.</p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='AnalyticsContentPara6'>
                                                <p>Reduce costs by only ordering ingredients you need.</p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='AnalyticsContentPara6'>
                                                <p>Encourage more sales by offering promotions for popular items.</p>
                                            </span>

                                        </li>

                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div id='Streamline' class="container">
                        <div class="row">
                            <div class="col">
                                <div class="Streamline">
                                    Streamline
                                </div>
                                <div className='StreamlineParentPara'>

                                    <p className='StreamlinePara1'> Streamline your operation both on and off premise with online payments and easy ordering.</p>
                                    <p className='StreamlinePara2'>This translates as cutting down on labor costs and/or focusing the human input where it’s needed </p>
                                    <p className='StreamlinePara3'>most: the food and the clients.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='StreamlineButtons'>

                        <div class="container">
                            <div class="row">

                                <div class="col">
                                    <div className=' noCommitments'>
                                        <button>
                                            <span class="no-commitments">
                                                NO COMMITMENTS
                                            </span>
                                        </button>

                                    </div>
                                </div>
                                <div class="col">
                                    <button>
                                        <span class="no-monlthy-payment">
                                            NO MONTHLY PAYMENTS
                                        </span>
                                    </button>
                                </div>
                                <div class="col">
                                    <button>
                                        <span class="no-credit-card-needed">
                                            NO CREDIT CARD NEEDED
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="contactUsBtnParent">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <button className='contactUsBtn' onClick={() => this.setState({ isModalOpen: true, modalData: undefined })}> Contact Us</button>


                                </div>
                                <div class="col">

                                    <div class="secondRegisterBTN">
                                        <button onClick={() => this.setState({ isPopupRestaurantModalOpen: true, modalData: undefined })}><span class="Register">
                                            Register
                                        </span></button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div id='vendor' class="RestaurantBlue">
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div class="Vendors">
                                        Vendors
                                    </div>

                                    <div class="Treat-and-Gift-Makers">
                                        Treat and Gift Makers
                                    </div>

                                    <div class="Do-you-make-unique-treats">
                                        Do you make unique treats?
                                    </div>

                                    <div class="Or-have-items-that-would-make-great-gifts">
                                        Or have items that would make great gifts?
                                    </div>

                                    <div class="We-would-love-to-hear-from-you">
                                        We would love to hear from you!
                                    </div>

                                    <div class="OrganicMArketingPara">
                                        <div className='organicMarketingLine'>
                                            <p>Organic marketing with the broadcasting of every order and gift into the feed.</p>
                                        </div>

                                        <div className='BuildTheRightLine'>
                                            <p>Build the right brand image aligned with your values and our NGOs; pick a cause to support. It will be shown in your listing.</p>
                                        </div>

                                        <div className='IfMakeAdonation'>
                                            <p> If you make a donation to a cause, it is also published in the feed, which broadcasts to your clients where your values lie. </p>
                                        </div>
                                        <div className='GrowingOurCummunityLine'>
                                            <p>Tap into Our Growing Community; Your listing on Munch Magic mobile and website applications.</p>
                                        </div>
                                    </div>
                                    <div class="secondContactUsBtn">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <button onClick={() => this.setState({ isModalOpen: true, modalData: undefined })}><span class="Second-Contact-Us">
                                                        Contact Us
                                                    </span></button>


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <img src={require('../../assets/images/png/VendersImg.png')} alt='' className='VendersImg' />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id='NonGovernmental' class="RestaurantYellowScreen">
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div class="RestaurantNGOs">
                                        NGOs
                                    </div>
                                    <ul>
                                        <li>
                                            <span className='RestaurantNGOsPara1'>
                                                <p> Are you an NGO that would like to deepen your impact, expand your reach, grow your followership and raise more funds?</p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='RestaurantNGOsPara2'>
                                                <p> Munch Magic is a social food ordering app not in which users can donate food while ordering their own.</p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='RestaurantNGOsPara3'>
                                                <p> We aim to bring people into more intimate relationships
                                                    with organisations working for the causes that they care about, bridging the gap between the two in an informal, social media format. </p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='RestaurantNGOsPara4'>
                                                <p> Tap into our growing community. Every donation within the app is broadcast into the feed where users see what causes and organisations their friends are supporting.
                                                    This triple serves as inspiration, information, and organic advertising! </p>
                                            </span>

                                        </li>
                                        <li>
                                            <span className='RestaurantNGOsPara5'>
                                                <p> If you are interested in having your NGO on Munch Magic, please<span><a className='RestaurantPageAs' onClick={() => this.setState({ isModalOpen: true, modalData: undefined })} >contact us</a> </span></p>
                                            </span>

                                        </li>

                                    </ul>
                                </div>
                                <div class="col-4">
                                    <div className='ResturantNgosIMGDIV'>
                                        <img src={require('../../assets/images/png/restaurantNgosImg.png')} alt='' className='RestaurantNGOsImg' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
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
                                            <td> <Link to='restaurantScroll'><span className="Restaurant" style={{ cursor: 'pointer' }} >Restaurant</span></Link></td>
                                            <td><span className="Corporate-and-Teams" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.corporateandteams))}>Corporate and Teams</span></td>
                                            <td><span className="Ambassador-Program" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.brandambassador))}>Ambassador Program</span></td>

                                        </tr>

                                        <tr>
                                            <td><span className="FooterDiv-Shop">  Shop</span></td>
                                            <td><span className="FooterDiv-Easy-Gifting" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.gift))}>  Easy Gifting</span></td>
                                            <td><Link to='vendor'> <span className="FooterDiv-Vendors" style={{ cursor: 'pointer' }} >Vendors</span></Link></td>
                                            <td><span class="Landlords-and-Buildings" style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.corporateandteams, "point": "landlordsAndBuildings" })}>  Landlords and Buildings</span></td>
                                            <td><span class="App">App</span></td>
                                        </tr>
                                        <tr>
                                            <td><span class="The-Movement" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.movement))}>The Movement</span></td>
                                            <td><span class="FooterDiv-Meaningful-Donation" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.ngo))}>  Meaningful Donation</span></td>
                                            <td> <Link to='NonGovernmental'> <span class="NGOs" style={{ cursor: 'pointer' }} >NGO's</span></Link></td>
                                            <td><span class="Universities" style={{ cursor: 'pointer' }} onClick={() => this.routeNavigate({ "navigate": URL_MAP.corporateandteams, "point": "Universities" })}>Universities</span></td>
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
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" visibility= "hidden">
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

        isLoading: rLoading.login || false,
        OTPGeneratorParam: rServerData.OTPGeneratorParam || {},
        RestaurantOTPVerification: rServerData.RestaurantOTPVerification || [],
        navigations: rServerData.navigations || {}

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionContactUs,
        ActionAddRestaurantPage,
        ActinRestaurantOTPGenerator,
        ActinRestaurantOTPVerification,
        ActionRouteNavigate,
        ActionNavigation,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(restaurant);
