'use client';

import { useState } from 'react';
import type { FaqItem } from '@/src/lib/content-types';

export function FaqAccordion({
  items,
  title = 'Pertanyaan yang Sering Diajukan (FAQ)',
}: {
  items: FaqItem[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" aria-label="FAQ">
      <div className="faq-header">
        <span className="eyebrow">TANYA JAWAB RESMI</span>
        <h2>{title}</h2>
      </div>
      <div className="faq-accordion-list">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="faq-answer-pane">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
