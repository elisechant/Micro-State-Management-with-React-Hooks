const init = (count) => ({ count })

const reducer = (prev, delta) => prev + delta

const ComponentWithUseReducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialCount,
    init,
  );
  return (
    <div>
      {state}
      <button onClick={() => dispatch(1)}>+1</button>
    </div>
  );
};

const ComponentWithUseState = ({ initialCount }) => {
  const [state, setState] = useState(() => init(initialCount));
  const dispatch = (delta) =>
    setState((prev) => reducer(prev, delta));
  return [state, dispatch];
};
