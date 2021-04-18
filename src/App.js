import React from "react";
import './App.css';
import Formatter from "./components/Formatter/Formatter";
import AppLayout from "./components/AppLayout/AppLayout";

class App extends React.Component {
    render() {
        return (
            <AppLayout>
                <Formatter/>
            </AppLayout>
        );
    }
}

export default App;
