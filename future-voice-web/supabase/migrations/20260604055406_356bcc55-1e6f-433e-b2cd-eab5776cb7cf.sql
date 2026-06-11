
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO service_role;

DROP POLICY "Anyone can apply" ON public.memberships;
CREATE POLICY "Anyone can apply" ON public.memberships FOR INSERT TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 100
  AND length(email) BETWEEN 3 AND 255
  AND length(phone) BETWEEN 5 AND 30
  AND length(state) BETWEEN 1 AND 80
  AND length(occupation) BETWEEN 1 AND 100
  AND (message IS NULL OR length(message) <= 2000)
);
