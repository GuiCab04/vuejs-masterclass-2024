import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://aiibdtfuyifnkyaefipe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpaWJkdGZ1eWlmbmt5YWVmaXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MjA3NTQsImV4cCI6MjA0NjM5Njc1NH0.cQxU74So9GcS7203CZEPwYRaah17xxAl9VP2ZpVeV6c',
)
