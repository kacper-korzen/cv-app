import Field from './Field';

function Experience({ fields }) {
  return (
    <fieldset className="experience-section">
      <legend>Praca</legend>
      {fields.map((field) => (
        <Field key={field.id} fieldInfo={field} />
      ))}
    </fieldset>
  );
}

export default Experience;
