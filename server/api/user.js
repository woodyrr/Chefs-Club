
// import { createError } from 'h3'
// const supabase = useSupabaseClient()
// import { serverSupabaseUser} from '#supabase/server'

// export default defineEventHandler(async (event) => {
//   const user = await serverSupabaseUser(event)
// supabase.auth.getUser()

// //   const { data, error } = await client.from('tasks').select('id, title, completed').eq('user', user.id).order('created_at')
// const { data, error } = await client.from('meals').select()
//   if (error) {
//     throw createError({ statusMessage: error.message })
//   }

//   return data
// })

// const client = useSupabaseClient()

// const supabase = useSupabaseUser
// supabase.auth.getUser()