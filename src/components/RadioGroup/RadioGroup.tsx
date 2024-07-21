import { ChangeEventHandler } from 'react';

interface Props {
  name: string;
  selected: string | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
  options: Record<string, string> | string[];
}

function RadioGroup({ name, options, selected, onChange }: Props) {
  const optionsIsArray = Array.isArray(options);
  return (
    <div>
      {Object.entries(options).map(([key, label]) => {
        const value = optionsIsArray ? label : key;
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
    </div>
  );
}

export default RadioGroup;
