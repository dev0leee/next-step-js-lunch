const Select = ({
  name,
  id,
  className,
  options = [],
  defaultValue,
  onChange,
} = {}) => {
  const select = document.createElement('select');

  if (name) {
    select.name = name;
  }
  if (id) {
    select.id = id;
  }
  if (className) {
    select.classList.add(className);
  }

  if (options.length === 0) {
    const defaultOption = document.createElement('option');

    defaultOption.value = '';
    defaultOption.textContent = '선택';
    defaultOption.selected = true;

    select.appendChild(defaultOption);
    return select;
  }

  options.forEach(({ value = '', text = '' }) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;

    if (value === defaultValue) {
      option.selected = true;
    }

    select.appendChild(option);
  });

  if (onChange) {
    select.addEventListener('change', onChange);
  }

  return select;
};

export default Select;
