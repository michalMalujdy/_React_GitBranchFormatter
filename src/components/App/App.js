import React from "react";
import "./App.scss";
import Formatter from "./../Formatter/Formatter";
import AppLayout from "./../AppLayout/AppLayout";

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
