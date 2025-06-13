import React from 'react';
import moonlustChecklist from '../lib/moonlustChecklist'; // ✅ Đổi từ '@/lib' sang '../lib'

const ChecklistPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✅ Review Tổng thể Source Code Moonlust</h1>
      <ul className="space-y-4">
        {moonlustChecklist.map((item, index) => (
          <li key={index} className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{item.area}</h2>
            <p>
              <strong>Trạng thái:</strong>{' '}
              <span className={item.passed ? 'text-green-600' : 'text-red-600'}>
                {item.passed ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
              </span>
            </p>
            <p className="text-gray-700 mt-1">{item.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistPage;
