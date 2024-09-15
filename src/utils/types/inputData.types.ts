export type InputDataType = {
  type?: string;
  disabled?: boolean;
  text?: string;
  inputValue?: string | undefined;
  placeholderText?: string | undefined;
  handler?: React.ChangeEventHandler<HTMLInputElement>;
};
