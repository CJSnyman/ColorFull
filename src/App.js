import { useState } from "react";
import ColorCreation from "./Components/ColorCreation";
import ColorInput from "./Components/ColorInput";

function App() {
    const [color1, setColor1] = useState([28, 0, 255]);
    const [color2, setColor2] = useState([255, 255, 0]);

    return (
        <div className="App">
            <h1 className="app-header">RGB COLOR MIX</h1>
            <ColorInput setColor1={setColor1} setColor2={setColor2} />
            <ColorCreation color1={color1} color2={color2} />
            <footer>
                <p>
                    <small>Created by Craig Snyman.</small>
                </p>
            </footer>
        </div>
    );
}

export default App;
