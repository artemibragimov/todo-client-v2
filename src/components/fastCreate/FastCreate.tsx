import { IFastCreate, ITaskForm, ITaskFormInputs } from '@/types/ITaskForm';
import * as FastCreateSC from './FastCreate.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddTaskIcon } from '@/assets';

export default function FastCreate({ handleCreate, toggle }: IFastCreate) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITaskFormInputs>({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit: SubmitHandler<ITaskFormInputs> = (data) => {
    handleCreate(data.name.trim());

    reset({
      name: '',
    });
  };
  return (
    <FastCreateSC.Container onSubmit={handleSubmit(onSubmit)}>
      <FastCreateSC.Button onClick={toggle}>
        <AddTaskIcon />
      </FastCreateSC.Button>
      <FastCreateSC.FormInput
        autoFocus
        placeholder="Enter text"
        {...register('name', { required: true })}
      />
    </FastCreateSC.Container>
  );
}
