import React, { Component } from 'react';

class CustomInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }


  handleChange({target:{name,value}}){
      this.props.callback(name,value)
  }

    render() {
        const { type,value,name} = this.props
        return (
            <input 
            type={type}
            value={value}
            name = {name}
            onChange={this.handleChange}
            />
        );
    }
}


export default CustomInput;