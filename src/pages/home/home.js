import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Popover } from 'antd';
import CommonDialog from '../../components/Modal/CommonDialog';
import './home.less'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import { URL_MAP } from '../../constants/urls';
import { buildRoute } from '../../configs/routes';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class home extends Component {
    componentDidMount() {
        scroll.scrollTo(this.props.navigations.height);
    }
    render() {
        const { navigations } = this.props;
        return (
            <div className='HomepageDiv'>

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
                <div className='YellowScreenPageDiv'>
                    <div className="container">

                        <div className="row" >
                            <div className="col">
                                <h1 className='CenterStarImg'><img src={require('../../assets/images/png/munchmagicLogoImage.png')} alt='' className='CenterStarImg' />

                                    <div className='TopBitmap' ><img src={require('../../assets/images/png/Group 23569.png')} alt='' className='TopBitmapImg' style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.ngo))} /></div>
                                    <div class="leftBitmap" ><img src={require('../../assets/images/png/Group 23568.png')} alt='' class="leftBitmapImg" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.order))} /></div>
                                    <div class="rightBitmap" ><img src={require('../../assets/images/png/Group 23570.png')} alt='' class="rightBitmapImg" style={{ cursor: 'pointer' }} onClick={() => this.props.ActionRouteNavigate(buildRoute(URL_MAP.gift))} /></div>
                                </h1>
                            </div>

                        </div>

                        <div className="row" id='OrderFood'>
                            <div className="col-4">
                                <span className="Get-Order-Food">
                                    <span className="text-style-22">Get</span><h6>Order Food</h6>
                                </span>

                                <img src={require('../../assets/images/png/Group 23528.png')}
                                    srcset="../../src/assets/images/png/Group 23528@2x.png 2x,
                                        ../../src/assets/images/png/Group 23528@3x.png 3x"
                                    className="Group-23528" />


                                <div className='paraDiv'>
                                    <p className='In-the-feed-discover-what-your-friends'>In the feed, discover what your  </p>
                                    <p className='and-co-workers-are-eating'>friends and co-workers are </p>
                                    <p className='the-best-curated-treats-and-local-eats'> eating,the best curated treats </p>
                                    <p className='and-local-eats'>and local eats.</p>
                                </div>

                                <div className='LinkDiv'>
                                    <span className="ORDERBTN">
                                        <button><span className='OrderButton'>ORDER &gt;</span></button>
                                    </span>
                                </div>


                            </div>



                            <div className="col-4" id='GiftAtreate'>
                                <span className="Gift-Gift-a-Treat">
                                    <span className="text-style-22">Gift</span>
                                    <h6>Gift a Treat</h6>
                                </span>

                                <img src={require('../../assets/images/png/Group 23529.png')}
                                    srcset="../../src/assets/images/png/Group 23529@2x.png 2x,
                                     ../../src/assets/images/png/Group 23529@3x.png 3x"
                                    className="Group-23529" />

                                <div className='paraDiv'>

                                    <p className='Gift-a-treat-large-or-small-from'> Gift a treat, large or small, from</p>
                                    <p className='their-neighbourhood-favourite-or'>their neighbourhood favourite or</p>
                                    <p className='our-carefully-curated-catalog-of'>our carefully curated catalog of</p>
                                    <p className='unique-and-trending-treats'>unique and trending treats.</p>
                                    <p className='No-address-necessary'> No address necessary.</p>


                                </div>

                                <div className='LinkDiv'> <span className="GiftBTN">
                                    <button><span className='giftButton'>GIFT &gt;</span> </button>
                                </span></div>

                            </div>
                            <div className="col-4" id='MakeAimpact'>
                                <span className="Donate-Make-an-Impact">
                                    <span className="text-style-2">Donate</span>
                                    <h6 className='Donate-Make-an-Impact-contect'>Make an Impact</h6>
                                </span>

                                <img src={require('../../assets/images/png/Group 23530.png')}
                                    srcset="../../src/assets/images/png/Group 23530@2x.png 2x,
                                    ../../src/assets/images/png/Group 23530@3x.png 3x"
                                    className="Group-23530" />

                                <div className='paraDiv'>
                                    <p className='Discover-and-donate-to-hand-'> Discover and donate to hand-</p>
                                    <p className='picked-and-screened-NGOs'> picked and screened NGO’s</p>
                                    <p className='fighting-against-hunger-food'>fighting against hunger, food </p>
                                    <p className='insecurity-and-sustainability-issues'> insecurity and sustainability issues.</p>

                                </div >

                                <div className='LinkDiv'>
                                    <span className="DonateBTN">
                                        <button><span className='donateButton'>DONATE &gt;</span></button>

                                    </span>
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <div class="Rectangle-19556">
                                    <p className='Munch-Magic-lets-you-easily-order-gift-and-donate-food-integrating'>  Munch Magic lets you easily order, gift and donate food, integrating</p>
                                    <p className='the-experiences-so-you-can-spread-the-fun-and-food'>the experiences, so you can spread the fun and food.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <Footer />

                </div>


            </div >



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
        ActionRouteNavigate,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(home);


