// src/components/Table.js

import React from 'react';
import classNames from 'classnames';

const Table = ({ data, columns }) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-300">
          {columns.map((column) => (
            <th
              key={column.key}
              className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={classNames({ 'bg-gray-100': rowIndex % 2 === 0 })}>
            {columns.map((column) => (
              <td key={column.key} className="px-6 py-4 whitespace-nowrap border-b">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
