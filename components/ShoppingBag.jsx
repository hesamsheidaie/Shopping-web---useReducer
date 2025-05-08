import React, { useContext } from "react";
import { Data } from "../src/Appcontext";
import TextField from "@mui/material/TextField";

function ShoppingBag() {
    const { state, dispatch } = useContext(Data);
    const bag = state.bag;

    if (bag.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen mt-9">
                <svg
                    className="w-20 h-20 text-gray-800"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M9 10V6a3 3 0 016 0v4m3-2 .917 11.923A1 1 0 0117.92 21H6.08a1 1 0 01-.997-1.077L6 8h12Z"
                    />
                </svg>
                <h1 className="m-5 text-3xl text-gray-700">Your bag is empty</h1>
            </div>
        );
    }

    return (
        <div className="h-screen mt-9">
            <div className="flex items-start flex-wrap h-full  md:w-[80%] m-auto border-2 rounded-2xl  overflow-y-scroll">
                {bag.map((item) => (
                    <div
                        key={item.id}
                        className="w-full flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow p-4"
                    >
                        <img
                            src={item.imageSrc}
                            alt={item.title}
                            className="md:ml-10 my-5 rounded-2xl w-45 h-45" />

                        <div className="flex-1 mt-4 md:mt-0 md:ml-6">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-gray-700 mt-2 font-bold">Price: {item.price}</p>
                        </div>

                        <div className="flex items-center gap-3 mt-4 md:mt-0">
                            <button className="text-2xl font-bold"onClick={() =>dispatch({ type: "DECREASE", payload: { id: item.id } }) } >➖</button>
                            <TextField
                                size="small"
                                sx={{ width: 50 }}
                                value={item.number}
                                inputProps={{ readOnly: true, className: "text-center font-bold" }}
                            />

                            <button className="text-2xl font-bold" onClick={() =>dispatch({ type: "INCREASE", payload: { id: item.id } })} >➕</button>
                        </div>
                        <button onClick={() =>dispatch({ type: "REMOVE", payload: { id: item.id } })}className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 md:mt-0 hover:bg-red-700">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShoppingBag;

