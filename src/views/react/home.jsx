const React = require('react');
const ReactDOM = require('react-dom');


// write code here and click the execute button
class Button extends React.Component{
    constructor() {
        super();
        this.state = {counter: 0};
        this.handleClick = ()=> {
            this.setState((prevState)=>({
                counter: prevState.counter + 1
            }));
        };
    }


    render(){


        return <button onClick={this.handleClick}>
            {this.state.counter}
        </button>

    }

}



ReactDOM.render(<Button/>,document.getElementById("app"));