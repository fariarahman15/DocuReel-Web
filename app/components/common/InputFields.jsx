export function TextInput({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="text-blue-900">{label}</span>
      <input
        type="text"
        className="input-primary"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

export function NumberInput({ label, value, onChange, placeholder, error }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="block">
        <span className="text-blue-900">{label}</span>
        <input
          type="number"
          className="input-primary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </label>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

export function SelectInput({
  label,
  options,
  value,
  onChange,
  error,
  defaultValue,
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="block">
        <span className="text-blue-900">{label}</span>
        <select
          className="input-primary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled hidden>
            {defaultValue}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

export function DateInput({ label, value, onChange, error }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="block">
        <span className="text-blue-900">{label}</span>
        <input
          type="date"
          className="input-primary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

export function RadioGroup({ options, selectedOption, onChange }) {
  return (
    <>
      {options.map((option) => (
        <label
          key={option.id}
          htmlFor={option.id}
          className="flex items-center text-sm font-medium text-blue-900"
        >
          <input
            id={option.id}
            type="radio"
            value={option.value}
            name="type-group"
            checked={selectedOption === option.value}
            onChange={() => onChange(option.value)}
            className="w-3 h-3 me-2 text-blue-900 bg-gray-100 border-gray-300 focus:ring-blue-900"
          />{" "}
          <span className="text-blue-900">{option.label}</span>
        </label>
      ))}
    </>
  );
}

export default function Form() {
  return (
    <>
      <TextInput />
      <NumberInput />
      <SelectInput />
      <DateInput />
      <RadioGroup />
    </>
  );
}
