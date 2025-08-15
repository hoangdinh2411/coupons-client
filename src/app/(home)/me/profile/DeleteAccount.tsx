import React from 'react'

function DeleteAccount() {
  return (
    <div className="pt-8">
      <h3 className="mb-4 text-lg font-medium text-gray-900">Delete Account</h3>
      <p className="mb-4 text-gray-600">
        Deleting your account will wipe out all the information related to your
        account. Yes, everything. If you&apos;re sure you want to leave us
        forever, then proceed. We&apos;ll miss you!
      </p>
      <button className="font-medium text-[rgb(116,31,162)] hover:underline">
        Delete Account
      </button>
    </div>
  )
}

export default DeleteAccount
