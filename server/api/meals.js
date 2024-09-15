// server/api/meals.js
import { serverSupabaseClient } from '#supabase/server'
export default defineEventHandler(async (event) => {
    // Fetch or return data from your database
    const client = await serverSupabaseClient(event)

    
      const { data } = await client.from('meals').select();
      console.log(data)
    return { meals: data }
    console
    
  });

  