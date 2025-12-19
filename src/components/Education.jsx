import Field from './Field';

const FIELDS = [
  {
    fieldName: 'Uczelnia',
    id: 'school-' + crypto.randomUUID(),
    type: 'text',
    placeholder: 'Nazwa uczelni',
  },
  {
    fieldName: 'Stopień studiów',
    id: 'studiesTitle-' + crypto.randomUUID(),
    type: 'text',
    placeholder: 'Wpisz stopień/temat studiów',
  },
  {
    fieldName: 'Data rozpoczęcia',
    id: 'startDate-' + crypto.randomUUID(),
    type: 'date',
    placeholder: '08/2024',
  },
  {
    fieldName: 'Data zakończenia',
    id: 'endDate-' + crypto.randomUUID(),
    type: 'date',
  },
];

function Education() {
  return (
    <fieldset className="education-section">
      <legend>Edukacja</legend>
      {FIELDS.map((field) => (
        <Field key={field.id} fieldInfo={{ ...field }} />
      ))}
    </fieldset>
  );
}

export default Education;
