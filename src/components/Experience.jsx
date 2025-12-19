import Field from './Field';

const FIELDS = [
  {
    fieldName: 'Nazwa firmy',
    id: 'firma-' + crypto.randomUUID(),
    type: 'text',
    placeholder: 'Firma Inc',
  },
  {
    fieldName: 'Stanowisko',
    id: 'positionTitle-' + crypto.randomUUID(),
    type: 'text',
    placeholder: 'Opisz stanowisko w pracy',
  },
  {
    fieldName: 'Opis',
    id: 'description-' + crypto.randomUUID(),
    type: 'text',
    placeholder: 'Opis obowiązków ',
  },
  {
    fieldName: 'Data rozpoczęcia',
    id: 'startDate-' + crypto.randomUUID(),
    type: 'date',
  },
  {
    fieldName: 'Data zakończenia',
    id: 'endDate-' + crypto.randomUUID(),
    type: 'date',
  },
];

function Experience() {
  return (
    <fieldset className="experience-section">
      <legend>Praca</legend>
      {FIELDS.map((field) => (
        <Field key={field.id} fieldInfo={{ ...field }} />
      ))}
    </fieldset>
  );
}

export default Experience;
