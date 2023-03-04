import useViewport from "../hooks/useViewport";
import { BREAKPOINT_MD, BREAKPOINT_LG, SCALE_FACTOR_MD, SCALE_FACTOR_LG } from "../constants";

const Circle = ({ size, backgroundColor, topSm, topMd, topLg, leftSm, leftMd, leftLg  }) => {
    const { width } = useViewport();

    const determineTop = () => {
        if (width < BREAKPOINT_MD) {
            return topSm;
        } else if (width < BREAKPOINT_LG) {
            return topMd;
        } else {
            return topLg;
        }
    };

    const determineLeft = () => {
        if (width < BREAKPOINT_MD) {
            return leftSm;
        } else if (width < BREAKPOINT_LG) {
            return leftMd;
        } else {
            return leftLg;
        }
    };

    const determineSize = () => {
        if (width < BREAKPOINT_MD) {
            return size;
        } else if (width < BREAKPOINT_LG) {
            return size * SCALE_FACTOR_MD;
        } else {
            return size * SCALE_FACTOR_LG;
        }
    };

    return (
        <div
            style={{
                position: "absolute",
                top: determineTop(),
                left: determineLeft(),
                height: determineSize(),
                width: determineSize(),
                backgroundColor,
                borderRadius: '50%',
                zIndex: -1,
            }} />
    );
}

export default Circle;