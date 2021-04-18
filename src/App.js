import React from "react";
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
