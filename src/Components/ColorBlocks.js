const ColorBlocks = ({ rgb, hex }) => {
    return (
        <div
            style={{ backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` }}
            className="color-block"
        >
            <p className="color-block-display">
                RGB({Math.round(rgb[0])}, {Math.round(rgb[1])}, {Math.round(rgb[2])})
            </p>
            <p className="color-block-display">
                #{hex[0]}
                {hex[1]}
                {hex[2]}
            </p>
        </div>
    );
};

export default ColorBlocks;
