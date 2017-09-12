import React from 'react';

class Content extends React.Component {
  render() {
    const location = this.props.location;
    const params = this.props.match.params;
    return (
      <div>
        {location.search !== "" ? <p><strong>Value :</strong> {JSON.stringify(location.search, null, 2)}</p>:null}
      </div>
    );
  }
}

export default Content;
