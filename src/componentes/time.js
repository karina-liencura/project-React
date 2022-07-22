import { Component } from 'react';

class Time extends Component {
    constructor(props){
        super(props);
        this.state = {fecha: new Date().toLocaleTimeString()}
    }

    timer() {
        this.setState({fecha: new Date().toLocaleTimeString()});
    }

    componentDidMount() {
        this.idIntervalo = setInterval(this.timer.bind(this), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.idIntervalo);
    }

    render() {
        return(
            <div>
                <h2>La hora en santiago, de Chile.</h2>
                <h1> {this.state.fecha}</h1>
            </div>
        );
    }
}

export default Time;

