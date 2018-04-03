var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    flex: '1 1 auto',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },
  padding: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  dense: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  subheader: {
    paddingTop: 0
  }
});

class List extends React.Component {
  getChildContext() {
    return {
      dense: this.props.dense
    };
  }

  render() {
    const _props = this.props,
          {
      children,
      classes,
      className: classNameProp,
      component: Component,
      dense,
      disablePadding,
      subheader
    } = _props,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'component', 'dense', 'disablePadding', 'subheader']);
    const className = classNames(classes.root, {
      [classes.dense]: dense && !disablePadding,
      [classes.padding]: !disablePadding,
      [classes.subheader]: subheader
    }, classNameProp);

    return React.createElement(
      Component,
      _extends({ className: className }, other),
      subheader,
      children
    );
  }
}

List.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items. The property is available to descendant components as the
   * `dense` context.
   */
  dense: PropTypes.bool,
  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: PropTypes.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: PropTypes.node
};

List.defaultProps = {
  component: 'ul',
  dense: false,
  disablePadding: false
};

List.childContextTypes = {
  dense: PropTypes.bool
};

export default withStyles(styles, { name: 'MuiList' })(List);