const Circle = ({ size, backgroundColor, top, left  }) => {
    return (
        <div
            style={{
                position: "absolute",
                top,
                left,
                height: size,
                width: size,
                backgroundColor,
                borderRadius: '50%',
                zIndex: -1,
            }} />
    );
}

export default Circle;