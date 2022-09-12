import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionRouteNavigate } from "../../store/actions/actions-route";
import './ngo.less'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { URL_MAP } from '../../constants/urls';
import { buildRoute } from '../../configs/routes';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class ngo extends Component {
  componentDidMount() {
    scroll.scrollTo(this.props.navigations.height);
  }

  componentDidUpdate() {
    debugger;
    window.location.reload(false);
  }
  render() {

    const { navigations } = this.props;
    return (
      <div className='NGOPage'>
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
        <div id='donationScroll' className='NGOsBlueScreen'>
          <div class="Easy-and-Meaningful-Donation">
            <h2 >
              Easy and Meaningful
            </h2>
            <h1 >
              Donation
            </h1>
          </div>

          <div class="container">
            <div class="row">
              <div class="col">
                <h1 className='DonationPageMainImgDiv'>
                  <img src={require('../../assets/images/png/donationImageWithClould.png')} alt='' className='DonationPageMainImg' />
                </h1>
              </div>

            </div>
          </div>
          <div className='ThreecolDiv'>
            <div class="container">
              <div className='DonationThreeImgParent'>
                <div class="row">
                  <div class="col-4">
                    <div class="earthLoveParentDiv0">
                      <img src={require('../../assets/images/png/love-earth-5332383-4457612-PhotoRoom.png')} alt='' />
                      <div className='earthLoveParentDivPara0'>
                        <p>Choose vetted, charitable </p>
                        <p>causes inspiring and meaningful</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="earthLoveParentDiv1">
                      <img src={require('../../assets/images/png/Group 23543.png')} alt='' />
                      <div className='earthLoveParentDivPara1'>
                        <p> See exactly how your contribution </p>
                        <p>is being used.</p>
                      </div>
                    </div>

                  </div>
                  <div class="col-4">
                    <div class="earthLoveParentDiv2">
                      <img src={require('../../assets/images/png/area-chart-3856456-3212621-PhotoRoom.png')} alt='' />

                      <p>  Watch as your impact materialises </p>
                      <p>in ongoing updates from the NGO.</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(ngo);