import '../styles/Button.css';

function Button({ children, variant, onClick }) {
  const classVariant =
    {
      add: 'btn-success',
      delete: 'btn-danger',
      preview: 'btn-secondary',
      export: 'btn-primary',
    }[variant] || 'btn-default';

  return (
    <button
      type="button "
      className={`btn-base ${classVariant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
