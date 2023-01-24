export const SaveUser = (userName, user) => {
    localStorage.setItem(userName, JSON.stringify(user));
  };
  export const GetUser = userName => {
    const u = localStorage.getItem(userName);
    return u ? JSON.parse(u) : u;
  };