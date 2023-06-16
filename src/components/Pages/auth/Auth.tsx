import { CookiesProvider, useCookies } from "react-cookie";
const Auth = ({ children }: { children: React.ReactNode }) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};
export default Auth;

export const UserLoggedin = () => {
  const [cookies] = useCookies();
  return !!cookies.token;
};

export const UserGetId = () => {
  const [cookies] = useCookies();
  return cookies.id || null;
};

export const UseSetToken = () => {
  const [, setCookie] = useCookies();   
  return (token: string) => {
    setCookie("token", token, { secure: true, sameSite: "lax" });
  };
};

export const UserSetId = () => {
  const [, setCookie] = useCookies();
  return (id: string) => {
    setCookie("id", id, { secure: true, sameSite: "lax" });
  };
};
export const UserRemoveToken = () => {
  const [,, removeCookie] = useCookies();
  return () => {
    removeCookie("token");
    removeCookie("id");
  };
};
