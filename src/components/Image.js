import React, { Component } from 'react';

export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {is_loaded: false};
    }

    render() {
        return (
            <img {...this.props}
                alt={this.props.alt} // redundant but need to specify this so react doesnt whine
                style={this.state.is_loaded ? {opacity: 1} : {opacity: 0}}
                onLoad={() => this.setState({is_loaded: true})} />
        );
    }
}
