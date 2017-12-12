import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Histor from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {

    render() {
        return (
            <div>
                <div className='subnav'>
                    <Link className="subnav_links" to="/about"><h3>About</h3></Link>
                    <Link className="subnav_links" to="/about/history"><h3>History</h3></Link>
                    <Link className="subnav_links" to="/about/contact"><h3>Contact</h3></Link>
                </div>
                <div className='box'>
                    <Switch>
                        <Route path="/about/history" component={ Histor }/>
                        <Route path="/about/contact" component={ Contact }/>
                        <Route path="/about" render={ () => (
                            <div>
                                <h4>About</h4>
                                <p>No sure</p>
                            </div>
                        ) } />
                    </Switch>
                </div>
            </div>
        )
    }
    
}