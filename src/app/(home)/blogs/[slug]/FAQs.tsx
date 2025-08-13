import TextAccordion from '@/components/accordion/TextAccordion'
import { FAQData } from '@/types/store.type'
import React from 'react'

function FAQs({ faqs }: { faqs: FAQData[] }) {
  return (
    <div className="mx-auto mb-10 w-full">
      <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
      {faqs.map((faq) => (
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
