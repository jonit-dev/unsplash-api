import React, {Component} from 'react';

class SearchBar extends Component {

    state = {term: ''};


    //uncontrolled events
    // onInputChange(event) {
    //     let text = event.target.value;
    //     console.log(text);
    // }


    //remember: add onChange={this.onInputchange} to some input

    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.term);
    }


    render() {
        return (<div className="ui segment">
            <form onSubmit={this.onFormSubmit} action="#" className="ui form">
                <label>Image Search</label>
                <input type="text" className="field" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}  />
            </form>


        </div>);
    }
}

export default SearchBar;