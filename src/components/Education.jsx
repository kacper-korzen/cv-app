import Field from './Field';

function Education({ fields }) {
  return (
    <fieldset className="education-section">
      <legend>Edukacja</legend>
      {fields.map((field) => (
        <Field key={field.id} fieldInfo={field} />
      ))}
    </fieldset>
  );
}

export default Education;
