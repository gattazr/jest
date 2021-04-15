import { useState } from 'react';
import InputNumber from 'components/system/InputNumber'

interface Props {};

const Additionner = (props: Props) => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const total = () => {
    return valueA + valueB;
  };

  return (
    <div className="additionner">
      <h1>
        Calculator
      </h1>
      <div>
        <InputNumber name="A" number={valueA} onChange={(n: number) => setValueA(n)} />
        <InputNumber name="B" number={valueB} onChange={(n: number) => setValueB(n)} />
        <span>{valueA} + {valueB} = {total()}</span>
      </div>
    </div>
  );
}

export default Additionner;
