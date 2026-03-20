'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

export interface AsyncDataState<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useAsyncData<T>(
  fetcher: () => Promise<{ success: boolean; data?: T; error?: { message: string } }>,
  options: { immediate?: boolean; deps?: unknown[] } = {}
): AsyncDataState<T> {
  const { immediate = true } = options

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(immediate)
  const [error, setError] = useState<string | null>(null)

  const fetcherRef = useRef(fetcher)
  fetcherRef.current = fetcher

  const execute = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetcherRef.current()
      if (result.success && result.data !== undefined) {
        setData(result.data)
      } else {
        setError(result.error?.message ?? 'Si è verificato un errore')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Si è verificato un errore')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (immediate) {
      execute()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, options.deps ?? [])

  return { data, loading, error, refetch: execute }
}
