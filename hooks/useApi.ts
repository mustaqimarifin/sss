import { createApiClient } from 'api';
import { useSupabaseClient } from 'components/Comments/CommentsProvider';
import { useMemo } from 'react';

const useApi = () => {
  const supabase = useSupabaseClient();
  const api = useMemo(() => createApiClient(supabase), [supabase]);
  return api;
};

export default useApi;
