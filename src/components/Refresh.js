import React from "react";


export default class Refresh extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    onRefresh() {
        window.location.reload();
    }

    render() {
        return (
            <div style={{marginTop: 100}}>
            <div>
                <div>
                    <a onClick={this.onRefresh.bind(this)} style={{cursor: 'pointer'}}>refresh</a>
                </div>
            </div>

            </div>

        )
    }
}