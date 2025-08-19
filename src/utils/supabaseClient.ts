import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://socazxtaswqtseqkcofl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvY2F6eHRhc3dxdHNlcWtjb2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTAxOTQsImV4cCI6MjA3MTE4NjE5NH0.OVlYawjFRAIIBNM-zDKv29CHzyxpplKfkMN7-wrN-wQ';

export const supabase = createClient(supabaseUrl, supabaseKey);