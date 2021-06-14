import React, { Component } from 'react';
import 'static/css/NotFound.css';
import Button from 'components/Button';

export default class NotFound extends Component {
    render() {
        return (
            <div className='notFound'>
                <div className='content'>
                    <div className='title'>Uh oh!</div>
                    <div className='subtitle'>We couldn't find that page</div>
                    <Button text='Go Home' uri='/' is_inverted={true} />
                </div>
            </div>
        );
    }
}
