import React, { Component } from 'react'

export default class PokemonCard extends Component {
    render() {
        return (
            <div>
            <div className="displayCard">{!this.props.isPokemonSet? 
            <p>Please search a pokemon</p> : 
            <>
            <img src={this.props.pokemonImage.img}></img>
            <h3>Primary Type: {this.props.pokemonImage.type}</h3>
            </>
            }
            </div>
            </div>
        )
    }
}
