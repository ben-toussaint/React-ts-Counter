// import { count } from "console";
import { useReducer } from "react";

// interface Reducer {
//   reducer: (action: Action) => void;
// }
interface Action {
  type: "increment" | "decrement" | "reset";
}

interface State {
  count: number;
  error: string | null;
}
function reducer(state: State, action: Action): State {
  const { type } = action;
  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum Reached" : null,
      };
    }

    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum reached" : null,
      };
    }
    case "reset": {
      return { count: 0, error: null };
    }
    default:
      return state;
  }

  //switch statement goes here
}

function Counter() {
  const [counter, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div className="flex flex-col items-center w-full h-screen ">
      <div className="flex flex-col font-semibold gap-5 mt-20 rounded-2xl p-10 shadow-lg shadow-black-700 bg-[#f5f5f5cd]">
        <h1 className="font-bold text-xl p-3">Count:{counter.count}</h1>
        {counter.error && <div className="text-red-600">{counter.error}</div>}
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="w-50 p-2 rounded-2xl bg-blue-500 text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="w-50 p-2 rounded-2xl bg-blue-500 text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="w-50 p-2 rounded-2xl bg-blue-500 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
