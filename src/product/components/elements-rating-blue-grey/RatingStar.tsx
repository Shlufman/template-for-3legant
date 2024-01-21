import D_PATHS from "../../../constants/constants-paths";

import styles from './style.module.scss';
interface Props{
    fraction: number;
    height?: string;
    width?: string;
}

export const RatingStar = ({fraction, height}: Props) => {
    if (fraction > 1) {
        fraction = 1;
    }
    if (fraction < 0) {
        fraction = 0;
    }
    return (
        <div>
            <svg height={height??"16"} width={height??"16"} viewBox={`0 0 16 16`}>
                <g id="layer1">
                    <mask
                        id="mask0_13725_1339"
                        style={{maskType: "alpha"}}
                        maskUnits="userSpaceOnUse"
                    >
                        {/*<path d={D_PATHS["starCenter"]} fill="#C4C4C4"/>*/}
                        <path
                            d="M 7.4624772,0.72860206 C 7.6613449,0.25046851 8.3386593,0.25046734 8.537527,0.72859042 l 1.789669,4.30290038 c 0.08379,0.201569 0.273455,0.339286 0.490952,0.3567277 l 4.645446,0.3724228 c 0.516148,0.04138 0.725378,0.6855462 0.332184,1.0224337 l -3.539333,3.0317424 c -0.1658,0.142025 -0.238105,0.3648666 -0.187457,0.5772056 l 1.081314,4.533064 c 0.120043,0.503689 -0.427891,0.901774 -0.869755,0.631882 L 8.3034616,13.127826 c -0.1863045,-0.113755 -0.4206144,-0.113755 -0.606919,0 L 3.7194918,15.556969 C 3.2775701,15.826861 2.7296012,15.428776 2.8497601,14.925087 L 3.9310623,10.392023 C 3.9817107,10.179684 3.909301,9.9568424 3.7435119,9.8148174 L 0.20426108,6.783075 C -0.18901722,6.4461875 0.02028519,5.8020216 0.5364679,5.7606413 L 5.181798,5.3882185 C 5.3994114,5.3707768 5.5889644,5.2330598 5.6728078,5.0314908 Z"
                            fill="#C4C4C4"
                        />
                    </mask>

                    <g mask="url(#mask0_13725_1339)">
                        <path className={styles.rate}
                              d={`M 0, 0 H ${fraction * 16} V 16 H 0 Z`}
                              fill="#568fff"
                              fillOpacity="1"
                              style={{strokeWidth: 0.968283}}
                        />
                        <path className={styles.noRate}
                              d={`M ${fraction * 16},0 H 16 V 16 H ${fraction * 16} Z`}
                              fill="#000000"
                              fillOpacity="0.1"
                        />
                    </g>
                </g>
            </svg>

        </div>
    );
};