import InputText from 'components/system/InputText';

interface Props {
  name: string;
  number: number;
  onChange: (newValue: number) => void;
}

const InputNumber = (props: Props) => {
  const onChange = (newValue: string) => {
    if (!props.onChange) { return };
    const newNumber = Number.parseInt(newValue);
    if (isNaN(newNumber)) {
      props.onChange(0);
    } else {
      props.onChange(newNumber);
    }
  }

  return (
    <InputText name={props.name} text={'' + props.number} onChange={onChange} />
  );
}

export default InputNumber;
