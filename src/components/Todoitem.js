import React, { Component } from 'react'

export default class todoItem extends Component {
    render() {
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>title</h6>
                {/* Our two icons */}
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fa fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger">
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </li>
        );
    }
}
