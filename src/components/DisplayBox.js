import react from "react";

const DisplayBox = (props) => {
    const boxStyle = {
        height: `${props.size}px`,
        width: `${props.size}px`,
        backgroundColor: props.color,
        display: 'inline-block',
        margin: "20px",
        borderRadius: "20px",
        boxShadow: "5px 10px 8px 10px #888888",


    }
    return(
        <>
            <div style={boxStyle}></div>
        </>
    )

};

export default DisplayBox;
