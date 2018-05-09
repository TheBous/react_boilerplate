import React, {Component} from 'react';
import {AppRouter} from "./Route";
import {NavBar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";


class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <AppRouter/>
                <Footer/>
            </div>

        );
    }
}

export default App;
