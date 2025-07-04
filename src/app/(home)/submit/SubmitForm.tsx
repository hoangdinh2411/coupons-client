/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FaSearch } from 'react-icons/fa'
import { SubmitFormSchema } from '@/helpers/schemas'

type SubmitFormType = z.infer<typeof SubmitFormSchema>

function SubmitForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SubmitFormType>({
    resolver: zodResolver(SubmitFormSchema),
  })

  const onSubmit = (data: SubmitFormType) => console.log(data)

  const COUPON_TYPES = ['Online Code', 'In-Store Offer', 'Sale']
  const CATEGORIES = ['Electronics', 'Clothing', 'Books', 'Other']
  const STORES = [
    'Store A',
    'Store B',
    'Store C',
    'Amazon',
    'Walmart',
    'Target',
  ]

  // State for search input and suggestions
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false)

  // Handle store input change and filter suggestions
  const handleStoreInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setValue('store', value) // Update form value

    if (value.length > 0) {
      const filteredSuggestions = STORES.filter((store) =>
        store.toLowerCase().includes(value.toLowerCase()),
      )
      setSuggestions(filteredSuggestions)
      setIsSuggestionsVisible(true)
    } else {
      setSuggestions([])
      setIsSuggestionsVisible(false)
    }
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion)
    setValue('store', suggestion) // Update form value
    setSuggestions([])
    setIsSuggestionsVisible(false)
  }

  return (
    <div className="flex justify-center bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-6 flex w-full max-w-md flex-col rounded-lg p-4 sm:max-w-3xl sm:p-6 md:max-w-4xl lg:max-w-3xl"
      >
        <h2 className="mt-8 mb-16 text-center text-4xl font-bold">
          Submit An Offer
        </h2>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <div className="relative w-full">
              <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 transform text-gray-300" />
              <input
                {...register('store')}
                className={`textfield-${errors.store ? 'error' : 'primary'} w-full pl-10`}
                id="store"
                type="text"
                placeholder="Enter store name"
                value={searchTerm}
                onChange={handleStoreInputChange}
                onBlur={() =>
                  setTimeout(() => setIsSuggestionsVisible(false), 200)
                }
                onFocus={() => searchTerm && setIsSuggestionsVisible(true)}
              />
            </div>
            {isSuggestionsVisible && suggestions.length > 0 && (
              <ul className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md border border-gray-300 bg-white">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </fieldset>
          {errors.store && (
            <p className="error-message">{errors.store.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <input
              {...register('title')}
              className={`textfield-${errors.title ? 'error' : 'primary'} w-full`}
              id="title"
              type="text"
              placeholder="Enter coupon title"
            />
          </fieldset>
          {errors.title && (
            <p className="error-message">{errors.title.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <input
              {...register('code')}
              className={`textfield-${errors.code ? 'error' : 'primary'} w-full`}
              id="code"
              type="text"
              placeholder="Enter coupon code"
            />
          </fieldset>
          {errors.code && (
            <p className="error-message">{errors.code.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <input
              {...register('offerLink')}
              className={`textfield-${errors.offerLink ? 'error' : 'primary'} w-full`}
              id="offerLink"
              type="url"
              placeholder="Enter offer link"
            />
          </fieldset>
          {errors.offerLink && (
            <p className="error-message">{errors.offerLink.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset
            style={{ paddingBottom: '0px', height: 'auto' }}
            className="fieldset-container min-h-[180px]"
          >
            <textarea
              {...register('offerDetail')}
              className={`textarea-${errors.offerDetail ? 'error' : 'primary'} min-h-[180px] w-full px-2`}
              id="offerDetail"
              placeholder="Enter coupon description"
              minLength={180}
            />
          </fieldset>
          {errors.offerDetail && (
            <p className="error-message mt-[2px]">
              {errors.offerDetail.message}
            </p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <legend className={`legend-placeholder mt-[6px] ml-[4px]`}>
              Start Date (optional)
            </legend>
            <input
              {...register('startDate')}
              className={`textfield-${errors.startDate ? 'error' : 'primary'} w-full pt-6`}
              id="startDate"
              type="date"
              onFocus={(e) =>
                e.currentTarget.showPicker && e.currentTarget.showPicker()
              }
              placeholder="dd/mm/yyyy"
            />
          </fieldset>
          {errors.startDate && (
            <p className="error-message">{errors.startDate.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <legend className={`legend-placeholder mt-[6px] ml-[4px]`}>
              Expire Date (optional)
            </legend>
            <input
              {...register('expireDate')}
              className={`textfield-${errors.expireDate ? 'error' : 'primary'} w-full pt-6`}
              id="expireDate"
              onFocus={(e) =>
                e.currentTarget.showPicker && e.currentTarget.showPicker()
              }
              type="date"
              placeholder="dd/mm/yyyy"
            />
          </fieldset>
          {errors.expireDate && (
            <p className="error-message">{errors.expireDate.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <select
              {...register('couponType')}
              className="textfield-primary w-full py-3"
              id="couponType"
            >
              <option value="">Select a type</option>
              {COUPON_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </fieldset>
          {errors.couponType && (
            <p className="error-message">{errors.couponType.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <select
              {...register('category')}
              className={`textfield-${errors.category ? 'error' : 'primary'} w-full py-3`}
              id="category"
            >
              <option value="">Select a category</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </fieldset>
          {errors.category && (
            <p className="error-message">{errors.category.message}</p>
          )}
        </div>

        <button type="submit" className="btn-primary mx-auto mt-2 w-44">
          Submit
        </button>
        <button
          onClick={() => {
            reset()
            setSearchTerm('')
            setSuggestions([])
            setIsSuggestionsVisible(false)
          }}
          type="reset"
          className="mx-auto mt-4 w-44 cursor-pointer text-gray-600 underline"
        >
          Clear Form
        </button>
        <div className="mt-2 text-[12px] text-slate-400">
          Please only submit publicly available coupon codes and not private or
          internal company codes. When in doubt, please obtain permission from
          the merchant first. See our Terms and Conditions for more information
          regarding user generated content. Thank you very much!
        </div>
      </form>
    </div>
  )
}

export default SubmitForm
