const React = require('react');


// write code here and click the execute button
class Button extends React.Component{
    state ={counter:0};

    handleClick = ()=> {
        this.setState((prevState)=>({
            counter:prevState.counter+1
        }));

    };

    render(){
        return <button onClick={this.handleClick}>
            {this.state.counter}
        </button>

    }

}

ReactDOM.render(<Button/>,document.getElementById("app"));