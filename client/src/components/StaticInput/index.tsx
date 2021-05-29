import React from 'react';

type IInputText = {
  text: string;
  label: string;
  classes: string;
};

const StaticInput: React.FC<IInputText> = ({
  text,
  label,
  classes,
}: IInputText) => (
  <form>
    <label htmlFor={label}>{label}: $</label>
    <input className={classes} id={label} type="text" value={text} disabled />
  </form>
);

export default StaticInput;
