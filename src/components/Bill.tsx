import { ReactComponent as DollarIcon } from '../assets/images/icon-dollar.svg';

type BillProps = {
  bill: number;
  onChange: Function;
};

export const Bill = ({ bill, onChange }: BillProps) => {
  return (
    <>
      <p className='label pb-3'>Bill</p>
      <div className='input-wrapper'>
        <input
          className='input'
          placeholder='0.00'
          type='number'
          value={bill}
          onChange={e => onChange(e.target.value)}
          onFocus={e => e.target.select()}
        />
        <DollarIcon className='input__icon' />
      </div>
    </>
  );
};
