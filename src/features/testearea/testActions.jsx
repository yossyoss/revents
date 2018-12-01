import { INC_COUNTER, DEC_COUNTER } from "./testConstants";

export const incrementCounter = () => {
  return {
    type: INC_COUNTER
  };
};

export const decreamentCounter = () => {
  return {
    type: DEC_COUNTER
  };
};
