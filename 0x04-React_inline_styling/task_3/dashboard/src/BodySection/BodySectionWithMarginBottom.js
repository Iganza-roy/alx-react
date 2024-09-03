import React, { Component } from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.BodySection)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  children: <React.Fragment />,
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const styles = StyleSheet.create({
  BodySection: {
    marginBottom: '40px',
  },
});

export default BodySectionWithMarginBottom;
