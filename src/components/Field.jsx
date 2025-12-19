import '../styles/Field.css';

function Field({ fieldInfo }) {
  return (
    <div className="field-container">
      <label htmlFor={fieldInfo.id}>{fieldInfo.fieldName}</label>
      <input
        type={fieldInfo.type}
        id={fieldInfo.id}
        placeholder={fieldInfo.placeholder}
        className="field-input"
      />
    </div>
  );
}

export default Field;
