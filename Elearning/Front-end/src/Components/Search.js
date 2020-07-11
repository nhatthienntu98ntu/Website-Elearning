import React, { Component } from 'react'

export default class Search extends Component {
    getContent = (event) => {
        const value = event.target.value
        this.props.getContentSearch(value)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form-group">
                        <div className = "btn-group">
                            <input type="text" className="form-control timkiemmm" placeholder=" Nhập tên khoá học..." aria-describedby="helpId"    onChange={(event) => this.getContent(event)} ref='contentClick' />
                            <i className='fa fa-search'></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}