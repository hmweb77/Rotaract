"use client"
import { useState } from 'react';
import Questions from '@/questions';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = index => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="my-8 mx-4">
      <h1 className="text-3xl font-bold mb-6">F.A.Q</h1>
      <div className="space-y-4">
        {Questions.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full text-left text-red-500 hover:text-red-700 focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              {/* use icons */}
              <span>{openFAQ === index ? '▼' : '▶︎'}</span>
            </button>
            <div className={`mt-2 pl-4 pr-2 border-l-2 border-gray-200 ${openFAQ === index ? 'block' : 'hidden'}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
