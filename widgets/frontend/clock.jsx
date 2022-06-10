import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super()
        this.state = { time: new Date() }
        this.tick = this.tick.bind(this)
    }
    
    tick() { 
        this.setState( {time: new Date()} )
    }
    

    //--------------------why this.tick, not this.tick()? ---------
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }
    //--------------------what is this used for?-------------------
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }

    render() { 
        const {time} = this.state
        // console.log(time)
        return (
            <div>
                <h1>Clock</h1>
                    <div className="time-container">
                        <span>Time: </span>
                        <span>
                            {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
                        </span>
                    </div>
                    <div className="date-container">
                        <span>Date: {time.toDateString()}</span>
                    </div>
            </div>
        );
    }
}

export default Clock;