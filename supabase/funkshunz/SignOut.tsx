import supabase from "supabase/supaPublic";

  export const SignOut = async () => {
    await supabase.auth.signOut();
  };