import React from 'react';
import {  NavLink, Route, Link } from 'react-router-dom';

import { Content } from '../Components';

class QueryParams extends React.Component {
  constructor(){
    super();
    this.state = {a: "" };
    }

    setA(aa){
    const A1 = aa.target.value;
    this.setState({a: A1});
    }

  render() {
    const { match } = this.props;
    /*const { location, pattern, match, isExact } = this.props;*/
    return (
      <div>
        <div>
          <ul>
            <div> A : <input onChange={this.setA.bind(this)} /></div>
            <li><NavLink to={{pathname: match.url + "/submit", search: this.state.a }} className="active">Submit</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default QueryParams;
