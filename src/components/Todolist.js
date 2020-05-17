import React, { Component } from 'react';
import Todoitem from './Todoitem';


export default class todoList extends Component {
    render() {
        return (
            <ul className="list-group my-4">
                <h3 className ="text-capitalize text-center mt-5">todo list</h3>
                <Todoitem />
                <button type="button" className="btn btn-danger text-capitalize mt-5">clear list</button>
            </ul>
        );
    }
}
