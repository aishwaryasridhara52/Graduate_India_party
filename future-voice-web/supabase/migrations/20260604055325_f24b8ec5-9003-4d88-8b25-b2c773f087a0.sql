
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Admins read all roles" ON public.user_roles FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Memberships
CREATE TABLE public.memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  state TEXT NOT NULL,
  occupation TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.memberships TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.memberships TO authenticated;
GRANT ALL ON public.memberships TO service_role;
ALTER TABLE public.memberships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can apply" ON public.memberships FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins read memberships" ON public.memberships FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete memberships" ON public.memberships FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Media items
CREATE TABLE public.media_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  media_type TEXT NOT NULL CHECK (media_type IN ('image','video')),
  storage_path TEXT NOT NULL,
  public_url TEXT NOT NULL,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.media_items TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.media_items TO authenticated;
GRANT ALL ON public.media_items TO service_role;
ALTER TABLE public.media_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view media" ON public.media_items FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins insert media" ON public.media_items FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update media" ON public.media_items FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete media" ON public.media_items FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Storage policies for gip-media bucket
CREATE POLICY "Public read gip-media" ON storage.objects FOR SELECT TO anon, authenticated
  USING (bucket_id = 'gip-media');
CREATE POLICY "Admins upload gip-media" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'gip-media' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update gip-media" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'gip-media' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete gip-media" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'gip-media' AND public.has_role(auth.uid(), 'admin'));
