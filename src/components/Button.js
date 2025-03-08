const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'small',
  disabled = false,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} btn-${size} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel || children}
      role='button'
    >
      {children}
    </button>
  );
};

export default Button;
