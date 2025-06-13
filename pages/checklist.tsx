// pages/checklist.tsx
import React from 'react';
import moonlustChecklist from '../lib/moonlustChecklist';

export default function ChecklistPage() {
  return (
    <div>
      <h1>Checklist</h1>
      <ul>
        {moonlustChecklist.map((item, index) => (
          <li key={index}>
            ✅ <strong>{item.area}</strong> – {item.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}
