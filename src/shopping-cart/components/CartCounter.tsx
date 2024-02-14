'use client';
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne } from "@/store/counter/counterSlice";
// import { useState } from "react";

interface Props {
    value?: number;
}

export const CartCounter = ({value = 0}: Props) => {

    const count = useAppSelector(state => state.counter.count); //obtenemos el valor del state
    const dispatch = useAppDispatch(); //despachamos acciones
    // const [count, setCount] = useState(value);

    return (
        <>
            <span className="text-9xl">{count}</span>

            <div className="flex">
                <button 
                // onClick={() => setCount(count + 1)}
                onClick={() => dispatch( addOne() )}
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                +1
                </button>

                <button 
                // onClick={() => setCount(count - 1)}
                onClick={() => dispatch( substractOne() )}
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                -1
                </button>
            </div>
        </>
    )
}
