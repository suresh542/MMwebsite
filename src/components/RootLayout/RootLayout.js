import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import { ActionRouteNavigate } from '../../store/actions/actions-route'
import { ActionLogout } from "../../store/actions/actions-user";

import './RootLayout.less'

class RootLayout extends Component {


    routeNavigate = (route) => {
        this.props.ActionRouteNavigate(route);
    }

    handleLogout = () => {
        debugger;
        this.props.ActionLogout();
    }

    render() {
   
        return (
            <div className="rootLayout">
                <Header
                    routeNavigate={this.routeNavigate}
                    handleLogout={this.handleLogout}
                    session={this.props.session}                   
                    {...this.props}
                />
                <div className="rootLayout-content">
                    {
                        this.props.sideBar != false &&
                        <SideBar
                            routeNavigate={this.routeNavigate}
                            session={this.props.session}
                            {...this.props}
                        />
                    }
                    <div className="rootLayout-content-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ rLoading, rSession, rUser }) {
    return {
        isLoading: rLoading.login  || false,
      
        session: rSession || undefined
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionRouteNavigate,
        ActionLogout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RootLayout);