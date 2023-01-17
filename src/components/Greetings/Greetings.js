import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux-store/reducers/counterReducer";

const Greetings = () => {
    const count = useSelector((state) => state?.counterReducer?.value);
    const dispatch = useDispatch();

    return (
        <div id="greetings">
            <div className="container text-center mt-5">
                <h1 className="mt-3 display-1">Hello React - {count}</h1>
                <button
                    className="btn btn-sm btn-primary bg-gradient rounded-pill px-3 m-1"
                    aria-label="Increment value"
                    onClick={() => {
                        dispatch(increment());
                    }}
                >
                    Increment (+1)
                </button>
                <button
                    className="btn btn-sm btn-warning bg-gradient rounded-pill px-3 m-1"
                    aria-label="Decrement value"
                    onClick={() => {
                        dispatch(decrement());
                    }}
                >
                    Decrement (-1)
                </button>
            </div>
        </div>
    );
};

export default Greetings;
