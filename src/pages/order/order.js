import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './order.less'
import { URL_MAP } from '../../constants/urls';
import { buildRoute } from '../../configs/routes';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class order extends Component {
    componentDidMount() {     
        scroll.scrollTo(this.props.navigations.height); 
    }
    componentDidUpdate(){
        debugger;
        window.location.reload(false);
    }
    render() {
        const { navigations } = this.props;

        return (
            <div className='OrderPage'>
                <Header />
                <Link activeClass="active"
                to={navigations.point}
                spy={true}
                smooth={true}
                hashSpy={true}
                isDynamic={true}
                delay={2000}
                ignoreCancelEvents={false}
                spyThrottle={500}  />
                <div className='ordersYellowScreen'>

                    <div id='orderScroll' className='OrderPageParent'>

                        <div class="container">
                            <div class="row" id='orderingContentDiv'>
                                <div class="col-12">
                                    <span class="Ordering">
                                        <h1>Ordering</h1>
                                    </span>

                                    <div class="How-Does-It-Work">
                                        How Does It Work?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row" >
                            <div className='col'>
                                <div className='orderThreeMobileDivPareent'>
                                    <div class="firstStepMobileContent">
                                        <div className='firstImg'>
                                            <img src={require('../../assets/images/png/MobileCopyIMG.png')} style={{ height: "360px" }} alt='' className='firstStepMobileImage' />

                                        </div>

                                        <div className='firstStepAndPara'>
                                            <div class="Step-1">
                                                Step 1
                                            </div>
                                            <div class="firstParaParent">
                                                <p className='In-the-feed-discover-the-best'> In the feed, discover the best</p>
                                                <p className='curated-treats-local-eats-and'>curated treats, local eats, and</p>
                                                <p className='what-and-where-your-friends-and'> what and where your friends and</p>
                                                <p className='co-workers-are-eating'> co-workers are eating.</p>

                                            </div>
                                        </div>

                                    </div>
                                    <div className='UpArrowImgdiv'>
                                        <div className='orderPageUpArrow'>
                                            <img src={require('../../assets/images/png/orderPageUpArrow.png')} alt='' className='orderPageUpArrow' />

                                        </div>
                                    </div>
                                    <div class="secondStepMobileContent">
                                        <div className='ordersecondMobileImg'>
                                            <img src={require('../../assets/images/png/mob copy.png')} alt='' className='middleMobileImg' />

                                        </div>
                                        <div className='secondStepAndPara'>

                                            <div class="Step-2">
                                                Step 2
                                            </div>
                                            <div class="secondParaParent">

                                                <p className='Order-ahead-pick-it-up-and-jump'>Order ahead, pick it up and jump</p>
                                                <p className='the-line-Or-have-it-delivered-or'>  the line. (Or have it delivered or </p>
                                                <p className='shipped-to-you'>shipped to you.)</p>

                                            </div>
                                        </div>


                                    </div>

                                    <div className='BottomArrowImgdiv'>
                                        <div className='orderPageUpArrow'>
                                            <img src={require('../../assets/images/png/orderPageBottomArrow.png')} alt='' className='orderPageBottomArrow' />

                                        </div>
                                    </div>
                                    <div class="thirdStepMobileContent">
                                        <div className='orderThirdMobileImg'>
                                            <img src={require('../../assets/images/png/mob.png')} alt='' className='thirdMobileImg' />

                                        </div>
                                        <div className='thirdStepAndPara'>

                                            <div class="Step-3">
                                                Step 3
                                            </div>
                                            <div class="ThirdParaParent">

                                                <p className='Collect-your-Reward-and'> Collect your Reward</p>
                                                <p className='send-your-Gift-Star-to-a'> and send your Gift Star to a</p>
                                                <p className='friend'> friend.</p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="Path-35612">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='Group 23564'>
                                    <img src={require('../../assets/images/png/Group 23564.png')} alt='' />

                                </div>
                                <div class="Rectangle-19564">
                                    <p class="Honesty-and-Transparency">
                                        Honesty and Transparency
                                    </p>
                                    <img src={require('../../assets/images/png/NoPath.png')} alt=''
                                        class="NoPath" />
                                    <div className='Unlike-many-third-party-food-aggregator-apps-no-hidden-fees-and-no-inflated-menus-prices'>
                                        <p>
                                            Unlike many third party food aggregator apps, no hidden fees and no inflated menus prices.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="col">
                                <div className='Group 23565'>
                                    <img src={require('../../assets/images/png/Group 23565.png')} alt='' />

                                </div>
                                <div class="Rectangle-19564">
                                    <p class="Support-Local-Restaurants">
                                        Support Local Restaurants
                                    </p>

                                    <img src={require('../../assets/images/png/gettyimages-1225861959-612x612.png')} alt=''
                                        class="gettyimages-1225861959-612x612" />

                                    <div class="No-unfair-commissions-neither-to-you-nor-the-restaurant">
                                        <p> No unfair commissions (neither to you nor the restaurant).</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div className='Group 23566'>
                                    <img src={require('../../assets/images/png/Group 23566.png')} alt='' />

                                </div>
                                <div class="Rectangle-19566">
                                    <p class="Convenience">
                                        Convenience
                                    </p>
                                    <div className='Mask Group 57'>
                                        <img src={require('../../assets/images/png/Mask Group 57.png')} alt='' className="Mask-Group-57" />

                                    </div>
                                    <div class="But-not-at-a-cost--neither-to-your-wallet-providers-nor-to-health-or-quality">
                                        <p>But not at a cost- neither to your wallet, providers, nor to health or quality.</p>
                                    </div>
                                </div>
                            </div>


                            <div class="Rectangle-19569">
                                <span class="Magnanimous-and-Ethical-Pickup">
                                    Magnanimous and Ethical Pickup
                                </span>
                                <img src={require('../../assets/images/png/gift-box-4973842-4251252-PhotoRoom.png')} alt=''
                                    class="gift-box-4973842-4251252-PhotoRoom" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Designed to Give, Everybody Gets */}


                <div class="Web--Order">

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h2 class="Designed-to-Give-Everybody-Gets">
                                    Designed to Give, Everybody Gets
                                </h2>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <img src={require('../../assets/images/png/Group 23378.png')} alt=''
                                    class="Group 23378" />
                            </div>
                        </div>
                        <div class="row">
                            <div className='orderPageBlueDiv'>
                                <div class="col">
                                    <div class="orderPageBlueDivparent1">
                                        <div className='You-ordering-food-is-not-an-isolated-consumer-experience-but-an-action'>
                                        <p > You ordering food is not an isolated consumer experience but an action</p>
                                        </div>
                                        <div  className='that-shines-your-light-outwards-in-multiple-directions'>
                                        <p> that shines your light outwards in multiple directions:</p>
                                        </div>
                                      
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="orderPageBlueDivparent2">
                                       
                                            <div className='from-other-bellies-you-fill-to-how-you-express-and-share-your-food-experience'>
                                                <p>from other bellies you fill, to how you express and share your food experience,</p>
                                            </div>
                                            <div className='to-the-local-businesses-and-farmers-you-support-and-to-what-you-chose-to-put-into-your-body'>
                                                <p>to the local businesses and farmers you support, and to what you chose to put into your body.</p>
                                            </div>

                                    </div>
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
        ActionRouteNavigate,
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(order);
