import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import 'static/css/app.css';
import 'static/css/shortcuts.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ContactView from 'views/ContactView';
import FaqView from 'views/FaqView';
import HomeView from 'views/HomeView';
import NotFound from 'views/NotFound';
import ServicesView from 'views/ServicesView';
import TermsView from 'views/TermsView';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter basename='/'>
                <div className='app'>
                    <Header />
                    <div className='contentContainer'>
                        <Switch>
                            <Route exact path='/' component={HomeView} />
                            <Route exact path='/contact' component={ContactView} />
                            <Route exact path='/services' component={ServicesView} />
                            <Route exact path='/faq' component={FaqView} />
                            <Route exact path='/terms' component={TermsView} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
