import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ViewPropTypes,I18nManager } from 'react-native'

// compatability for react-native versions < 0.44
const ViewPropTypesStyle = ViewPropTypes
  ? ViewPropTypes.style
  : View.propTypes.style
let direction = I18nManager.isRTL? 'right' : 'left';
const styles = StyleSheet.create({
  outerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftWrap: {
    position: 'absolute',
    top: 0,
    [`${direction}`]: 0,
  },
  halfCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
})

function percentToDegrees(percent) {
  return percent * 3.6
}

export default class PercentageCircle extends Component {
  static propTypes = {
    color: PropTypes.string,
    shadowColor: PropTypes.string,
    bgColor: PropTypes.string,
    radius: PropTypes.number.isRequired,
    borderWidth: PropTypes.number,
    percent: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
    upendProgress: PropTypes.bool,
    children: PropTypes.node,
    containerStyle: ViewPropTypesStyle,
    outerCircleStyle: ViewPropTypesStyle
  };

  static defaultProps = {
    color: '#f00',
    shadowColor: '#999',
    bgColor: '#e9e9ef',
    borderWidth: 2,
    children: null,
    containerStyle: null,
    upendProgress: false
  };

  computeDerivedState() {
    const { props } = this;
    const percent = Math.max(Math.min(100, props.percent), 0)
    const needHalfCircle2 = percent > 50
    let halfCircle1Degree
    let halfCircle2Degree
    // degrees indicate the 'end' of the half circle, i.e. they span (degree - 180, degree)
    if (needHalfCircle2) {
      halfCircle1Degree = 180
      halfCircle2Degree = percentToDegrees(percent)
    } else {
      halfCircle1Degree = percentToDegrees(percent)
      halfCircle2Degree = 0
    }

    return {
      halfCircle1Degree,
      halfCircle2Degree,
      halfCircle2Styles: {
        // when the second half circle is not needed, we need it to cover
        // the negative degrees of the first circle
        backgroundColor: needHalfCircle2
          ? props.color
          : props.shadowColor,
      },
    }
  }

  renderHalfCircle(rotateDegrees, halfCircleStyles) {
    if (this.props.upendProgress) {
      rotateDegrees = -rotateDegrees + 180;
    }

    const { radius, color } = this.props
    const key = I18nManager.isRTL ? 'right' : 'left';
    return (
      <View
        style={[
          styles.leftWrap,
          {
            width: radius,
            height: radius * 2,
          },
        ]}
      >
        <View
          style={[
            styles.halfCircle,
            {
              width: radius,
              height: radius * 2,
              borderRadius: radius,
              overflow: 'hidden',
              transform: [
                { translateX: radius / 2 },
                { rotate: `${rotateDegrees}deg` },
                { translateX: -radius / 2 },
              ],
              backgroundColor: color,
              ...halfCircleStyles,
            },
          ]}
        />
      </View>
    )
  }

  renderInnerCircle() {
    const radiusMinusBorder = this.props.radius - this.props.borderWidth
    return (
      <View
        style={[
          styles.innerCircle,
          {
            width: radiusMinusBorder * 2,
            height: radiusMinusBorder * 2,
            borderRadius: radiusMinusBorder,
            backgroundColor: this.props.bgColor,
            ...this.props.containerStyle,
          },
        ]}
      >
        {this.props.children}
      </View>
    )
  }

  render() {
    const {
      halfCircle1Degree,
      halfCircle2Degree,
      halfCircle2Styles,
    } = this.computeDerivedState()

    return (
      <View
        style={[
          styles.outerCircle,
          {
            width: this.props.radius * 2,
            height: this.props.radius * 2,
            borderRadius: this.props.radius,
            backgroundColor: this.props.shadowColor,
            ...this.props.outerCircleStyle,
          },
        ]}
      >
        {this.renderHalfCircle(halfCircle1Degree)}
        {this.renderHalfCircle(halfCircle2Degree, halfCircle2Styles)}
        {this.renderInnerCircle()}
      </View>
    )
  }
}
