import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './gift.less'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class gift extends Component {

    componentDidMount() {
        scroll.scrollTo(this.props.navigations.height);
    }
    render() {
        const { navigations } = this.props;
        return (
            <div className='GiftPage'>
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
                <div className='PinkColorScreen'>

                    <div className="container">
                        <div class="row">
                            <div class="col">
                                <div class="Easy-Gifting">
                                    <h1>Easy Gifting</h1>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <h1 className='h1giftPageImage'>
                                    <img src={require('../../assets/images/png/giftPageImageWithClould.png')} alt=''
                                        className='giftPageImageWithClould' />
                                </h1>

                            </div>
                        </div>
                        <div className='FoodIsaGiftContentD'>

                            <div class="row">
                                <div class="col">
                                    <h1 class="Food-Is-a-Gift">
                                        <p> Food Is a Gift</p>
                                    </h1>
                                    <h1 className='FoodIsaGiftContentPara'>
                                        <p> Connecting you with food you love and the opportunity to share</p>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="Easy-Gifting-SecondContent">
                                    <p>Easy Gifting</p>
                                </div>
                                <div class="Send-and-receive-treats">
                                    <p>Send and receive treats.</p>
                                </div>
                                <div className=' easyGiftingParasDiv'>

                                    <div className='easyGiftingContenentParent1'>
                                        <div className='easyGiftingArrowImage1'>
                                            <img src={require('../../assets/images/png/rightArrow1.png')} alt='' className='' />
                                        </div>
                                        <div className='easyGiftingRightArrowContent1'>
                                            <p>This is where the magic is made.</p>
                                        </div>

                                    </div>

                                    <div className='easyGiftingContenentParent2'>
                                        <div className='easyGiftingArrowImage2'>
                                            <img src={require('../../assets/images/png/rightArrow2.png')} alt='' className='' />
                                        </div>
                                        <div className='easyGiftingRightArrowContent2'>
                                            <p>With just a few clicks, quickly send a croissant to your crush, team or mom to let them know you’re thinking of them.</p>
                                        </div>

                                    </div>

                                    <div className='easyGiftingContenentParent3'>
                                        <div className='easyGiftingArrowImage3'>
                                            <img src={require('../../assets/images/png/rightArrow3.png')} alt='' className='easyGiftingArrowImage' />
                                        </div>
                                        <div className='easyGiftingRightArrowContent3'>
                                            <p>It’ll be ready for them when they go to pick it up.</p>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div class="col-6">
                                <img src={require('../../assets/images/png/Group 23550.png')} alt=''
                                    className='SecondEasyGiftingImg' />
                            </div>

                        </div>
                        <div className='LoveLetterDiv'>
                            <div class="row">
                                <div class="col-6">
                                    <img src={require('../../assets/images/png/loveLetter.png')} alt=''
                                        className='loveLetter' />
                                </div>
                                <div class="col-6">
                                    <div className='noAdressRequiredParentForAll'>
                                        <div className='noAdressRequired'>
                                            <div className='noAdressRequiredImageDiv'>
                                                <img src={require('../../assets/images/png/checkBox.png')} alt=''
                                                    className='checkBox' />
                                            </div>
                                            <div className='noAdressRequiredContent3'>
                                                <p> No address required!</p>
                                            </div>
                                        </div>

                                        <div className='noaddressContentMainParent'>
                                            <div className='loveLetterDivContentParent1'>
                                                <div className='loveLetterRightArrowImage1'>
                                                    <img src={require('../../assets/images/png/rightArrow1.png')} alt='' />
                                                </div>
                                                <div className='loveLetterDivRightArrowContent1'>
                                                    <p> You don’t have to know the address of your giftee.</p>
                                                </div>

                                            </div>
                                            <div className='loveLetterDivContentParent2'>
                                                <div className='loveLetterRightArrowImage2'>
                                                    <img src={require('../../assets/images/png/rightArrow2.png')} alt='' />
                                                </div>
                                                <div className='loveLetterDivRightArrowContent2'>
                                                    <p> If they’re already using Munch, just click on their name, chose your gift, and send! If they don’t yet have Munch, just enter their phone number or email.</p>
                                                </div>

                                            </div>
                                            <div className='loveLetterDivContentParent3'>
                                                <div className='loveLetterRightArrowImage3'>
                                                    <img src={require('../../assets/images/png/rightArrow3.png')} alt='' />
                                                </div>
                                                <div className='loveLetterDivRightArrowContent3'>
                                                    <p> Their will receive a message with your card and gift will be waiting for them, whenever they need a pick-me-up.</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="dontKnowWhatFoodContentDiv">
                            <div class="row">
                                <div class="col">

                                    <div className='dontKnowWhatFoodContent'>
                                        <div className='dontKnowWhatFoodContentImageDiv'>
                                            <img src={require('../../assets/images/png/checkBox1.png')} alt='' className='checkBox1Gift' />
                                        </div>
                                        <div className='dontKnowWhatFoodContentParaDiv'>
                                            <p> Don’t know what foods they like?</p>
                                        </div>

                                    </div>

                                    <div class="No-worries-when-you-chose-a-friend-to-send-gifts-to-you-will-see-what-foods-they-have-saved-as-their-favourites">
                                        <p>  No worries, when you chose a friend to send gifts to, you will see what foods they have saved as their favourites.</p>
                                    </div>

                                </div>
                                <div class="col">
                                    <div className='dontKnowWhatFoodImg'>
                                        <img src={require('../../assets/images/png/Group 23531.png')} alt='' className='dontKnowWhatFoodImg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <div class="GiftBlueScreen">

                        <div class="row">
                            <div class="col">
                                <div className='BlueScreenContentDiv'>
                                    <div class="GiftBrownScren">
                                        <div className='quoteLeft'><img src={require('../../assets/images/png/quoteLeft.png')} alt='' /></div>
                                        <p> We are showered every day with gifts, but they are not meant for us to keep.
                                            Their life is in their movement, the inhale and the exhale of our shared breath.
                                            Our work and our joy is to pass along the gift and to trust that what we put out into the universe will always come back.</p>
                                        <span className='quoteRight'><img src={require('../../assets/images/png/quoteRight.png')} alt='' /></span>

                                        <div class="Braiding-Sweetgrass-Robin-Wall-Kimmerer">
                                            -Braiding Sweetgrass, Robin Wall Kimmerer.
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

export default connect(mapStateToProps, mapDispatchToProps)(gift);
