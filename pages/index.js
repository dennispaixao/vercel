import {Component} from 'react';
class Home extends Component{
constructor(props){
    super(props);
    this.state = {
        contador : 1
    }

    this.incrementar = this.incrementar.bind(this);
}
 incrementar(){
    this.setState({contador: this.state.contador+1});
    
}


    render(){
       
        return(
            <div>
                {this.state.contador}<br/>
                <button onClick={this.incrementar} >incrementar</button>
             </div>   

        )
    }

}

export default Home;