import  React from 'react';
import ReactDOM from "react-dom";

import DisplayDetails from './DisplayDetails';
import { isArrayEmpty } from './utils';
import classes from './App.module.css';


class App extends React.Component {
    state = {
        showValue: true,

        detailsObj: [
            {
             id : 1,
             firstName : 'Adam',
             lastName : '',
             age : 35,
             job : 'Software developer',
             likedCnt : 0,
             disLikedCnt : 0
            },
             {
             id: 2,
             firstName : 'John',
             lastName : 'G',
             age : 11,
             job : 'Software developer',
             likedCnt : 0,
             disLikedCnt : 0
              },
             {
             id: 3,
             firstName : 'Mac',
             lastName : 'G',
             age : 10,
             job : 'Software developer',
             likedCnt : 0,
             disLikedCnt : 0
             }
        ]
    };

  onBtnClicked = () => {
        this.setState((prevState, prevProps) => {
            return {showValue: !prevState.showValue}
        });
  };


  onBtnLikedClicked = (pos) => {
    const updatedObjList = this.state.detailsObj;
    const updatedObj = updatedObjList[pos];
    updatedObj.likedCnt = updatedObj.likedCnt+1;
    updatedObjList[pos] = updatedObj;
    this.setState({detailsObj:updatedObjList});
  };

  onBtnDisLikedClicked = (pos) => {
    const updatedObjList = this.state.detailsObj;
    const updatedObj = updatedObjList[pos];
    updatedObj.likedCnt = updatedObj.likedCnt-1;
    updatedObjList[pos] = updatedObj;
    this.setState({detailsObj:updatedObjList});
  };

  render(){

  const iDetObj = isArrayEmpty(this.state.detailsObj) ? [] : this.state.detailsObj.map((item,pos) => {
          return(
               <DisplayDetails key={item.id} firstName={item.firstName} lastName={item.lastName} age={item.age}
               job={item.job} likedCnt={item.likedCnt}  onBtnLikedClicked={()=>this.onBtnLikedClicked(pos)}
               disLikedCnt={item.disLikedCnt} onBtnDisLikedClicked={()=>this.onBtnDisLikedClicked(pos)}/>
          )
    });

   return(
         <div>
            <button className={classes.j1} onClick = {this.onBtnClicked}>{this.state.showValue ? 'Hide List' : 'Show List'}
            </button>
            <div className={classes.BlogCard1}>
            {this.state.showValue ? iDetObj : null}
            </div>
            <br></br>
        </div>

      );
   }
}

export default App;
