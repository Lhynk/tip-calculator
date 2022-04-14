import { ReactComponent as PersonIcon } from '../assets/images/icon-person.svg';

type PersonsProps = {
  persons: number;
  onChange: Function;
};

export const Persons = ({ persons, onChange }: PersonsProps) => {
  return (
    <>
      <p className='label pb-3'>Number of People</p>
      <div className='input-wrapper'>
        <input
          className='input'
          placeholder='0'
          type='number'
          value={persons}
          onChange={e => onChange(e.target.value)}
          onFocus={e => e.target.select()}
        />
        <PersonIcon className='input__icon' />
      </div>
    </>
  );
};
