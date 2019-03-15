import React from 'react';
import { connect } from 'react-redux';

function Home(props) {
    return <h2>Home</h2>
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(Home)