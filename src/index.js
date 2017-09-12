import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// You tube api Key
const API_KEY = 'AIzaSyDwWESdrzD6BPOBAG0OOGKl-CDfZ5bQWDg';

//Create a new component.  This component should produce some HTML

const App = () => {
    return(
    <div> 
        <SearchBar />
    </div>
    );
}

//Take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));