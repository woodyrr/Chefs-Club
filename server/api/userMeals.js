
import { createError } from 'h3'

import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  
  const user = await serverSupabaseUser(event)
  const client = await serverSupabaseClient(event)
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'User not authenticated',
    })
  }
//   const { data, error } = await client.from('tasks').select('id, title, completed').eq('user', user.id).order('created_at')
const { data, error } = await client.from('meals').select('*')
  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})

// const client = useSupabaseClient()