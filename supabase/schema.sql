-- Supabase schema for SavvyIndians LMS

-- users are handled by Supabase Auth; additional profile table:
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text,
  full_name text,
  role text DEFAULT 'student', -- student | instructor | admin
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

-- courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  description text,
  thumbnail text,
  created_by uuid REFERENCES profiles(id),
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- lectures
CREATE TABLE IF NOT EXISTS lectures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  title text NOT NULL,
  video_url text,
  position int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  course_id uuid REFERENCES courses(id),
  enrolled_at timestamptz DEFAULT now(),
  UNIQUE(user_id, course_id)
);

-- quiz results
CREATE TABLE IF NOT EXISTS quiz_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  course_id uuid REFERENCES courses(id),
  score int,
  taken_at timestamptz DEFAULT now()
);

-- seed a sample admin profile and sample course (useful for dev)
INSERT INTO profiles (id, email, full_name, role)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'admin@example.com', 'Admin User', 'admin')
ON CONFLICT DO NOTHING;

INSERT INTO courses (id, slug, title, description, thumbnail, created_by, published)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'web-dev-fundamentals', 'Web Development Fundamentals', 'Learn the web from scratch.', '', '00000000-0000-0000-0000-000000000001', true)
ON CONFLICT DO NOTHING;

INSERT INTO lectures (course_id, title, video_url, position)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'Intro to the Web', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 1)
ON CONFLICT DO NOTHING;
