import React from 'react';
import FuturamaContainer from '../../containers/FuturamaContainer'

export default function App() {
  return <FuturamaContainer />;
}

// // independent state updates
// // -> updated state doesn't care about the previous state
// // dependent state update
// // -> updated state cares about the previous state
// class DemoForm extends React.Component {
//   state = {
//     inputText: 'hello',
//     toggleText: 'red',
//     count: 0,
//   };

//   handleChange = ({ target }) => {
//     // independent state update
//     this.setState({ inputText: target.value });
//   };

//   handleToggle = () => {
//     // dependent state update
//     this.setState((prevState) => ({
//       toggleText: prevState.toggleText === 'red' ? 'blue' : 'red',
//     }));

//     console.log('after setState', this.state.toggleText);
//   };

//   handleIncrement = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     const { count, inputText, toggleText } = this.state;
//     console.log('render: ', toggleText);

//     return (
//       <>
//         <form>
//           <input type="text" value={inputText} onChange={this.handleChange} />
//         </form>
//         <button onClick={this.handleToggle}>Toggle me</button>
//         <button onClick={this.handleIncrement}>{count}</button>
//         <br />
//         {toggleText}
//       </>
//     );
//   }
// }
