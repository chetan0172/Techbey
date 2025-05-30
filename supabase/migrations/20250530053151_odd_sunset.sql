-- Enable RLS if not already enabled
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_tables 
        WHERE schemaname = 'public' 
        AND tablename = 'contacts' 
        AND rowsecurity = true
    ) THEN
        ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
    END IF;

    IF NOT EXISTS (
        SELECT 1 
        FROM pg_tables 
        WHERE schemaname = 'public' 
        AND tablename = 'consultations' 
        AND rowsecurity = true
    ) THEN
        ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
    END IF;
END $$;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous count for connection check" ON contacts;
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contacts;
DROP POLICY IF EXISTS "Allow anonymous consultation bookings" ON consultations;

-- Create new policies
CREATE POLICY "Allow anonymous count for connection check"
  ON contacts
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow anonymous contact form submissions"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous consultation bookings"
  ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);