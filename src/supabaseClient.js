import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://gckvoaqdbchxqqqynuzm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdja3ZvYXFkYmNoeHFxcXludXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0MjA0NTcsImV4cCI6MjAxMzk5NjQ1N30.ZTgdYYQw3vpemisoouZWjLCuuZaGq0ytkuAotdhE6Qk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);



export default supabase;