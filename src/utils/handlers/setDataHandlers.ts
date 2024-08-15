import { SetStateAction } from "react";

export const setDataHanlder = (
  e: React.ChangeEvent<HTMLInputElement>,
  setEvent: React.Dispatch<SetStateAction<string>>
) => {
  setEvent(e.target.value);
};
