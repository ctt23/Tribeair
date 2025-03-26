// src/supabase/index.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ewmajknzbealgarwzjiu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3bWFqa256YmVhbGdhcnd6aml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4OTIyMDEsImV4cCI6MjA1ODQ2ODIwMX0.Ph0BSnGMUEzcbGDkjqw0uTKlxuWS_FwKPwswdu8MEgE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

