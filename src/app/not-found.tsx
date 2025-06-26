import { APP_ROUTERS } from '@/helpers/config'
import { redirect } from 'next/navigation'

export default function NotFound() {
  return redirect(APP_ROUTERS.INDEX)
}
