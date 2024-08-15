export type LoginInputData = {
  inputValueEmail?: string;
  inputValuePassword?: string;
  authHandler?: React.MouseEventHandler<HTMLButtonElement>;
  onchangeHandlerEmail?: React.ChangeEventHandler<HTMLInputElement>;
  onchangeHandlerPassword?: React.ChangeEventHandler<HTMLInputElement>;
};
