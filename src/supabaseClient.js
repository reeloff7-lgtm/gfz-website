import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jftzyxgbufayqrjoqwub.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmdHp5eGdidWZheXFyam9xd3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMzA4NTMsImV4cCI6MjA3MjkwNjg1M30.VlyLXijG9NnOJx3fjYE4E2HQyQ4WMtjDBdJTfJ1Zjrs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
