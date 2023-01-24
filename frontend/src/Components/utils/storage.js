export const saveUser = (User) => {
    localStorage.setItem(User, JSON.stringify(User));
  };
  export const getUser = User => {
    const u = localStorage.getItem(User);
    return u ? JSON.parse(u) : u;
  };