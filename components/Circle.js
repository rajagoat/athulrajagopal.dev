import useViewport from "../hooks/useViewport";

const Circle = ({ size, backgroundColor, top, left, right, minTop, minLeft, minRight }) => {
    const { width } = useViewport();
    const BREAKPOINT = 762;
    const SCALE_FACTOR = 1.57;

    const determineTop = () => {
        return width < BREAKPOINT ? minTop : top;
    };

    const determineLeft = () => {
        return width < BREAKPOINT ? minLeft : left;
    }

    return (
        <div
            style={{
                position: "absolute",
                top: determineTop(),
                left: determineLeft(),
                height: width < BREAKPOINT ? size : size * SCALE_FACTOR,
                width: width < BREAKPOINT ? size : size * SCALE_FACTOR,
                backgroundColor,
                borderRadius: '50%',
                zIndex: -1,
            }} />
    );
}

export default Circle;