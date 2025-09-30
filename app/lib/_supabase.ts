import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const { SUPABASE_URL, SUPABASE_API_KEY } = Constants.expoConfig?.extra ?? {};

if (!SUPABASE_URL || !SUPABASE_API_KEY) {
  throw new Error('Missing Supabase Data');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;