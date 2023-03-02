import useViewport from "../hooks/useViewport";
import { BREAKPOINT, SCALE_FACTOR } from "../constants";

const Circle = ({ size, backgroundColor, top, left, minTop, minLeft }) => {
    const { width } = useViewport();

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