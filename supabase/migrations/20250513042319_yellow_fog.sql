/*
  # Create consultations table

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `company` (text)
      - `phone` (text)
      - `date` (date)
      - `time` (time)
      - `message` (text)
      - `status` (text)

  2. Security
    - Enable RLS on `consultations` table
    - Add policy for authenticated users to read all consultations
    - Add policy for anonymous users to insert consultations
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  date date NOT NULL,
  time time NOT NULL,
  message text,
  status text DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert consultations
CREATE POLICY "Anyone can create consultations"
  ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view all consultations
CREATE POLICY "Authenticated users can view consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);