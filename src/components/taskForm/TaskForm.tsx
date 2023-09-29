import s from "./TaskForm.module.css";
import { SaveIcon, CloseIcon } from "../../assets";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

interface TaskFormType {
  id: number;
  name: string;
  handleSubmitForm: (task: { id: number; name: string }) => void;
  toggle: (boolean: boolean) => void;
  formTitle: string;
}

type Inputs = {
  name: string;
};

const CreateTaskForm = ({
  id,
  name,
  handleSubmitForm,
  toggle,
  formTitle,
}: TaskFormType) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "" || name,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await handleSubmitForm({ id: id, name: data.name });
    toggle(false);
    reset({
      name: "",
    });
  };

  const onClickClose = () => {
    toggle(false);
    errors.name = undefined;
  };

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        onClickClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div>
      <div className={s.formTitle}>{formTitle}</div>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          autoFocus
          className={s.text_input}
          placeholder="Enter text"
          {...register("name", { required: true })}
        />

        {errors.name ? (
          <div className={s.form_error}>This field should not be empty</div>
        ) : (
          <div>
            <br />
          </div>
        )}

        <div className={s.btn_container}>
          <button className={s.submit_button + " " + s.form_btn} type="submit">
            <SaveIcon />
            <p>Save</p>
          </button>

          <button
            className={s.close_button + " " + s.form_btn}
            onClick={onClickClose}
          >
            <CloseIcon />
            <p>Close</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
