import { useState } from "react";

// import styles from "./App.module.css";

export default function App() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <button
                onClick={ () => setCounter(counter + 1) }
            ></button>

            <span>counter = { counter }</span>
        </div>
    );
}