import React, { Component } from 'react'

export default class ClassComponents2 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {date: new Date()};
        // this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        this.timerID = setInterval(()=> {this.tick(), 10000})
    }

    componentDidUpdate() {
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({date: new Date()})
    }

    handleClick = () => {
        console.log('handle')
    }

    render() : Element {
    return (
      <>  <div onClick={this.handleClick}>TIME: {this.state.date.toLocaleDateString()}</div></>
    )
  }
}
