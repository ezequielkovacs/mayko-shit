import React from 'react';
import Mayko from '../components/Mayko';

class Dashboard extends React.Component {
  render() {
    document.title = "Mayko Rancoroso";
    return (
      <>
      <Mayko />
      </>
    )
  }
}

export default Dashboard
