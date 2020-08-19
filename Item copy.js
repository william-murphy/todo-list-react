import React from 'react';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      checked: false
    }
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleCheck() {
    this.setState(prevState => {
      return {
        visible: prevState.visible,
        checked: !prevState.checked
      };
    });
  }

  handleClick() {
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
        checked: prevState.checked
      };
    });
  }

  render() {
    return(
      <li style={{display: this.state.visible ? 'line-item' : 'none'}}>
        <input
          type="checkbox"
          onChange={this.handleCheck}
          checked={this.state.checked}
        />
        <label style={{textDecoration: this.state.checked ? 'line-through' : 'none'}}>{this.props.value}</label>
        <svg onClick={this.handleClick} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 10l4 4m0 -4l-4 4" />
        </svg>
      </li>
    );
  }
}

export default Item;
