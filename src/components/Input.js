const Input = ({
  value,
  onChange,
  type = 'text',
  placeholder = '',
  error = '',
  className = '',
  ...rest
}) => {
  return (
    <div className={`input-container ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? 'input-error' : ''}`}
        aria-label={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? error : undefined}
        {...rest}
      />
      {error && (
        <span className='error-text' role='alert'>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
