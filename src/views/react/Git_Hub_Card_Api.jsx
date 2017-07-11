let React = require('react');
const ReactDOM = require('react-dom');




let Card = (props)=>{

    return (<div style={{margin:'1em'}}>
                <img width='75' src={props.avatar_url}></img>
                <div style={{display:'inline-block',verticalAlign:'top',marginLeft:'1em'}}>
                    <div style={{fontSize:'24px',fontWeight:'bold'}}>{props.name}</div>
                    <div>{props.company}</div>
                    <div style={{height:'30px',marginTop:'5px',fontSize:'10px'}}>{props.bio}</div>
                </div>
            </div>);

};


let CardList = (props) => {

    return (
        <div>
            {props.cards.map((card)=><Card key={card.id} {...card}/>)}
        </div>);

};


class Form extends React.Component{
    constructor(){
        super();
        this.state = {name:''};

    }

    handleSubmit = (event)=>{
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.name}`).then(resp=>{
            if(resp && resp.data && !resp.data.message){
                this.props.addNewCard(resp.data);
            }
        });
    };





    render(){

        return (<form style={{margin:'1em'}} onSubmit={this.handleSubmit}>
                <input style={{height:'20px',width:'200px'}} placeholder="Enter a git hub user name" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/>
                <button style={{height:'26px',display:'inline-block'}} type="submit">Add Card</button>
        </form>);
    }

}


class App extends React.Component{
    constructor(){
        super();
        this.state = {cards:[]};
        this.addNewCard = (data)=>{
            this.setState((prevState)=>({cards:prevState.cards.concat(data)}));
        };


    }

    render(){

        return(
            <div>
                <Form addNewCard={this.addNewCard}/>
                <CardList cards={this.state.cards} inputValue={this.state.name} />
            </div>
        );

    }
}


ReactDOM.render(<App/>, document.getElementById("app"));
