'use client'
import TextAccordion from '@/components/accordion/TextAccordion'
import { StoreData } from '@/types/store.type'
import React from 'react'

function FAQs({ store }: { store: StoreData }) {
  return (
    <div className="mx-auto mb-10 w-full">
      <h2 className="mb-4 text-3xl font-semibold">
        {store.name} Frequently Asked Questions
      </h2>
      {store.faqs.map((faq) => (
        <TextAccordion
          key={faq.id}
          className="lg:my-6"
          summary={faq.question}
          content={<p>{faq.answer}</p>}
        />
      ))}
    </div>
  )
}

export default FAQs
