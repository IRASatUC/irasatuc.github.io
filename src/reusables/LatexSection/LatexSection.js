import { useRef } from "react";
import { MathJax } from "better-react-mathjax";
import {useIsOverflow} from "../../utils/WindowStates";

export default function LatexSection({input, inline=false}) {
    const ref = useRef();
    const isOverflowing = useIsOverflow(ref, (isOverflowFromCallback) => {
    console.log(isOverflowFromCallback);});
    const eq = <MathJax hideUntilTypeset={"first"} inline={inline}>{input}</MathJax>;

    return ( (inline) ?
        <span className="mathJaxBar">
            {eq}
        </span> :
        <div className="relative my-[20px]">
            <div className={"bg-blue-900 rounded-xl overflow-x-scroll overflow-y-hidden pl-4 pr-4 mathJaxBar" + (isOverflowing?"":" justify-center flex")} ref={ref}>
                {eq}
                {isOverflowing &&
                    <div className="absolute rounded-xl left-0 top-0 h-full w-full pointer-events-none mathJax_gradient"></div>
                }
            </div>
        </div>
    );
}