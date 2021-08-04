import React from 'react';

export interface HelloProps {
  name: string;
  backgroundColor?: string;
}

export function Hello({ name, backgroundColor = '#db1457' }: HelloProps) {
  return (
    <div
      style={{
        backgroundColor,
        padding: '10px',
        color: 'white',
        fontSize: '2em',
      }}
    >
      Hello,{' '}
      <span>
        <u>{name}</u>
      </span>
      !
    </div>
  );
}
