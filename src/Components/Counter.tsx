import React, { Component } from 'react'; 
interface Counterstate{
    count:number;
}
interface Counterprops{

}
class Counter extends Component<Counterprops,Counterstate>{
constructor(props:Counterprops){
    super(props)
   this.state={
        count: 0
        }; 
}
 increment = () => {
 this.setState({ count: this.state.count + 1 }); 
}; 
render() { 
return (
 <div> 
<p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div> );
 }
 } 
export default Counter;
