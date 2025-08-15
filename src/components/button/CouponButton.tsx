interface CouponButtonProps {
  code: string
}

export default function CouponButton({ code }: CouponButtonProps) {
  return (
    <div className="coupon-button show-peel">
      <div className="coupon-button-peel">{code}</div>
      See Code
    </div>
  )
}
