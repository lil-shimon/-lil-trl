import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customCounterState, decrement, increment, incrementByAmount } from "../customCounter/customCounterSlice";

export const ReduxComponent: FC = () => {
    const dispatch = useDispatch();
    const count = useSelector(customCounterState)
    const [num, setNum] = useState(0)

    return (
        <>
            <h3>Integration Test</h3>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <span data-testid="count-value">{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(incrementByAmount(num))}>
                    Increment by amount
                </button>
                <input type="text" placeholder="enter" value={num} onChange={(e) => setNum(+e.target.value)}/>
            </div>
        </>
    )
}