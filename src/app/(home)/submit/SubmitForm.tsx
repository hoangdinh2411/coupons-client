/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FaSearch } from 'react-icons/fa'
import { SubmitFormSchema } from '@/helpers/schemas'
import { searchStore } from '@/services/clientApi'
import { StoreData } from '@/types/store.type'

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

  // State for search input and suggestions
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState<StoreData[]>([])
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false)
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  // Handle store input change and filter suggestions
  const handleStoreInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchText(value)
    setIsTyping(true)
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchText)
    }, 1000)

    return () => clearTimeout(handler)
  }, [searchText])

  useEffect(() => {
    if (debouncedQuery && isTyping) {
      searchStore('', debouncedQuery).then((res) => {
        if (!res.data) return
        setSuggestions(res?.data)
        if (res.data) {
          setIsSuggestionsVisible(true)
        }
      }) // gọi API ở đây
    } else {
      setSuggestions([])
    }
  }, [debouncedQuery])

  // Handle suggestion click
  const handleSelectStore = (suggestion: StoreData) => {
    setIsTyping(false)
    setValue('store_id', suggestion.id) // Update form value
    setSearchText(suggestion.url)
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
                {...register('store_id')}
                className={`textfield-${errors.store_id ? 'error' : 'primary'} w-full pl-10`}
                id="store"
                type="text"
                placeholder="Enter store name"
                value={searchText}
                onChange={handleStoreInputChange}
              />
            </div>
            {isTyping && isSuggestionsVisible && suggestions.length > 0 && (
              <ul className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md border border-gray-300 bg-white">
                {suggestions.map((store) => (
                  <li
                    key={store.id}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                    onClick={() => handleSelectStore(store)}
                  >
                    {store.url}
                  </li>
                ))}
              </ul>
            )}
          </fieldset>
          {errors.store_id && (
            <p className="error-message">{errors.store_id.message}</p>
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
              {...register('offer_link')}
              className={`textfield-${errors.offer_link ? 'error' : 'primary'} w-full`}
              id="offer_link"
              type="url"
              placeholder="Enter offer link"
            />
          </fieldset>
          {errors.offer_link && (
            <p className="error-message">{errors.offer_link.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset
            style={{ paddingBottom: '0px', height: 'auto' }}
            className="fieldset-container min-h-[180px]"
          >
            <textarea
              {...register('offer_detail')}
              className={`textarea-${errors.offer_detail ? 'error' : 'primary'} min-h-[180px] w-full px-2`}
              id="offer_detail"
              placeholder="Enter coupon description"
            />
          </fieldset>
          {errors.offer_detail && (
            <p className="error-message mt-[2px]">
              {errors.offer_detail.message}
            </p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <legend className={`legend-placeholder mt-[6px] ml-[4px]`}>
              Start Date (optional)
            </legend>
            <input
              {...register('start_date')}
              className={`textfield-${errors.start_date ? 'error' : 'primary'} w-full pt-6`}
              id="start_date"
              type="date"
              onFocus={(e) =>
                e.currentTarget.showPicker && e.currentTarget.showPicker()
              }
              placeholder="dd/mm/yyyy"
            />
          </fieldset>
          {errors.start_date && (
            <p className="error-message">{errors.start_date.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <legend className={`legend-placeholder mt-[6px] ml-[4px]`}>
              Expire Date (optional)
            </legend>
            <input
              {...register('expire_date')}
              className={`textfield-${errors.expire_date ? 'error' : 'primary'} w-full pt-6`}
              id="expire_date"
              onFocus={(e) =>
                e.currentTarget.showPicker && e.currentTarget.showPicker()
              }
              type="date"
              placeholder="dd/mm/yyyy"
            />
          </fieldset>
          {errors.expire_date && (
            <p className="error-message">{errors.expire_date.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <select
              {...register('type')}
              className="textfield-primary w-full py-3"
              id="type"
            >
              <option value="">Select a type</option>
              {COUPON_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </fieldset>
          {errors.type && (
            <p className="error-message">{errors.type.message}</p>
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
            setSearchText('')
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
