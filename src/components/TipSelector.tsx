import './TipSelector.css';

import { ChangeEvent, useRef } from 'react';

type TipSelectorProps = {
  tip: number;
  onSelectTip: Function;
};

const TipSelector = ({ tip, onSelectTip }: TipSelectorProps) => {
  const tipValues: number[] = [0.05, 0.1, 0.15, 0.25, 0.5];
  const customRef = useRef<HTMLInputElement>(null);

  function handleTipSelector(event: ChangeEvent<HTMLInputElement>): void {
    if (customRef.current && customRef.current.value) {
      customRef.current.value = '';
    }

    return onSelectTip(+event.currentTarget.value);
  }

  return (
    <section>
      <p className='label pb-5'>Select Tip %</p>
      <fieldset className='tip-selector'>
        {tipValues.map((value: number) => {
          return (
            <div key={value}>
              <input
                className='tip-selector__check'
                id={`tip${value}`}
                type='radio'
                name='tip'
                value={value}
                checked={value === tip}
                onChange={handleTipSelector}
              />
              <label className='tip-selector__label' htmlFor={`tip${value}`}>
                {value * 100}%
              </label>
            </div>
          );
        })}
        <input
          className='input'
          placeholder='Custom'
          type='number'
          onChange={e => onSelectTip(+e.target.value / 100)}
          onFocus={e => e.target.select()}
          ref={customRef}
        />
      </fieldset>
    </section>
  );
};

export default TipSelector;
