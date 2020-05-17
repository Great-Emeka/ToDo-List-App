import React, { Component } from 'react';


export default class todoInputs extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group prepend">
                            <div class="input-group-text bg-primary text-white">
                                <i className ="fas fa-book"></i>
                            </div>
                            <input type="text" className="form-control text-capitalize" placeholder="Add a todo item"></input>   
                        </div>
                    </div>
                    <button type="submit" className="btn btn-block bg-primary mt-4 text-white text-bold">Add Item</button>
                </form>
            </div>
        )
    }
}
