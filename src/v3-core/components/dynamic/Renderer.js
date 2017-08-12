import React from 'react';
import PropTypes from 'prop-types';
import View from '../../../v3-core/components/ui/View';

import Section from './Section';


class Renderer extends React.Component {
    render() {
        const sections = this.props.sections
            .map((section, index) => {
                return <Section key={index}
                                section={section}/>
            });
        return (
            <View style={{flex: 1}}>
                {sections}
            </View>
        );
    }
}

Renderer.defaultProps = {
    sections: []
};

Renderer.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.string.isRequired
        })).isRequired
    })).isRequired
};

export default Renderer;