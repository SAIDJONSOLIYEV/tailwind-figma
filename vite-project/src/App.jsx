import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
const App = () => {
    return (
        <React.Fragment>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <Body />
                {/* <Footer /> */}
            </div>
        </React.Fragment>
    );
}

export default App;
