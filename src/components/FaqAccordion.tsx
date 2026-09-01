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
          const contentId = `faq-pane-${idx}`;
          const buttonId = `faq-btn-${idx}`;

          return (
            <div key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                id={buttonId}
                className="faq-question-btn"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={contentId}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="18"
                    height="18"
                    className={`faq-chevron ${isOpen ? 'is-rotated' : ''}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={`faq-answer-pane ${isOpen ? 'is-expanded' : ''}`}
                style={{ display: isOpen ? 'block' : 'none' }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
