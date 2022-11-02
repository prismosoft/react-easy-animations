import React from 'react'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Helmet} from "react-helmet";
import theme from './theme';
import Header from './components/Header/header';
import Playground from './components/Playground/playground';
import Footer from './components/Footer/footer';
import ExamplePage from './components/ExamplePage/examplePage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <style type="text/css">{`
                       *, *:before, *:after {
                            box-sizing: border-box;
                       }
                      body {
                        margin: 0;
                        padding: 0;
                        @import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600,700&display=swap');
                        font-family: 'Montserrat', sans-serif;
                        background-color: #fafafa;
                      }
                    `}
                    </style>
                </Helmet>
                <ThemeProvider theme={theme}>
                    <Header/>

                    <Switch>
                        <Route exact path="/react-easy-animations/">
                            <Playground/>
                        </Route>
                        <Route path="/react-easy-animations/example">
                            <ExamplePage/>
                        </Route>
                    </Switch>

                    <Footer/>
                </ThemeProvider>
            </Router>
        )
    }
}

export default App