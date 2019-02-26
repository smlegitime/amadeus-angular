export interface Payee {
  id: string;
  version: number;
  payeeName: string;
  categoryId: string;
  address?: Address;
  image?: string;
  motto?: string;
  active: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
