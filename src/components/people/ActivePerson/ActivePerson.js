import React from 'react';
import { connect } from 'react-redux';
import "./ActivePerson.css"

function returnRatings(positiveStars) {
    let positive = [],
        negative = [];
    for (let i = 0; i < 5; i++) {
        if (i >= positiveStars) {
            negative.push(<i key={i} className="far fa-heart"></i>)
        } else {
            positive.push(<i key={i} className="fas fa-heart"></i>)
        }
    }
    return { pos: positive, neg: negative }
}

function ActivePerson({ people, activePerson }) {
    if (Number.isInteger(activePerson)) {
        const { name, rating, img, Description, Likes, Dislikes } = people[activePerson],
            disL = Dislikes.map(el => (<tr key={el}>
                <td>{el}</td>
            </tr>)),
            likes = Likes.map(el => (<tr key={el}>
                <td>{el}</td>
            </tr>)),
            ratings = returnRatings(rating);
        return (
            <div id="main-cntnt">
                <section id="about-them">
                    <div>
                        <img src={img} alt="Profile" />
                        <div>
                            <button onClick={() => {
                                window.prompt(`Dear ${name},`, "Your message here...")
                            }}>send message</button>
                            <div className="ratings">{ratings.pos}{ratings.neg}</div>
                        </div>
                    </div>
                    <p id="quoted"><span className="active-person-quoted"></span>{Description}</p>
                </section>
                <section className="likes-dislikes">
                    <table>
                        <thead>
                            <tr><th>Likes</th></tr>
                        </thead>
                        <tbody className="dis-likes">
                            {likes}
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr><th>Dislikes</th></tr>
                        </thead>
                        <tbody className="dis-likes">
                            {disL}
                        </tbody>
                    </table>
                </section>
            </div>
        )
    } else {
        return <h2 id="default-pick-user">Please select a user to view</h2>
    }
}

const mapStateToProps = state => state.peopleData,
    mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(ActivePerson)