/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { SubmitFormSchema } from '@/helpers/schemas'

type SubmitFormType = z.infer<typeof SubmitFormSchema>

const SubmitPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    trigger,
  } = useForm<SubmitFormType>({
    resolver: zodResolver(SubmitFormSchema),
  })

  const onSubmit = (data: SubmitFormType) => console.log(data)

  const COUPON_TYPES = ['Online Code', 'In-Store Offer', 'Sale']
  const CATEGORIES = ['Electronics', 'Clothing', 'Books', 'Other']
  const STORES = ['Store A', 'Store B', 'Store C']

  const watchFields = watch()

  const handleChange = async (name: any, value: any) => {
    console.log('💲💲💲 ~ handleChange ~ value:', value)
    await trigger(name)
  }

  return (
    <div className="flex justify-center bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-md flex-col rounded-lg p-4 sm:max-w-2xl sm:p-6 lg:max-w-2xl"
      >
        <h2 className="mt-6 mb-8 text-center text-3xl font-bold">
          Submit An Offer
        </h2>
        <div className="form-control">
          <fieldset className="fieldset-container relative">
            <input
              {...register('title')}
              className={`textfield-${errors.title ? 'error' : 'primary'} w-full`}
              id="title"
              type="text"
              placeholder="Enter coupon title"
              onChange={(e) => handleChange('title', e.target.value)}
            />
          </fieldset>
          {errors.title && (
            <p className="error-message">{errors.title.message}</p>
          )}
        </div>
        <div className="form-control">
          <fieldset className="fieldset-container relative">
            <input
              {...register('offerLink')}
              className={`textfield-${errors.offerLink ? 'error' : 'primary'} w-full`}
              id="offerLink"
              type="url"
              placeholder="Enter offer link"
              onChange={(e) => handleChange('offerLink', e.target.value)}
            />
          </fieldset>
          {errors.offerLink && (
            <p className="error-message">{errors.offerLink.message}</p>
          )}
        </div>
        <div className="form-control">
          <fieldset className="fieldset-container relative">
            <textarea
              {...register('offerDetail')}
              className={`textfield-${errors.offerDetail ? 'error' : 'primary'} min-h-[100px] w-full px-2`}
              id="offerDetail"
              placeholder="Enter store description"
              onChange={(e) => handleChange('offerDetail', e.target.value)}
            />
          </fieldset>
          {errors.offerDetail && (
            <p className="error-message">{errors.offerDetail.message}</p>
          )}
        </div>
        <div className="form-control">
          <fieldset className="fieldset-container relative">
            <input
              {...register('code')}
              className={`textfield-${errors.code ? 'error' : 'primary'} w-full`}
              id="code"
              type="text"
              placeholder="Enter coupon title"
              onChange={(e) => handleChange('code', e.target.value)}
            />
          </fieldset>
          {errors.code && (
            <p className="error-message">{errors.code.message}</p>
          )}
        </div>
        <div className="form-control">
          <fieldset className="fieldset-container relative">
            <legend
              className={`legend-placeholder ${watchFields.startDate ? 'filled' : ''}`}
            >
              Start Date (optional)
            </legend>
            <input
              {...register('startDate')}
              className={`textfield-${errors.startDate ? 'error' : 'primary'} w-full pt-4`}
              id="startDate"
              type="date"
              placeholder="dd/mm/yyyy"
              onChange={(e) => handleChange('startDate', e.target.value)}
            />
          </fieldset>
          {errors.startDate && (
            <p className="error-message">{errors.startDate.message}</p>
          )}
        </div>
        <div className="form-control">
          <fieldset className="fieldset-container relative">
            <legend
              className={`legend-placeholder ${watchFields.expireDate ? 'filled' : ''}`}
            >
              Expire Date (optional)
            </legend>
            <input
              {...register('expireDate')}
              className={`textfield-${errors.expireDate ? 'error' : 'primary'} w-full pt-4`}
              id="expireDate"
              type="date"
              placeholder="dd/mm/yyyy"
              onChange={(e) => handleChange('expireDate', e.target.value)}
            />
          </fieldset>
          {errors.expireDate && (
            <p className="error-message">{errors.expireDate.message}</p>
          )}
        </div>
        <div className="form-control">
          <fieldset className="fieldset-container relative">
            <select
              {...register('couponType')}
              className="textfield-primary w-full pt-4"
              id="couponType"
              onChange={(e) => handleChange('couponType', e.target.value)}
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
        <div className="form-control">
          <fieldset className="fieldset-container relative">
            <select
              {...register('category')}
              className={`textfield-${errors.category ? 'error' : 'primary'} w-full pt-4`}
              id="category"
              onChange={(e) => handleChange('category', e.target.value)}
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
        <div className="form-control">
          <fieldset className="fieldset-container relative">
            <select
              {...register('store')}
              className={`textfield-${errors.store ? 'error' : 'primary'} w-full pt-4`}
              id="store"
              onChange={(e) => handleChange('store', e.target.value)}
            >
              <option value="">Please select a store</option>
              {STORES.map((store) => (
                <option key={store} value={store}>
                  {store}
                </option>
              ))}
            </select>
          </fieldset>
          {errors.store && (
            <p className="error-message">{errors.store.message}</p>
          )}
        </div>
        <button type="submit" className="btn-primary mx-auto w-44">
          Submit
        </button>
        <button
          onClick={() => reset()}
          type="reset"
          className="mx-auto mt-4 w-44 cursor-pointer text-slate-400 underline"
        >
          Clear Form
        </button>
      </form>
    </div>
  )
}

export default SubmitPage
