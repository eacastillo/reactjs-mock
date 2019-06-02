import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'

import Login from './components/Login'
import Worker from './components/Worker'
import Client from './components/Client'
import Scheduling from './components/Scheduling'
import Payment from './components/Payment'
import Accounting from './components/Accounting'

export default props => (
    <HashRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/worker' component={Worker}/>
                <Route exact path='/client' component={Client}/>
                <Route exact path='/scheduling' component={Scheduling}/>
                <Route exact path='/payment' component={Payment}/>
                <Route exact path='/accounting' component={Accounting}/>
                <Route exact path='/' component={Main}/>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/wizard' component={Wizard}/>
                <Route exact path='/cards' component={Cards}/>
            </Switch>
        </ScrollToTop>
    </HashRouter>
  )