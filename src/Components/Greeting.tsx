import React from 'react'; 
interface props{
    name:string;
}
const Greeting = ({ name }:props) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;
