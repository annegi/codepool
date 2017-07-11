const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');


class Stars extends React.Component{
    constructor()
    {
        super();
    }

    render()
    {
        let stars = [];

        for (let i = 0; i < this.props.starCount; i++) {
            stars.push(<span key={i} className="star"/>)
        }

        return <div style={{display:"inline",width:'200px'}}>{stars}</div>;
    }


}


Stars.propTypes = {
    starCount : PropTypes.number
};


let Button = (props)=> {


    return <button className="btn checkAnsButtn">=</button>;

};



//Answer component

//Numbers


//Game

class Game extends React.Component {
    constructor() {
        super();
    }

    state = {starCount: 5};


    render() {

        return (<div>
                <Stars starCount={this.state.starCount}/>
                <Button />
            </div>

        );
    }


}

ReactDOM.render(<Game />, document.getElementById("app"));

