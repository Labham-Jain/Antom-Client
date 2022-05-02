import { ResponsePromise } from "ky";

export interface AuthenticationInterface {
  state: "authenticated" | "unauthenticated" | "loading";
  details?: {
    name: string;
    phone: string;
    id: string;
    address?: string;
    cards?: {
      id: number;
      name: string;
      type: "Debit" | "Credit";
      card_number: number;
      expiry_month: number;
      expiry_year: number;
      issued_by: "visa";
    }[];
  };
}
export interface AuthenticationContext
  extends AuthenticationInterface {
  register: (name: string, phone: string, password: string) => Promise;
  login: (phone: string, password: string) => Promise;
}
