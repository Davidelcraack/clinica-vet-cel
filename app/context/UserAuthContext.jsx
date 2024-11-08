import { createContext, useState, useEffect } from 'react';
import { supabase } from '../helpers/supabaseClient';

export const UserAuthContext = createContext(null);

function UserAuthProvider({children}){

  const [user, setUser] = useState();

  useEffect(() => {
    checkUser().catch(error=>console.error(error));
  }, []);

  async function checkUser() {
  const session = await supabase.auth.getSession();

  if (session.data.session) {
    const { data: userProfile, error } = await supabase
      .from('users')
      .select('roles!inner(name), name') 
      .eq('id', session.data.session.user.id)
      .single()

    if (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }

    setUser({
      ...session.data.session.user,
      role: userProfile.roles.name,
      name: userProfile.name
    });
  }
}
  
const logIn = async (formData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    console.error('Error de inicio de sesión:', error.message);
    return false;
  }

  if (data) {
    // Suponiendo que la autenticación fue exitosa, obtenemos el rol.
    const { data: userProfile, error: profileError } = await supabase
      .from('users')
      .select('roles!inner(name), name')
      .eq('id', data.session.user.id)
      .single();

    if (profileError) {
      console.error('Error al obtener el perfil de usuario:', profileError);
      return false;
    }

    setUser({
      ...data.session.user,
      role: userProfile.roles.name,
      name: userProfile.name,
    });
    return true;
  }
};
  
  const signUp = async (formData) => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
  })
  
    if (error) {
      console.error('Error durante el registro:', error);
      return { error };
    }
  
    return { user: data.user }; 
  };

  useEffect(() => {
    supabase.auth.getUser().then(res => {
      const {data: {user}} = res
      setUser(user)
    }).catch(e => console.error(e))
    
  }, [])

  const logOut = async() => {
    await supabase.auth.signOut();
    setUser(null)
  }
  
  return(
    <UserAuthContext.Provider value={{user, logIn, logOut, signUp}}>
      {children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthProvider;