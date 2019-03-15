import React from 'react';
import { connect } from 'react-redux';
import "./ActivePerson.css"

function ActivePerson({ people, activePerson }) {
    if (Number.isInteger(activePerson)) {
        const { name, rating, img, Description, Likes, Dislikes } = people[activePerson],
            disL = Dislikes.map(el => (<tr key={el}>
                <td>{el}</td>
            </tr>)),
            likes = Dislikes.map(el => (<tr key={el}>
                <td>{el}</td>
            </tr>));
        return (
            <div>
                <p>{name}</p>
                <p>{rating}</p>
                <img src={img} alt="Profile" />
                <p>{Description}</p>
                <table>
                    <thead>
                        <tr><th>Likes</th></tr>
                    </thead>
                    <tbody>
                        {likes}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr><th>Dislikes</th></tr>
                    </thead>
                    <tbody>
                        {disL}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <p>Please select a user to view</p>
    }
}

const mapStateToProps = state => state.peopleData,
    mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(ActivePerson)