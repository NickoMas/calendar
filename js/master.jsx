import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import Sidebar, { mapStateToProps } from "./sidebar.jsx";
import rootReducer from "./rootReducer.js";
import { weekOfMonth } from "./time-fn.js";
import { Button } from "react-lightning-design-system";

// Store
const store = createStore(rootReducer);

class Window extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <section className = "container">
            <Sidebar />
            <Table />
        </section>
      )
  }
}

class Table extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className = "table">
        <table>
          <TableBody />
        </table>
      </section>
      )
  }
}


class TableBody extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <tbody>
          <TableHeadRow />
          <TableRow index = { 0 } />
          <TableRow index = { 1 } />
          <TableRow index = { 2 } />
          <TableRow index = { 3 } />
          <TableRow index = { 4 } />
          <TableRow index = { 5 } />
      </tbody>
      )
  }
}

class TableRow extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <tr>
          <Cell trIndex = { this.props.index } tdIndex = { 0 } />
          <Cell trIndex = { this.props.index } tdIndex = { 1 } />
          <Cell trIndex = { this.props.index } tdIndex = { 2 } />
          <Cell trIndex = { this.props.index } tdIndex = { 3 } />
          <Cell trIndex = { this.props.index } tdIndex = { 4 } />
          <Cell trIndex = { this.props.index } tdIndex = { 5 } />
          <Cell trIndex = { this.props.index } tdIndex = { 6 } />
      </tr>)
  }
}

class TableHeadRow extends React.Component {

  render(){
    return (
        <tr>
            <th>{ 'Mon' }</th>
            <th>{ 'Tue' }</th>
            <th>{ 'Wed' }</th>
            <th>{ 'Thu' }</th>
            <th>{ 'Fri' }</th>
            <th>{ 'Sat' }</th>
            <th>{ 'Sun' }</th>
        </tr>
      )
  }
}

class TableCell extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const tr = this.props.trIndex;
    const td = this.props.tdIndex;
    const day = this.props.calendar[tr][td];

    return (
      <td className={weekOfMonth(tr, day) ? 'inRange' : 'offRange'}>{ day }</td>
      )

  }
}

const Cell = connect(
    mapStateToProps
  )(TableCell);

ReactDOM.render(<Provider store = {store}>
                  <Window />
                </Provider>,
                document.getElementById("root"));
