import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';
 
// Check if DATABASE_URL is defined
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}

 
// Check if ANON_KEY is defined
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('ANON_KEY is not defined in the environment variables');
  }
  

// Create Supabase client
export const supabaseClient = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL , process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
