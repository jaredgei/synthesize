import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'static/css/Button.css';

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string,
        uri: PropTypes.string,
        is_inverted: PropTypes.bool,
        size: PropTypes.oneOf(['small', 'large']),
        onClick: PropTypes.func
    };

    static defaultProps = {
        size: 'large'
    };

    render() {
        if (this.props.onClick) {
            return (
                <div onClick={this.props.onClick} className={'buttonContainer' + (this.props.is_inverted ? ' inverted' : '') + (this.props.size === 'small' ? ' small' : '')}>
                    <div className='button'>{this.props.text}</div>
                    <div className='button show'>{this.props.text}</div>
                </div>
            );
        }

        return (
            <Link to={this.props.uri} className={'buttonContainer' + (this.props.is_inverted ? ' inverted' : '') + (this.props.size === 'small' ? ' small' : '')}>
                <div className='button'>{this.props.text}</div>
                <div className='button show'>{this.props.text}</div>
            </Link>
        );
    }
}
