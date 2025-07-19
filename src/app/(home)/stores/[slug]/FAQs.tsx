import TextAccordion from '@/components/accordion/TextAccordion'
import React from 'react'

function FAQs() {
  return (
    <div className="mx-auto mb-10 w-full">
      <h2 className="mb-4 text-3xl font-semibold">
        A Pea in the Pod Frequently Asked Questions
      </h2>
      <TextAccordion
        className="lg:my-6"
        summary="Are there any deals available for A Pea in the Pod today?"
        content={
          <p>
            Yes, there are deals available today, including 15% off your order
            and 40% off sitewide. Check the official website for the latest
            offers.
          </p>
        }
      />
      <TextAccordion
        className="lg:my-6"
        summary="How many verified promo codes are currently available for A Pea in the Pod?"
        content={<p>There are 12 verified coupon codes currently available.</p>}
      />
      <TextAccordion
        className="lg:my-6"
        summary="What is the best offer available today at A Pea in the Pod?"
        content={<p>The best offer today is 40% off sitewide.</p>}
      />
      <TextAccordion
        className="lg:my-6"
        summary="How do I get A Pea In the Pod coupons?"
        content={
          <p>
            You can find coupons on the official A Pea in the Pod website or
            through promotional emails after signing up.
          </p>
        }
      />
      <TextAccordion
        className="lg:my-6"
        summary="Can you stack coupons at A Pea in the Pod?"
        content={
          <p>
            Stacking coupons is not typically allowed; please check the terms on
            their website.
          </p>
        }
      />
      <TextAccordion
        className="lg:my-6"
        summary="Does A Pea in the Pod have in-store or curbside pickup?"
        content={
          <p>
            Currently, there are no in-store or curbside pickup options
            available.
          </p>
        }
      />
      <TextAccordion
        className="lg:my-6"
        summary="How do I sign up for rewards with A Pea in the Pod?"
        content={
          <p>
            Visit the A Pea in the Pod website and look for the rewards program
            signup under the account section.
          </p>
        }
      />
      <TextAccordion
        className="lg:my-6"
        summary="What is A Pea in the Pod's shipping policy?"
        content={
          <p>
            Shipping details vary; they offer free shipping deals, check their
            site for current rates and policies.
          </p>
        }
      />
      <TextAccordion
        className="lg:my-6"
        summary="How do I get free shipping at A Pea in the Pod?"
        content={
          <p>
            Look for free shipping deals, often available with specific
            promotions or orders over a certain amount.
          </p>
        }
      />
      <TextAccordion
        className="lg:my-6"
        summary="What is A Pea in the Pod's return policy?"
        content={
          <p>
            Items can typically be returned within 30 days; refer to their
            website for full details.
          </p>
        }
      />
    </div>
  )
}

export default FAQs
