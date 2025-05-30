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