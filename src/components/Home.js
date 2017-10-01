import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Link } from 'react-router-dom'
import 'react-select/dist/react-select.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      selectedOptions: null,
      loadingPokemon: true,
    };
  }

  componentDidMount() {
    this.getPokemonList();
  }

  getPokemonList() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/pokemon`)
      .then((res) => {
        this.setState({ pokemon: res.data.data, loadingPokemon: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Select pokémon</h1>
          <Select
            multi
            value={this.state.selectedOptions}
            isLoading={this.state.loadingPokemon}
            options={
              this.state.pokemon.map(pokemon =>
                ({
                  value: pokemon.id,
                  label: `${pokemon.forme}`,
                }),
              )
            }
            onChange={value => this.setState({ selectedOptions: value })}
          />                  
          <div className="row justify-content-center">
            <Link
              className="btn btn-secondary" 
              style={{ marginTop: 20 }}
              to={this.state.selectedOptions ? '/compare/' + this.state.selectedOptions.map(option => option.value).join(',') : ''}
            >
              compare
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
