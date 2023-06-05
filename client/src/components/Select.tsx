interface SelectProperties {
  className: string;
  placeholder?: string;
  options: Array<{ name: string; value: string }>;
  setOption: Function;
  defaultValue: string;
}

export default function Select({
  className,
  placeholder,
  options,
  setOption,
  defaultValue,
}: SelectProperties) {
  return (
    <select
      className={className}
      aria-label="Selecione um período"
      defaultValue={defaultValue}
      onChange={(e) => setOption(e.target.value)}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
