import React from 'react';

export interface HelloProps {
  name: string;
}

export function Hello({ name }: HelloProps) {
  return (
    <div style={{ background: '#db1457' }}>
      Hello,{' '}
      <span style={{ color: 'white' }}>
        <u>{name}</u>
      </span>
    </div>
  );
}
