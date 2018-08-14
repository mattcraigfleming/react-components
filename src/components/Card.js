import React from "react";

const styles = {
    transition: "all 1s ease-out"
}

export default class Card extends React.Component {
    constructor(){
        super();
        this.state = {
            opacity: 1,
            scale: 1
        }
    }

    onHide() {
        this.setState({
            opacity: 0
        })
    }

    onScale() {
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.3
        })
    }

    render() {
        return (
            <div style={{}}>
                        <div style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')', width: 600+'px', height: 150+'px', backgroundColor: 'black', color: 'white'}}>
                <h1>Card Animations</h1>
                <h3>Hide/Scale</h3>

                <div>
                    <a onClick={this.onHide.bind(this)} style={{cursor: 'pointer'}}>HIDE</a>
                    <br></br>
                    <a onClick={this.onScale.bind(this)} style={{cursor: 'pointer'}}>SHOW</a>
                </div>
            </div>

            </div>

        )
    }
}