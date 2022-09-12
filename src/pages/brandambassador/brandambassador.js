import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Branding from '../../components/Modal/Branding';
import { ActionAddAmbassador } from '../../store/actions/actions-server-data';
import './brandambassador.less'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class brandambassador extends Component {
    state = {
        isBrandingModalOpen: false,
        isStateUpdated: false,
        modalData: undefined,
        isDeleteModalOpen: false,
    }
    componentDidMount() {
        scroll.scrollTo(this.props.navigations.height);
    }

    addEditHandler = (param) => {
        debugger;
        this.props.ActionAddAmbassador(param)
        this.setState({ isBrandingModalOpen: false, modalData: undefined, isStateUpdated: false })
    }
    render() {
        const { isBrandingModalOpen, modalData, isDeleteModalOpen, pagination } = this.state;
        const { navigations } = this.props;
        return (
            <div className='brandambassadorPage'>
                <Header />
                <Link activeClass="active"
                    to={navigations.point}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    isDynamic={true}
                    delay={2000}
                    ignoreCancelEvents={false}
                    spyThrottle={500} />
                <div className='brandambassadorYellowScreen'>
                    {
                        isBrandingModalOpen &&

                        <Branding
                            brandVisible={isBrandingModalOpen}
                            modalData={modalData}
                            closeModal={() => this.setState({ isBrandingModalOpen: false, modalData: undefined })}
                            addEditHandler={this.addEditHandler}
                        />

                    }
                    <div id='brandambassadorScroll' className="container">
                        <div className="row">
                            <div className="col">
                                <div className="BrandAmbassadorTitle">
                                    Brand Ambassador
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div>
                                    <img src={require('../../assets/images/png/brandAmbassadorIMG.png')} alt='' className='brandAmbassadorIMG' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='brandAmbassadorPara'>
                                    <p>  We are thrilled that you are interested in becoming a Magic Maker!</p>
                                </div>
                                <div className='brandAmbassadorFirstPara'>
                                    <p> Magic Makers are the dynamite of Munch Magic, lighting the spark and spreading the fire.</p>
                                </div>
                                <div className='brandAmbassadorSecondPara'>
                                    <p>  This program was created to help you fulfil your dreams with Munch Magic as your vehicle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="Is-the-vehicle-right-for-you">
                                    Is the vehicle right for you?
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <div class="MunchMagicAimsTo">
                                    Munch Magic aims to:
                                </div>

                                <div className=' MunchMagicAimsParent'>
                                    <div className='MunchMagicAimsArrow'>
                                        <img src={require('../../assets/images/png/BlackArrow.png')} alt='' className='MunchMagicAimsBlackArrow' />
                                    </div>
                                    <div className='MunchMagicAimsArrowContent'>
                                        <p>  Habituate generosity: Place giving and getting where they should be, side by side. In other words, weave gifting culture into consumerism behaviours (Gifting and Donation Platforms)</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-2">
                                <div className='AmbassadorMobileOne'>
                                    <img src={require('../../assets/images/png/AmbassadorMobileOne.png')} alt='' />
                                </div>
                            </div>
                            <div class="col-2">
                                <div className='AmbassadorMobileTwo'>
                                    <img src={require('../../assets/images/png/AmbassadorMobileTwo.png')} alt='' />
                                </div>
                            </div>
                            <div class="col-2">
                                <div className='AmbassadorMobileThree'>
                                    <img src={require('../../assets/images/png/AmbassadorMobileThree.png')} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='ambassadorSingleMoble'>
                                    <img src={require('../../assets/images/png/AmbassadorMobile.png')} alt='' className='AmbassadorMobile' />

                                </div>
                            </div>
                            <div class="col">
                                <div className='SingleMobileParent'>
                                    <div className='ambassadorSingleMobleArrow'>
                                        <img src={require('../../assets/images/png/BlackArrow.png')} alt='' className='ambassadorSingleMobleArrow' />

                                    </div>
                                    <div className='ambassadorSingleMobleArrowContent'>
                                        <p>  Bring the social into food: foster friendships, fun, delight and connection. (Feed and other social aspects)</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='resolveHungerContenentParent'>
                                    <div className='resolveHungerContentMobileArrow'>
                                        <img src={require('../../assets/images/png/BlackArrow.png')} alt='' className='resolveHungerContentMobileArrow' />

                                    </div>
                                    <div className='resolveHungerContentPara'>
                                        <p>Resolve hunger, food insecurity and sustainability issues (NGO platform)</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col">
                                <img src={require('../../assets/images/png/AmbassadorMobileTwo.png')} alt='' className='resolveHungerContenentIMG' />

                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='curatedOnlineShop'>
                                    <img src={require('../../assets/images/png/curatedOnlineShop.png')} alt='' className='curatedOnlineShop' />

                                </div>
                            </div>
                            <div class="col">
                                <div className='curatedOnlineShopParent'>
                                    <div className='curatedOnlineShopArrow'>
                                        <img src={require('../../assets/images/png/BlackArrow.png')} alt='' className='curatedOnlineShopArrow' />

                                    </div>
                                    <div className='curatedOnlineShopArrowContent'>
                                        <p>  Promote ethical, fun and beneficial brands so that  our society is rewoven with goodness,
                                            and we have good options from which to make good choices (Curated Online Shop)</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='checkedContentParentDiv1'>
                                    <div className='checkedImgOne'>
                                        <img src={require('../../assets/images/png/checkedIMG.png')} alt='' className='checkedImgOne' />
                                    </div>
                                    <div className='checkedImgOneContentOne'>
                                        <p> If these values line up with yours,</p>
                                    </div>
                                </div>

                                <div className='checkedContentParentDiv2'>
                                    <div className='checkedImgTwo'>
                                        <img src={require('../../assets/images/png/checkedIMG.png')} alt='' className='checkedImgTwo' />
                                    </div>
                                    <div className='checkedImgOneContentTwo'>
                                        <p>If this is something which excites you.</p>
                                    </div>
                                </div>

                                <div className='checkedContentParentDiv3'>
                                    <div className='checkedImgThree'>
                                        <img src={require('../../assets/images/png/checkedIMG.png')} alt='' className='checkedImgThree' />
                                    </div>
                                    <div className='checkedImgOneContentThree'>
                                        <p>If you love people, our planet and dream of making an impact,</p>
                                    </div>
                                </div>

                                <div className='checkedContentParentDiv4'>
                                    <div className='checkedImgFour'>
                                        <img src={require('../../assets/images/png/checkedIMG.png')} alt='' className='checkedImgFour' />
                                    </div>
                                    <div className='checkedImgOneContentFour'>
                                        <p>We want to hear from you!</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='brandAmbassadorPinkScreen'>
                    <div class="container">
                        <div class="row">
                            <div class="col-10">
                                <div className='pinkScreenContent'>
                                    <p className='pinkScreenContentPara1'>  Please tell us a bit more about yourself so that</p>
                                    <p className='pinkScreenContentPara2'> we can get to know you a bit better.</p>

                                </div>
                            </div>
                            <div class="col-2">
                                <div className='brandAmbassadorPinkScreenButton'>
                                    <button onClick={() => this.setState({ isBrandingModalOpen: true, modalData: undefined })}> Apply</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='brandAmbassadorBlueScreen'>
                    <div class="WhatIsABrAndAmbassador">
                        What is a Brand Ambassador?
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-8">

                                <div className='brandAmbassadorAnswerParentDiv1'>
                                    <div className='brandAmbassadorAnswerArrow1'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='brandAmbassadorAnswerArrow1' />

                                    </div>
                                    <div className='brandAmbassadorAnswer1'>
                                        <p> The label “brand ambassador” used to be exclusively for celebrities.
                                            These days the phrase has evolved to include many more possibilities and a wider meaning. </p>
                                    </div>

                                </div>


                                <div className='brandAmbassadorAnswerParentDiv2'>
                                    <div className='brandAmbassadorAnswerArrow2'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='brandAmbassadorAnswerArrow2' />

                                    </div>
                                    <div className='brandAmbassadorAnswer2'>
                                        <p>Generally speaking, a brand ambassador represents a
                                            brand in a positive way and helps to increase sales and awareness of the brand. </p>
                                    </div>

                                </div>


                                <div className='brandAmbassadorAnswerParentDiv3'>
                                    <div className='brandAmbassadorAnswerArrow3'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='brandAmbassadorAnswerArrow3' />

                                    </div>
                                    <div className='brandAmbassadorAnswer3'>
                                        <p> But many people are still unsure about whether they can
                                            become a brand ambassador or how to to go about it.</p>
                                    </div>

                                </div>
                            </div>

                            <div class="col-4">
                                <div>
                                    <img src={require('../../assets/images/png/socialMediaMarketing.png')} alt='' className='socialMediaMarketing' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='brandAmbassadorPinkScreen2'>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='brandAmbassadorPinkScreen2ParaOne'>
                                    <p> Must I have an active, engaged social media audience to become an ambassador?</p>
                                </div>

                                <div className='brandAmbassadorPinkScreen2ParaTwo'>
                                    <p>  No. There are multiple ways to get involved. And of course,
                                        we also do accept social media ambassadors.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='brandAmbassadorBrownScreen'>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="munchMagicInvolvement">
                                    Munch Magic Involvement
                                </div>
                                <div className='munchMagicInvolvementPara'>
                                    <p>  Here are some of the ways brand ambassadors become involved with Munch to spread the Magic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="onTheGroundCampaigns">
                                    On The Ground Campaigns
                                </div>
                                <div className='onTheGroundCampaignsPara'>
                                    <p> Increase brand awareness and sales with local guerrilla marketing: scavenger hunts,
                                        free give aways, pop-ups, signage… the limit here is only your creativity. </p>

                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <img src={require('../../assets/images/png/campaign.png')} alt='' className='campaign' />

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='socialMediaParentDiv'>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div>
                                        <img src={require('../../assets/images/png/socialMedia.png')} alt='' className='socialMediaImages' />

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="socialMedia">
                                        Social Media
                                    </div>
                                    <span class="munchMagicInvolvementSocialMediaPara">
                                        <p className='para1'> Our growing family of #MagicMakers earn treats and perks just for sharing. We love to see the original content you create!</p>
                                        <p className='para2'> You should have at least one active channel with an engaged audience. All social media channels are accepted.</p>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="productTesting">
                                    Product Testing
                                </div>
                                <div class="productTestingPara">
                                    <p> Testing out new features of the app and giving us your
                                        feedback about your experience and what works best.</p>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <img src={require('../../assets/images/png/productDevelopment.png')} alt='' className='productDevelopmentImage' />

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div>
                                    <img src={require('../../assets/images/png/partners.png')} alt='' className='partnersImage' />

                                </div>
                            </div>
                            <div class="col">
                                <div class="restaurantPartners">
                                    Recruit and Sign on Restaurant Partners
                                </div>

                                <div className='restaurantPartnersRightArrowParentDiv1'>
                                    <div className='WhiteRightArrowArrowImgOne'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrowImgOne' />
                                    </div>
                                    <div className='restaurantPartnersRightArrowContent1'>
                                        <p>  Do you like to talk to people?</p>
                                    </div>
                                </div>

                                <div className='restaurantPartnersRightArrowParentDiv2'>
                                    <div className='WhiteRightArrowArrowImgTwo'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrowImgTwo' />
                                    </div>
                                    <div className='restaurantPartnersRightArrowContent2'>
                                        <p> Do you know the restaurants in your area?</p>
                                    </div>
                                </div>

                                <div className='restaurantPartnersRightArrowParentDiv3'>
                                    <div className='WhiteRightArrowArrowThree'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrowImgThree' />
                                    </div>
                                    <div className='restaurantPartnersRightArrowContent3'>
                                        <p> Do you like to help local businesses?</p>
                                    </div>
                                </div>

                                <div className='restaurantPartnersRightArrowParentDiv4'>
                                    <div className='WhiteRightArrowImgFour'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrowImgFour' />
                                    </div>
                                    <div className='restaurantPartnersRightArrowContent4'>
                                        <p>Give back to your neighbourhood restaurants by giving them Munch Magic.</p>
                                    </div>
                                </div>

                                <div className='restaurantPartnersRightArrowParentDiv5'>
                                    <div className='WhiteRightArrowImgFive'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrowImgFive' />
                                    </div>
                                    <div className='restaurantPartnersRightArrowContent5'>
                                        <p>Approved Sales Ambassadors earn a fee for every restaurant signed on.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='brandAmbassadorSmallBlueDiv'>
                                    <div className='brandAmbassadorSmallBlueDivPara1'>
                                        <p> What does a Magic Maker look like?</p>
                                    </div>
                                    <div className='brandAmbassadorSmallBlueDivPara2'>
                                        <p> Unity in Diversity</p>
                                    </div>
                                    <div className='brandAmbassadorSmallBlueDivPara3'>
                                        <p>All races, ages, and genders are welcome! </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='SecondApplyButton'>
                                    <button onClick={() => this.setState({ isBrandingModalOpen: true, modalData: undefined })}>Apply</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <Footer />
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
        ActionAddAmbassador,
        ActionRouteNavigate,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(brandambassador);

