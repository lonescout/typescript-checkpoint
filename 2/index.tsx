// Import React
import React from 'react';

//  Define a type for props
interface GreetingProps {
  name: string; // name must be a string
}

//  Use React.FC with type annotation for the props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; //  Type-safe usage of props
};

export default Greeting;
