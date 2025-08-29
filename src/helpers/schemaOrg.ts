export const jsonHome = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://trustcoupon.com/#organization',
      url: 'https://trustcoupon.com',
      name: 'TrustCoupon.com',
      logo: 'https://trustcoupon.com/images/logo-with-white-text-and-green-logo.png',
      image:
        'https://trustcoupon.com/images/logo-with-white-text-and-green-logo.png',
      email: 'support@trustcoupon.com',
      sameAs: [
        'https://www.facebook.com/trustcoupon',
        'https://twitter.com/trustcoupon',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://trustcoupon.com/#website',
      url: 'https://trustcoupon.com/',
      name: 'TrustCoupon.com',
      description: 'TrustCoupon.com - Experience your most trusted coupons!',
      publisher: {
        '@id': 'https://trustcoupon.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://trustcoupon.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://trustcoupon.com/#homepage',
      url: 'https://trustcoupon.com/',
      name: 'TrustCoupon.com - Experience your most trusted coupons!',
      description:
        'TrustCoupon.com - We care about saving you money on your purchases. Use and share your most trusted coupons!',
      isPartOf: { '@id': 'https://trustcoupon.com/#website' },
      about: { '@id': 'https://trustcoupon.com/#organization' },
      breadcrumb: { '@id': 'https://trustcoupon.com/#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://trustcoupon.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'HomePage',
          item: 'https://trustcoupon.com/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://trustcoupon.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does TrustCoupon.com help me save money?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At TrustCoupon.com, we make saving money effortless. We provide a curated collection of verified coupons, promo codes, and deals from thousands of your favorite brands. Beyond just codes, our blog offers expert shopping tips, and our cash back program puts money right back into your pocket. We bring all the best ways to save into one place, so every offer you find is trustworthy and ready to use.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you ensure coupons are trustworthy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Our name is our promise. Our commitment is to be your most trusted source for coupons. Every offer on our site goes through a rigorous process: our team of deal curators manually tests and verifies codes daily. Furthermore, our community plays a vital role by sharing their experiences. You can see success rates and feedback on many coupons, giving you the confidence that you're using a truly trustworthy deal.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is TrustCoupon.com free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, it's always 100% free. We care about saving you money, and our service is designed to be accessible to everyone. We are supported by our retail partners, who may pay us a commission when you use our links to make a purchase. This comes at no extra cost to you and allows us to continue our mission of finding and verifying the best deals for our community.",
          },
        },
        {
          '@type': 'Question',
          name: 'How often do you add new deals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team of deal curators works every single day to find and add new offers to our site. We are constantly updating existing deals and sourcing new, exclusive promo codes to ensure our collection is fresh and valuable. We recommend checking back often, especially during major holidays and sales events, to find the latest ways to save.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I submit a coupon that I found?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely! We encourage you to share the great deals you find. Our community is at the heart of what we do. If you have a working coupon code that you dont see on our site, please send it to us through our Submit a Coupon. Our team will verify it, and if it works, well share it with everyone. Thank you for helping the entire TrustCoupon community save money!',
          },
        },
      ],
    },
  ],
}
