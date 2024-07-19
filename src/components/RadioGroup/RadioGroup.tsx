import { ChangeEventHandler } from 'react';

interface Props {
  name: string;
  selected: string | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
  options: Record<string, string>;
}

function RadioGroup({ name, options, selected, onChange }: Props) {
  return (
    <>
      {Object.entries(options).map(([value, label]) => {
        const id = `${name}-${value}`;
        return (
          <label key={id} htmlFor={id}>
            <input
              id={id}
              type="radio"
              name={name}
              value={value}
              checked={selected === value}
              onChange={onChange}
            />
            {label}
          </label>
        );
      })}
    </>
  );
}

export default RadioGroup;
