import { createClient as createBrowserClient } from './client'
import { createClient as createServerClient } from './server'

export async function getServerSupabase() {
  return await createServerClient()
}

export function getBrowserSupabase() {
  return createBrowserClient()
}
