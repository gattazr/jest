import { ChangeEvent } from 'react';

interface Props {
  name: string;
  text: string;
  onChange: (newValue: string) => void;
};

const InputText = (props: Props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  }

  return (
    <div className="input-text">
      <label>{props.name}:</label>
      <input type="text" value={props.text} onChange={onChange} />
    </div>
  );
}

export default InputText;
