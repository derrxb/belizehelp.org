import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);

export { supabase };
