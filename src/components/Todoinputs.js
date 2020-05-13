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
                            <input type="text" className="form-control" placeholder="Add a todo item"></input>   
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
