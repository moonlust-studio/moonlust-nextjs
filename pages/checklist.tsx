import React from 'react';
import moonlustChecklist from '../lib/moonlustChecklist';

export default function ChecklistPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>✅ Moonlust Checklist</h1>
      <ul>
        {moonlustChecklist.map((item, index) => (
          <li key={index}>
            <strong>{item.area}:</strong> {item.passed ? '✅' : '❌'} - {item.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}
