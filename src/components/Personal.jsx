import Field from './Field';

function Personal({ fields }) {
  return (
    <form action="">
      <fieldset className="personal-section">
        <legend>Dane osobowe</legend>
        {fields.map((field) => (
          <Field key={field.id} fieldInfo={field} />
        ))}
      </fieldset>
    </form>
  );
}

export default Personal;
