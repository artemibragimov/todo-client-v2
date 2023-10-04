import { SaveIcon, CloseIcon } from '../../../../assets';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
import { ITaskForm, ITaskFormInputs } from '../../../../types/ITaskForm';
import {
  Button,
  ButtonContainer,
  Error,
  TaskForm,
  TaskFormInput,
  TaskFormTitle,
} from './TaskForm.styled';

const CreateTaskForm = ({
  id,
  name,
  handleSubmitForm,
  toggle,
  formTitle,
}: ITaskForm) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ITaskFormInputs>({
    defaultValues: {
      name: '' || name,
    },
  });

  const onSubmit: SubmitHandler<ITaskFormInputs> = (data) => {
    if (data.name.slice(0, 1) === ' ') {
      return setError('name', {
        type: 'custom',
        message: 'custom',
      });
    }

    if (data.name !== name) {
      handleSubmitForm({ id: id, name: data.name });
    }

    toggle(false);
    reset({
      name: '',
    });
  };

  const onClickClose = () => {
    toggle(false);
    errors.name = undefined;
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        onClickClose();
      }
    });
    return () =>
      window.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          onClickClose();
        }
      });
  }, []);

  return (
    <div>
      <TaskFormTitle>{formTitle}</TaskFormTitle>

      <TaskForm onSubmit={handleSubmit(onSubmit)}>
        <TaskFormInput
          autoFocus
          placeholder="Enter text"
          {...register('name', { required: true })}
        />

        {errors.name ? (
          <Error>This field cannot be empty or start with a space</Error>
        ) : (
          <br />
        )}

        <ButtonContainer>
          <Button
            $bg="#67b9cb44"
            $bgHover="#67b9cbad"
            $color=" #67b8cb"
            type="submit"
          >
            <SaveIcon />
            Save
          </Button>

          <Button
            $bg="#6b728044"
            $bgHover="#6b7280ad"
            $color=" #6b7280"
            onClick={onClickClose}
          >
            <CloseIcon />
            Close
          </Button>
        </ButtonContainer>
      </TaskForm>
    </div>
  );
};

export default CreateTaskForm;
