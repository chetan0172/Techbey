/*
  # Fix RLS policies for anonymous access

  1. Changes
    - Add RLS policy for anonymous SELECT on contacts table for connection check
    - Add RLS policy for anonymous INSERT on contacts table for form submission
    - Add RLS policy for anonymous INSERT on consultations table for form submission

  2. Security
    - Enable RLS on both tables
    - Add policies for anonymous access
    - Add policies for authenticated access
*/

-- Enable RLS on tables (if not already enabled)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Add policy for anonymous SELECT on contacts (for connection check)
CREATE POLICY "Allow anonymous count for connection check"
  ON contacts
  FOR SELECT
  TO anon
  USING (true);

-- Add policy for anonymous INSERT on contacts
CREATE POLICY "Allow anonymous contact form submissions"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Add policy for anonymous INSERT on consultations
CREATE POLICY "Allow anonymous consultation bookings"
  ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Add policy for authenticated users to view contacts
CREATE POLICY "Authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Add policy for authenticated users to view consultations
CREATE POLICY "Authenticated users can view consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);