import "./App.scss";
import Container from "../components/Container";
import Thanks from "../components/Thanks";
import { useState } from "react";

function App() {
    let [state, setState] = useState(false);

    function Render(receiveFeedback) {
        if (receiveFeedback) {
            return <Thanks></Thanks>;
        } else {
            return <Container onClick={() => setState(true)}></Container>;
        }
    }

    return <div className="App">{Render(state)}</div>;
}

export default App;
