'use client'
import React from 'react'

const events = [
  [
    'Summer Deals',
    'Prime Deals',
    'Back-To-School',
    'Labor Day',
    'Halloween',
    'Fall Deals',
    'Cash Back Day',
    'Veterans Day',
    'Black Friday',
  ],
  [
    'Cyber Monday',
    'Holiday Deals',
    'Christmas',
    "New Year's",
    'MLK Weekend',
    'Game Day',
    "Valentine's Day",
    "Presidents' Day",
    'Winter Clearance',
  ],
  [
    'Spring Savecation',
    'Tax Day',
    "Mother's Day",
    'Memorial Day',
    'Spring Deals',
    'Summer Checklist',
    "Father's Day",
  ],
]

function ShoppingEvents() {
  return (
    <div className="mx-auto py-8 md:py-10">
      <h2 className="text-[21px] font-bold mb-6">
        2025 Seasonal Shopping Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-2">
        {events.map((col, colIndex) => (
          <ul key={colIndex} className="space-y-2 ">
            {col.map((event, index) => (
              <li
                className="text-gray-600 text=[16px] md:text-[20px] cursor-pointer hover:underline"
                key={index}
              >
                {event}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default ShoppingEvents
