import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import { URL_MAP } from '../../constants/urls';
import { buildRoute } from '../../configs/routes';
import './movement.less'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class movement extends Component {
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
            <div className='TheMovementPage'>
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
                <div id='movementScroll' className='BrownColorScreen'>

                    <div className="container">

                        <div className="row">
                            <div className="col">
                                <div className="Mission-Statement"> Mission Statement</div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div className="row">
                            <div className="col">
                                <div className='MissionStatementIMG'>
                                    <img src={require('../../assets/images/png/Group 23532.png')} alt='' />

                                </div>
                                <div className='movementClouldImg'>
                                    <img src={require('../../assets/images/png/movementClould.png')} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div className="row">
                            <div className="col">
                                <div className='GoalsContentDiv'>
                                    <span class="Goals">
                                        GOALS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='GoalsTheeColum'>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="MovementgFirstCol">
                                        <span class="Place-giving-and-getting-where-they-should-be-side-by-side-In-other-words-facilitate-and-expand-giving-culture-within-the-existing-framework-of-consumerism">
                                            <p> Place giving and getting where they should be, side by side. In other words, facilitate and expand giving culture within the existing framework of consumerism.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="MovementgSecondCol">
                                        <span class="Bring-the-social-into-food-fostering-friendships-and-connection">
                                            <p>  Bring the social into food, fostering friendships and connection.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="MovementgThirdCol">
                                        <span class="Resolve-hunger-food-insecurity-and-sustainability-issues">
                                            <p>Resolve hunger, food insecurity and sustainability issues.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">

                                <p className='Food-is-a-gift-it-is-social-it-is-meant-to-be-shared'>Food is a gift; it is social; it is meant to be shared.</p>
                                <p className='Our-aim-is-to-make-it-fun-and-easy-to-inject-social-aspects'>Our aim is to make it fun and easy to inject social aspects (and ultimately the sacred)</p>
                                <p className='into-current-food-views-and-practices-starting-with-online-food-ordering'> into current food views and practices, starting with online food ordering.</p>

                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <span class="Munch-Magic-uses-the-cold-connectivity-of-technology-to-foster-warmth-and-human-connection-growing-roots-for-the-current-lifeless-process-of-ordering-and-grabbing-a-bite-to-eat">
                                    <p>  Munch Magic uses the cold connectivity of technology to foster warmth and human connection, growing roots for the current lifeless process of ordering and grabbing a bite to eat.</p>
                                </span>
                            </div>
                            <div class="col">
                                <div className='TreeIMG'>
                                    <img src={require('../../assets/images/png/Group 23380.png')} alt='' />
                                </div>
                            </div>
                            <div class="col">
                                <div class="TreeRightPara">
                                    <p>  Roots between people in the form of gifts, of sharing what and where we eat, of nourishing those who do not have enough, of supporting food sustainability and security solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <div className='EarthTheirGift'>
                                    <img src={require('../../assets/images/png/Group 23533.png')} alt='' />
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="Food-is-the-universal-language-of-plants-of-the-earth-their-gift-By-fostering-an-environment-of-gift-culture-we-spread-that-gift-and-the-opportunity-to-appreciate-it-and-see-it-for-what-it-really-is-the-earths-offering-and-love-for-us">
                                    <p> Food is the universal language of plants, of the earth, their gift. By fostering an environment of gift culture: we spread that gift, and the opportunity to appreciate it and see it for what it really is: the earth's offering and love for us.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="belowEarthParaDiv">
                                    <p>  The point is to reconnect us to the generous nature of the earth (and life), to deepen the lens of life as a gift, to create a space where people have the chance to easily balance giving and getting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <div className='aboutMobilesContent'>
                                    <p>  For those who already understand that receiving holds the responsibility of giving, Munch provides the convenient platform to execute both and maintain the balance between them.</p>
                                </div>
                            </div>
                            <div class="col-2">
                                <div className='MobileOne'>
                                    <img src={require('../../assets/images/png/MobileOne.png')} alt='' className='movementpageFirstMobileImg' />
                                </div>
                            </div>
                            <div class="col-2">
                                <div className='MobileTwo'>
                                    <img src={require('../../assets/images/png/MobileTwo.png')} alt='' />
                                </div>
                            </div>
                            <div class="col-2">
                                <div className='movementpageThirdMobile'>
                                    <img src={require('../../assets/images/png/MobileThree.png')} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <div className='StarImg'>
                                    <img src={require('../../assets/images/png/Group 23381.png')} alt='' />
                                </div>

                            </div>
                            <div class="col-8">                        
                                <div className='starImgRightContent'>
                                    <p className='For-those-who-dont-know-that-giving-and-getting-go-together'>For those who don't know that giving and getting go together,</p>
                                    <p className='Munch-places-the-two-actions-in-the-same-space-intrinsically'> Munch places the two actions in the same space, intrinsically</p>
                                    <p className='linking-the-two-conceptsThrough-multiple-channels-we-aim-to'>linking the two concepts.Through multiple channels we aim to</p>
                                    <p className='spread-delight-compassion-gratefulness-friendship-and'>spread  delight, compassion, gratefulness, friendship and</p>
                                    <p className='generosity'>generosity.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(movement);
