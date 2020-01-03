import React from 'react'
import './Home.css'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 'changeColor'
        }
    }
    
    render() {
        return (
            <div id="wrapper">
                <div id="home-template">
                    <section id="btns">
                        <div>
                            <button onClick={() => this.setState({
                                id: 'newColor'
                            })}>g</button>
                            <button>x</button>
                            <button>c</button>
                        </div>
                    </section>

                    <section id="graphs">
                        <section id="one">
                            <div className="inner-one">
                                <h1>Limits</h1>
                                <div id={this.state.id}> hello</div>
                                <div id="one-second-box"> hi</div>
                            </div>
                            <div className="inner-one">
                                <h1>Pairs</h1>
                                <div id="one-two-first-box"></div>
                                <div id="one-two-second-box"></div>
                            </div>
                        </section>
                        <section id={this.state.id}>
                            <div></div>
                        </section>
                    </section>

                    <section id="assets">
                        <div>
                            <h2>Assets</h2>
                        </div>
                        <div>
                            <h2>My Cards</h2>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}