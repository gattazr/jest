import { ChangeEvent } from 'react';

interface Props {
  name: string;
  text: string;
  onChange: (newValue: string) => void;
};

const InputText = (props: Props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!props.onChange) { return };
    props.onChange(e.target.value);
  }

  return (
    <div className="input-text">
      <label htmlFor={props.name}>{props.name}:</label>
      <input id={props.name} type="text" value={props.text} onChange={onChange} />
    </div>
  );
}

export default InputText;
