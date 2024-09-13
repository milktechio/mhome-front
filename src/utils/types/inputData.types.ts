export type InputDataType = {
  disabled?: boolean;
  text?: string;
  inputValue?: string | undefined;
  placeholderText?: string | undefined;
  handler?: React.ChangeEventHandler<HTMLInputElement>;
};
