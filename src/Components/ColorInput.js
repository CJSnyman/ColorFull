import { useEffect, useState } from "react";

const ColorInput = ({ setColor1, setColor2 }) => {
    const [red1, setRed1] = useState(Math.round(Math.random() * 255));
    const [green1, setGreen1] = useState(Math.round(Math.random() * 255));
    const [blue1, setBlue1] = useState(Math.round(Math.random() * 255));
    const [red2, setRed2] = useState(Math.round(Math.random() * 255));
    const [green2, setGreen2] = useState(Math.round(Math.random() * 255));
    const [blue2, setBlue2] = useState(Math.round(Math.random() * 255));
    const [createRandom, setCreateRandom] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setColor1([red1, green1, blue1]);
        setColor2([red2, green2, blue2]);
    };

    const randomColor = (e) => {
        e.preventDefault();
        setRed1(Math.round(Math.random() * 255));
        setGreen1(Math.round(Math.random() * 255));
        setBlue1(Math.round(Math.random() * 255));
        setRed2(Math.round(Math.random() * 255));
        setGreen2(Math.round(Math.random() * 255));
        setBlue2(Math.round(Math.random() * 255));
        setCreateRandom(Math.random());
    };

    useEffect(() => {
        setColor1([red1, green1, blue1]);
        setColor2([red2, green2, blue2]);
    }, [createRandom]);

    useEffect(() => {
        setColor1([red1, green1, blue1]);
        setColor2([red2, green2, blue2]);
    }, []);

    return (
        <form className="color-input-form">
            <div className="form-section">
                <h2>Color 1</h2>
                <div>
                    <label>
                        Red
                        <br />
                        <input
                            type="number"
                            min="0"
                            max="255"
                            value={red1}
                            onChange={(e) =>
                                e.target.value >= 0 &&
                                e.target.value <= 255 &&
                                setRed1(e.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Green
                        <br />
                        <input
                            type="number"
                            min="0"
                            max="255"
                            value={green1}
                            onChange={(e) =>
                                e.target.value >= 0 &&
                                e.target.value <= 255 &&
                                setGreen1(e.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Blue
                        <br />
                        <input
                            type="number"
                            min="0"
                            max="255"
                            value={blue1}
                            onChange={(e) =>
                                e.target.value >= 0 &&
                                e.target.value <= 255 &&
                                setBlue1(e.target.value)
                            }
                        />
                    </label>
                </div>
            </div>
            <div className="form-section">
                <h2>Color 2</h2>
                <div>
                    <label>
                        Red
                        <br />
                        <input
                            type="number"
                            min="0"
                            max="255"
                            value={red2}
                            onChange={(e) =>
                                e.target.value >= 0 &&
                                e.target.value <= 255 &&
                                setRed2(e.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Green
                        <br />
                        <input
                            type="number"
                            min="0"
                            max="255"
                            value={green2}
                            onChange={(e) =>
                                e.target.value >= 0 &&
                                e.target.value <= 255 &&
                                setGreen2(e.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Blue
                        <br />
                        <input
                            type="number"
                            min="0"
                            max="255"
                            value={blue2}
                            onChange={(e) =>
                                e.target.value >= 0 &&
                                e.target.value <= 255 &&
                                setBlue2(e.target.value)
                            }
                        />
                    </label>
                </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={randomColor}>Random Colors</button>
        </form>
    );
};

export default ColorInput;
