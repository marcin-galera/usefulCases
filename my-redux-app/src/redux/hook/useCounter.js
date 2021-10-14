import { useSelector } from "react-redux";
import { useActions } from "./useActions";
import { increment, decrement, set } from "../actions/counterActions";

export const useCounter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const actions = useActions({ increment, decrement, set });

  return { count, ...actions };
};
