import supabase from 'supabase/supaPublic';

export const SignOut = async () => {
  await supabase.auth.signOut();
};

export const TwitterLogin = async () => {
  await supabase.auth.signIn(
    { provider: 'twitter' },
    {
      redirectTo: (window.location.href =
        location.protocol + '//' + location.host + location.pathname)
    }
  );
};

export const GithubLogin = async () => {
  await supabase.auth.signIn(
    { provider: 'github' },
    {
      redirectTo: (window.location.href =
        location.protocol + '//' + location.host + location.pathname)
    }
  );
};
