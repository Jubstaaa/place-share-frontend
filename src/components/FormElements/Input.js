import { useReducer, useEffect } from "react";
import { validate } from "../../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isTouched: false,
    isValid: props.valid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    props.onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        className={`w-full border border-[#ccc] bg-[#f8f8f8] px-1 py-0.5 focus:outline-none focus:bg-[#ebebeb] focus:border-[#510077] ${
          !inputState.isValid &&
          inputState.isTouched &&
          "border-red-500 bg-[#ffd1d1]"
        }`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        className={`w-full border border-[#ccc] bg-[#f8f8f8] px-1 py-0.5 focus:outline-none focus:bg-[#ebebeb] focus:border-[#510077] ${
          !inputState.isValid &&
          inputState.isTouched &&
          "border-red-500 bg-[#ffd1d1]"
        }`}
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`my-4 block ${
        !inputState.isValid && inputState.isTouched && "text-red-500"
      }`}
    >
      <label className="font-bold mb-2" htmlFor={props.id}>
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input;
