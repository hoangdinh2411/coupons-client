import React from 'react'

const OffersTable = () => {
  const offers = [
    {
      discount: '15%',
      description: '15% Off Your Order',
      expiration: 'Jan 2, 2026',
    },
    {
      discount: '40%',
      description: '40% Off Sitewide',
      expiration: 'Sep 8, 2023',
    },
    {
      discount: '20%',
      description: '20% Off Sitewide',
      expiration: 'May 10, 2024',
    },
    {
      discount: '20%',
      description: '20% Off Sitewide',
      expiration: 'May 4, 2024',
    },
    {
      discount: '20%',
      description: '20% Off Sitewide',
      expiration: 'Mar 15, 2024',
    },
  ]

  return (
    <div className="mx-auto mt-20 mb-10 w-full rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-[#F9FAFB]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b-slate-600 px-4 py-4 text-start text-sm text-gray-700 uppercase">
                Discount
              </th>
              <th className="border-b-slate-600 px-4 py-4 text-start text-sm text-gray-700 uppercase">
                Offer Description
              </th>
              <th className="border-b-slate-600 px-4 py-4 text-start text-sm text-gray-700 uppercase">
                Expiration Date
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border-b-slate-600 px-4 py-4 text-start text-gray-500">
                  {offer.discount}
                </td>
                <td className="border-b-slate-600 px-4 py-4 text-gray-500">
                  {offer.description}
                </td>
                <td className="border-b-slate-600 px-4 py-4 text-start text-gray-500">
                  {offer.expiration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OffersTable
