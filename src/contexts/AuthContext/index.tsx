import API from "api";
import { createContext, useCallback, useEffect, useState } from "react";
import { GenericContextComponent } from "../Contexts";
import {
  AuthenticationContext,
  AuthenticationInterface,
} from "./AuthContext";

export const AuthCtx = createContext<AuthenticationContext | undefined>(undefined);

function AuthContext({ children }: GenericContextComponent) {
  const [userDetails, setUserDetails] =
    useState<AuthenticationInterface>({
      state: "loading",
    });
  const register = useCallback(
    (name: string, phone: string, password: string) => {
      return new Promise<any>((resolve, reject) => {
        API.post('register', {body: JSON.stringify({
          name,
          phone,
          password
        })}).then((res) => res.json()).then((data) => {
          const {data: {token}} = data;
          localStorage.setItem('token', token);
          setUserDetails({state: 'authenticated'})
          resolve(true);
        }).catch(reject).catch(reject)
      })
    },
    []
  );

  const login = useCallback(
    (phone: string, password: string) => {
      return new Promise<any>(async (resolve, reject) => {
        const response = await API.post('login', {body: JSON.stringify({ phone, password })});
        const data = await response.json();
        if(response.ok){
          localStorage.setItem('token', data.data.token)
          resolve(true)
        } else {
          reject()
        }
      })
    },
    []
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token && userDetails.state === "loading") {
      API.get('user', {retry: 0}).then(res => res.json()).then(({data}) => {
        setUserDetails({
          state: 'authenticated',
          details: {
            name: data.name,
            phone: data.phone,
            id: data.id
          }
        })
      })
    }
  }, []);

  const values: AuthenticationContext = {
    ...userDetails,
    register,
    login,
  };
  return (
    <AuthCtx.Provider value={values}>{children}</AuthCtx.Provider>
  );
}

export default AuthContext;
