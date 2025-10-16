import { useEffect, useState } from 'react'

export function useUserRole() {
  const [role, setRole] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRole() {
      setLoading(true)
      try {
        const res = await fetch('/api/profiles/role')
        if (res.ok) {
          const data = await res.json()
          setRole(data.role)
        } else {
          setRole(null)
        }
      } catch {
        setRole(null)
      } finally {
        setLoading(false)
      }
    }
    fetchRole()
  }, [])

  return { role, loading }
}
