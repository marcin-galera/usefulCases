import { useSelector } from "react-redux";
import { useActions } from "./useActions";
import { setName } from "../actions/nameActions";

export const useName = () => {
  const name = useSelector((state) => state.nameReducer.name);
  const age = useSelector((state) => state.nameReducer.age);
  const actions = useActions({ setName });

  return { name, age, ...actions };
};
