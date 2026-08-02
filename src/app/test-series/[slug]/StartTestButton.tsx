'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { apiClient } from '@/utils/apiClient'
import type { CreateAttemptResponse } from '@/types/api'

export function StartTestButton({ slug }: { slug: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleStart() {
    setLoading(true)
    setError(null)
    try {
      const { attemptId } = await apiClient.post<CreateAttemptResponse>(
        `/test-series/${slug}/attempts`,
      )
      router.push(`/test-room/${attemptId}`)
    } catch {
      setError('Could not start the test. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div>
      <Button size="lg" variant="brand" onClick={handleStart} disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Starting…
          </>
        ) : (
          <>
            Start test
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
    </div>
  )
}
