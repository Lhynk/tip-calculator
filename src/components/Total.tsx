import './Total.css';

import { MouseEventHandler } from 'react';

type TotalProps = {
  result: { totalPerPerson: number; tipAmount: number };
  onReset: MouseEventHandler<HTMLButtonElement>;
};

export const Total = ({ result, onReset }: TotalProps) => {
  return (
    <div className='total'>
      <section className='total__section'>
        <div>
          <p className='total__section__title'>Tip Amount</p>
          <p className='total__section__sub-info'>/ person</p>
        </div>
        <p className='total__section__amount'>${result.tipAmount.toFixed(2)}</p>
      </section>
      <section className='total__section'>
        <div>
          <p className='total__section__title'>Total</p>
          <p className='total__section__sub-info'>/ person</p>
        </div>
        <p className='total__section__amount'>${result.totalPerPerson.toFixed(2)}</p>
      </section>
      <button type='button' className='total__button' onClick={onReset}>
        Reset
      </button>
    </div>
  );
};
