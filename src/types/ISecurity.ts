export interface ISecurity {
  handleEditPassword: (body: { password: string }) => void;
}

export interface SecurityInputs {
  password: string;
  confirmPassword: string;
}
