'use client'
import TextAccordion from '@/components/accordion/TextAccordion'
import { CategoryData } from '@/types/category.type'
import React from 'react'

function FAQs({ category }: { category: CategoryData }) {
  if (category.faqs.length === 0) return null
  return (
    <div className="mx-auto mt-10 w-full">
      <h2 className="mb-4 text-3xl font-semibold">
        {category.name} Frequently Asked Questions
      </h2>
      {category?.faqs?.map((faq) => (
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
