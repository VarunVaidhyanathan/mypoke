import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-static-top" style={{
                backgroundColor: "#fe2c54"
            }}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#" style={{color:"#FBFAF5", fontWeight:"bold"}}>MyPoke</a>
                    </div>
                    <div className="pull-right">
                    <ul className="nav navbar-nav">
                        {/*<li className="active"><a href="#" style={{color:"#FBFAF5", fontWeight:"bold"}}>Home</a></li>*/}
                        <li><a href="#" style={{color:"#FBFAF5", fontWeight:"bold" }}>Your favorite Pokemon</a></li>
                    </ul>
                    </div>
               </div>
            </nav>
            </div>
        )
    }
}
