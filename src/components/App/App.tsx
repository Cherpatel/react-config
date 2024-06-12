import Svg from "@assets/svgs/test.svg";

import styles from "./App.module.css";

export default function App() {
    console.log("classes = ", styles);

    return (
        <div>
            <Svg />
        </div>
    );
}