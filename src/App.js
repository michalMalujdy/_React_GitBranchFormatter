import React from "react";
import './App.css';
import Formatter from "./components/Formatter/Formatter";
import CustomLayout from "./components/CustomLayout/CustomLayout";

class App extends React.Component {
    render() {
        return (
            <CustomLayout>
                <Formatter/>
            </CustomLayout>
        );
    }
}

export default App;
