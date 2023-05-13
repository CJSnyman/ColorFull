import ColorBlocks from "./ColorBlocks";

const ColorCreation = ({ color1, color2 }) => {
    const hexColorChars = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];
    let colorsList = [];

    for (let j = 10; j >= 0; j--) {
        let colorCodes = {};
        const color1Percentage = j / 10;
        const red = color1[0] * color1Percentage + color2[0] * (1 - color1Percentage);
        const green = color1[1] * color1Percentage + color2[1] * (1 - color1Percentage);
        const blue = color1[2] * color1Percentage + color2[2] * (1 - color1Percentage);
        colorCodes.rgb = [red, green, blue];
        colorCodes.hex = [];

        colorCodes.hex.push(
            [red, green, blue].map((color) => {
                const dividedColor = Math.round(color) / 16;
                let hex = hexColorChars[Math.trunc(dividedColor)];
                hex += hexColorChars[Math.round((dividedColor - Math.trunc(dividedColor)) * 16)];
                return hex;
            })
        );

        colorsList.push(colorCodes);
    }

    return (
        <div className="color-wall">
            {colorsList.map((color, index) => (
                <ColorBlocks {...color} key={index} />
            ))}
        </div>
    );
};

export default ColorCreation;
