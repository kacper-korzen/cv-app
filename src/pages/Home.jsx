import Personal from '../components/Personal';
import SectionList from '../components/SectionList';
import Button from '../components/Button';
import '../styles/Home.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PERSONALFIELDS = [
  {
    fieldName: '',
    id: 'fname',
    type: 'text',
    placeholder: 'Imie i nazwisko',
    className: 'input-h1',
  },
  {
    fieldName: '',
    id: 'email',
    type: 'email',
    placeholder: 'Adres email',
    icon: '✉️',
  },
  {
    fieldName: '',
    id: 'phone',
    type: 'tel',
    placeholder: 'Numer telefonu',
    icon: '📞',
  },
  {
    fieldName: '',
    id: 'address',
    type: 'text',
    placeholder: 'Miasto, Kraj',
    icon: '📍',
  },
];

const EDUCATIONFIELDS = [
  {
    fieldName: 'Uczelnia',
    id: 'university',
    type: 'text',
    placeholder: 'Nazwa uczelni',
  },
  {
    fieldName: 'Stopień studiów',
    id: 'studiesTitle',
    type: 'text',
    placeholder: 'Wpisz stopień/temat studiów',
  },
  {
    fieldName: 'Data rozpoczęcia',
    id: 'startDate',
    type: 'date',
    label: 'Od',
  },
  {
    fieldName: 'Data zakończenia',
    id: 'endDate',
    type: 'date',
    label: 'Do',
  },
];

const EXPERIENCEFIELDS = [
  {
    fieldName: 'Nazwa firmy',
    id: 'company',
    type: 'text',
    placeholder: 'Firma Inc',
  },
  {
    fieldName: 'Stanowisko',
    id: 'positionTitle',
    type: 'text',
    placeholder: 'Opisz stanowisko w pracy',
  },
  {
    fieldName: 'Opis',
    id: 'description',
    type: 'textarea',
    placeholder: 'Opis obowiązków ',
  },
  {
    fieldName: 'Data rozpoczęcia',
    id: 'startDate',
    type: 'date',
    label: 'Od',
  },
  {
    fieldName: 'Data zakończenia',
    id: 'endDate',
    type: 'date',
    label: 'Do',
  },
];

function Home() {
  //

  const [personal, setPersonal] = useState({
    fname: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '123 123 123',
    address: 'Warsaw, Poland',
  });

  const handlePersonalChange = (id, value) =>
    setPersonal((prev) => ({ ...prev, [id]: value }));

  const [experience, setExperience] = useState([
    {
      id: 'exp-' + uuidv4(),
      company: 'Firma Inc',
      positionTitle: 'React Developer',
      description: 'Tworzenie aplikacji za pomocą REACT',
      startDate: '2024-09-10',
      endDate: '2024-12-10',
    },
  ]);

  const addExperience = () => {
    const newExperience = {
      id: 'exp-' + uuidv4(),
      company: 'Nowa Firma Inc',
      positionTitle: 'Developer',
      description: 'Tworzenie aplikacji ',
      startDate: '2024-09-10',
      endDate: '2024-12-10',
    };

    setExperience([...experience, newExperience]);
  };

  const removeExperience = (entryId) => {
    setExperience(experience.filter((entry) => entry.id !== entryId));
  };

  const handleExperienceChange = (entryId, fieldId, value) =>
    setExperience((prev) =>
      prev.map((entry) =>
        entry.id === entryId ? { ...entry, [fieldId]: value } : entry
      )
    );

  const [education, setEducation] = useState([
    {
      id: 'edu-' + uuidv4(),
      university: 'Uniwersytet Warszawski',
      studiesTitle: 'Informatyka stosowana I stopień ',
      startDate: '2024-09-10',
      endDate: '2024-12-10',
    },
  ]);

  const handleEducationChange = (entryId, fieldId, value) =>
    setEducation((prev) =>
      prev.map((entry) =>
        entry.id === entryId ? { ...entry, [fieldId]: value } : entry
      )
    );

  const addEducation = () => {
    const newEducation = {
      id: 'edu-' + uuidv4(),
      university: 'Uniwersytet Nowy',
      studiesTitle: 'Nowy kierunek II stopień ',
      startDate: '2024-09-10',
      endDate: '2024-12-10',
    };

    setEducation([...education, newEducation]);
  };

  const removeEducation = (entryId) => {
    setEducation(education.filter((entry) => entry.id !== entryId));
  };

  const [isPreview, setIsPreview] = useState(false);

  const handlePreview = () => {
    setIsPreview(!isPreview);
  };

  const handleExport = () => {
    window.print();
  };

  return (
    <>
      <div className="cv">
        <div className="menu">
          <Button
            children={isPreview ? 'Edytuj' : 'Podgląd'}
            variant={'preview'}
            onClick={handlePreview}
          />
          <Button
            children={'Drukuj'}
            variant={'export'}
            onClick={handleExport}
          />
        </div>
        <div
          className={isPreview ? 'preview-mode' : ''}
          inert={isPreview ? '' : undefined}
        >
          <Personal
            fields={PERSONALFIELDS}
            values={personal}
            onChange={handlePersonalChange}
          />
          <SectionList
            title={'Edukacja'}
            fields={EDUCATIONFIELDS}
            entries={education}
            onChange={handleEducationChange}
            onAdd={addEducation}
            onRemove={removeEducation}
          />
          <SectionList
            title={'Doświadczenie'}
            fields={EXPERIENCEFIELDS}
            entries={experience}
            onChange={handleExperienceChange}
            onAdd={addExperience}
            onRemove={removeExperience}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
