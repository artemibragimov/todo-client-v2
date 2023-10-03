import { SubmitHandler, useForm } from "react-hook-form";
import { ChangePasswordIcon } from "../../assets";
import {
  SecurityButton,
  SecurityContainer,
  SecurityInput,
  SecurityTitle,
} from "./Security.styled";
import { ISecurity, SecurityInputs } from "../../types/ISecurity";

const Security = ({ handleEditPassword }: ISecurity) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<SecurityInputs>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<SecurityInputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("password", { type: "password", message: "password" });
      setError("confirmPassword", {
        type: "confirmPassword",
        message: "confirmPassword",
      });
    } else {
      handleEditPassword({ password: data.password });
      reset({
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <SecurityContainer>
      <SecurityTitle>Edit password</SecurityTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SecurityInput
          $box_shadow={errors.password ? "true" : ""}
          type={"password"}
          placeholder="Enter new password"
          {...register("password", { required: true })}
        />

        <SecurityInput
          type={"password"}
          $box_shadow={errors.password ? "true" : ""}
          placeholder="Confirm password"
          {...register("confirmPassword", { required: true })}
        />

        <SecurityButton type="submit">
          <ChangePasswordIcon />
          Change password
        </SecurityButton>
      </form>
    </SecurityContainer>
  );
};

export default Security;
