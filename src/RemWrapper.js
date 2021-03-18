import React, { Component } from 'react'
  

export default class RemWrapper extends Component {
    // PropTypes is not available in this environment, but here they are.
    // static propTypes = {
    //   style: PropTypes.shape({
    //     transform: PropTypes.string.isRequired
    //   }),
    //   children: PropTypes.node.isRequired,
    //   remBaseline: PropTypes.number,
    // }
  
    translateTransformToRem(transform, remBaseline = 16) {
      const convertedValues = transform.replace('translate(', '').replace(')', '')
        .split(',')
        .map(px => px.replace('px', ''))
        .map(px => parseInt(px, 10) / remBaseline)
        .map(x => `${x}rem`)
      const [x, y] = convertedValues
  
      return `translate(${x}, ${y})`
    }
  
    render() {
      const { children, remBaseline = 16, style } = this.props
      const child = React.Children.only(children)
  
      const editedStyle = {
        ...child.props.style,
        ...style,
        transform: this.translateTransformToRem(style.transform, remBaseline),
      }
  
      return React.cloneElement(child, {
         ...child.props,
         ...this.props,
         style: editedStyle
      })
    }
  }
  
