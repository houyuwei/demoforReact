import React, { Component } from 'react';
import { Menu, MenuItem } from "../../common/components/Menu/index"
import { MainWrapper, SideNav, RightSection } from './style'
import { AddNewAddress, AddMultipleAddress, OrderHistory, Download } from '../../pages/index'
import { Link, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <MainWrapper>
                <BrowserRouter basename="/">
                    <SideNav>
                        <Menu defaultIndex={'0'} onSelect={(index) => { console.log(index); }}>
                            <MenuItem index={'0'}>
                                <Link to="/addnewaddress"> Add New Address</Link>
                            </MenuItem>
                            <MenuItem index={'1'}>
                                <Link to="/addmultipleaddress">Add multiple Address</Link>
                            </MenuItem>
                            <MenuItem index={'2'}>
                                <Link to="/download">Download Address</Link>
                            </MenuItem>
                            <MenuItem index={'3'}>
                                <Link to="/orderhistory">Order History</Link>
                            </MenuItem>
                        </Menu>
                    </SideNav>
                    <RightSection>
                        <Switch>
                            <Route path="/addnewaddress" component={AddNewAddress} />
                            <Route path="/addmultipleaddress" component={AddMultipleAddress} />
                            <Route path="/download" component={Download} />
                            <Route path="/orderhistory" component={OrderHistory} />
                            <Redirect exact to="/addnewaddress" />
                        </Switch>
                    </RightSection>
                </BrowserRouter>
            </MainWrapper >
        );
    }
}

export default index;