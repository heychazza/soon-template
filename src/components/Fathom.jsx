"use client"

import { load, trackPageview } from "fathom-client"
import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function TrackPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // If you're using Next.js, set the 'NEXT_PUBLIC_FATHOM_ID' to your site id.
    // Otherwise, change this to your own env, or hard-code it instead.
    load(process.env.NEXT_PUBLIC_FATHOM_ID, {
      auto: false,
    })
  }, [])

  useEffect(() => {
    if (!pathname) return

    trackPageview({
      url: pathname + searchParams?.toString(),
      referrer: document.referrer,
    })
  }, [pathname, searchParams])

  return null
}

export function FathomAnalytics() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  )
}
