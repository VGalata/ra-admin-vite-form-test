import {FC} from "react";

import {Create, SelectInput, SimpleForm} from 'react-admin';
import {useFormContext} from 'react-hook-form';


export const ContentCreate: FC = () => {
  return (
    <Create title="Options">
      <SimpleForm>
        <SomeInput/>
      </SimpleForm>
    </Create>
  );
};

const SomeInput: FC = () => {
  const {setValue, getValues} = useFormContext();
  const choices = [
    {id: 'ang', name: 'Angular'},
    {id: 'rea', name: 'React'},
  ]

  return (
    <SelectInput choices={choices} source='stupidOption'/>
  )
}