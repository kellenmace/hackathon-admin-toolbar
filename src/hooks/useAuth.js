import { useQuery, gql, ApolloError } from "@apollo/client";
import React, { createContext, useContext, ReactNode } from "react";
import { client } from "client";

const DEFAULT_STATE = {
  loggedIn: false,
  user: undefined,
  loading: false,
  error: undefined,
};

const AuthContext = createContext(DEFAULT_STATE)

export const GET_USER = gql`
query getUser {
  viewer {
    id
    databaseId
    firstName
    lastName
    email
    capabilities
  }
}
`;

const { viewer } = client;
const currentViwer = viewer()
console.log(currentViwer)

export function AuthProvider({ children }) {
  const { data, loading, error } = useQuery(GET_USER);
  const user = data?.viewer;
  const loggedIn = Boolean(user);

  const value = {
    loggedIn,
    user,
    loading,
    error,
  };

  console.log(loggedIn);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export default useAuth;