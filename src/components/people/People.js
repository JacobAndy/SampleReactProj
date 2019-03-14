import React from 'react';
import { connect } from 'react-redux';
import "./People.css";

class People extends React.Component {
    state = {}
    render() {
        console.log(this.props)
        return (
            <div>
                <p>hello world</p>
            </div>
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(People);