'use client'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FaSearch } from 'react-icons/fa'
import { SubmitFormSchema } from '@/helpers/schemas'
import { searchStore } from '@/services/clientApi'
import { StoreData } from '@/types/store.type'
import UseAppStore from '@/stores/app.store'
import { CouponType } from '@/types/enum'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
type SubmitFormType = z.infer<typeof SubmitFormSchema>

const defaultValues: SubmitFormType = {
  title: '',
  code: '',
  offer_detail: '',
  is_exclusive: false,
  start_date: '',
  expire_date: '',
  categories: [],
  store_id: -1,
  type: '',
  offer_link: '',
}

function SubmitForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SubmitFormType>({
    resolver: zodResolver(SubmitFormSchema),
    defaultValues,
  })

  const onSubmit = (data: SubmitFormType) => console.log(data)

  const COUPON_TYPES = Object.values(CouponType)

  // State for search input and suggestions
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState<StoreData[]>([])
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false)
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const categories = UseAppStore((state) => state.categories)
  const [open, setOpen] = useState(false)
  const multiSelectorSef = useRef<HTMLDivElement>(null)

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

  const selectedType = watch('type')
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
    setSearchText(suggestion.name)
  }
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement>,
    /* eslint-disable @typescript-eslint/no-explicit-any */
    onChange: (...event: any[]) => void,
  ) => {
    const selectedType = e.target.value

    // Gọi onChange để cập nhật 'type' trong form state
    onChange(e)

    // Xử lý logic liên quan
    if (selectedType !== CouponType.CODE) {
      setValue('code', '')
    }
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      setTimeout(() => {
        if (
          multiSelectorSef.current &&
          !multiSelectorSef.current.contains(event.target as Node) &&
          open
        ) {
          setOpen(false)
        }
      }, 0)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])
  // const payload: CouponPayload = {
  //     ...data,
  //     is_exclusive: Number(data.is_exclusive) === 0,
  //     expire_date: dayjs(data.expire_date).format('YYYY/MM/DD'),
  //     start_date: dayjs(data.start_date).format('YYYY/MM/DD'),
  //     type: data.type as CouponType,
  //   };
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
                className={`textfield-${errors.store_id ? 'error' : 'primary'} w-full pl-10`}
                type="text"
                placeholder="Search store..."
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
                    {store.name}
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
            <Controller
              control={control}
              name="type"
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <select
                    className="textfield-primary w-full py-3"
                    id="type"
                    ref={ref}
                    value={value}
                    onChange={(e) => handleChange(e, onChange)}
                  >
                    <option value="">Select a type</option>
                    {COUPON_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                )
              }}
            />
          </fieldset>
          {errors.type && (
            <p className="error-message">{errors.type.message}</p>
          )}
        </div>
        {selectedType === CouponType.CODE && (
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
        )}

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
          <Controller
            control={control}
            name="start_date"
            render={({ field }) => {
              return (
                <fieldset className="fieldset-container relative w-full">
                  <DatePicker
                    ref={field.ref}
                    placeholderText="When does the coupon start?"
                    dateFormat={'dd/MM/yyyy'}
                    className={`textfield-${errors.expire_date ? 'error' : 'primary'} w-full`}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) =>
                      field.onChange(dayjs(date).format('YYYY/MM/DD'))
                    }
                  />
                </fieldset>
              )
            }}
          />

          {errors.start_date && (
            <p className="error-message">{errors.start_date.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <Controller
            control={control}
            name="expire_date"
            render={({ field }) => (
              <fieldset className="fieldset-container relative">
                <DatePicker
                  ref={field.ref}
                  placeholderText="When does the coupon end?"
                  dateFormat={'dd/MM/yyyy'}
                  className={`textfield-${errors.expire_date ? 'error' : 'primary'} w-full`}
                  selected={field.value ? new Date(field.value) : null}
                  onChange={(date) =>
                    field.onChange(dayjs(date).format('YYYY/MM/DD'))
                  }
                />
              </fieldset>
            )}
          />

          {errors.expire_date && (
            <p className="error-message">{errors.expire_date.message}</p>
          )}
        </div>

        <div className="form-control mb-4">
          <fieldset className="fieldset-container relative">
            <Controller
              name="categories"
              control={control}
              render={({ field }) => {
                const selectedLabels = categories
                  .filter((opt) => field.value?.includes(opt.id))
                  .map((opt) => opt.name)
                  .join(', ')
                return (
                  <div className="relative w-full" ref={multiSelectorSef}>
                    <button
                      type="button"
                      onClick={() => setOpen(!open)}
                      className="textfield-primary flex h-[50px] w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm shadow-sm"
                    >
                      <span className="truncate">
                        {selectedLabels || 'Select...'}
                      </span>
                      {/* <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-400" /> */}
                    </button>

                    {open && (
                      <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-white shadow-lg">
                        {categories.map((opt) => (
                          <label
                            key={opt.id}
                            className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-50"
                          >
                            <input
                              type="checkbox"
                              checked={field.value?.includes(opt.id)}
                              onChange={() => {
                                const newValue = field.value?.includes(opt.id)
                                  ? field.value.filter((v: any) => v !== opt.id)
                                  : [...(field.value || []), opt.id]
                                field.onChange(newValue)
                              }}
                              className="mr-2 rounded"
                            />
                            {opt.name}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }}
            />
          </fieldset>
          {errors.categories && (
            <p className="error-message">{errors.categories.message}</p>
          )}
        </div>

        <button type="submit" className="btn-primary mx-auto mt-2 w-44">
          Submit
        </button>
        <button
          onClick={() => {
            reset(defaultValues)
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
