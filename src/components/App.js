import React, {Component} from 'react';

import SearchBar from './SearchBar';
// import APIService from "../services/APIService";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";


class App extends Component {

    state = {images: []}; //initialize container that will hold images array of obj


    onSearchSubmit = async (term) => {

        console.log(term);
        console.log('starting network request with axios...');

        /* Using a service-link structure =========================================== */

        // const response = await APIService.request('/search/photos', 'GET', {
        //     query: term
        // });

        /* Using Axios Custom Client =========================================== */

        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });

        this.setState({images: response.data.results});


    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>


                    <ImageList images={this.state.images}/>

            </div>
        );
    }
}

export default App;