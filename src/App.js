import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [{ x: 1, y: 5, weightage: 5 },
      { x: 2, y: 7, weightage: 4 },
      { x: 2, y: 6, weightage: 3 },
      { x: 5, y: 9, weightage: 5 }],
      newArr: [],
      displayData: [],

    }
  }

  display = () => {
    const { newArr, arr, displayData } = this.state;
    let ans = 0, data = 0;
    let temp = [];
    arr.map((item, i) => {
      newArr.push(item.x);
      newArr.push(item.y);
    })

    temp = newArr.filter((item, i) => newArr.indexOf(item) === i)
    //for remove duplicate

    temp.sort();

    temp.map((val, i) => {
      ans = 0;
      arr.map((item, j) => {
        if (item.x <= val && item.y >= temp[i + 1]) {
          ans = ans + item.weightage;
        }
      })
      
      if ((arr.length) >= i) {
        data = val + '' + temp[i + 1] + '  : ' + ans;
        displayData.push(data);
      }
      this.setState({
        displayData,
        arr
      })
    })


  }


  render() {
    const { displayData } = this.state;
    return (
      <>
        <button onClick={() => this.display()}> Display </button>
        {
          displayData.map((item) => (
            <h4> {item} </h4>
          ))
        }
      </>
    );
  }
}

// arr.map((item, i) => {
//   if (item.x <= a && item.y >= b) {
//     ans = ans + item.weightage;
//   }
// })

export default App;

