import React from "react";
import "./css/InputStyles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="오늘은 뭘 해야하지?"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Just do!
      </button>
    </form>
  );
};

export default InputFeild;
