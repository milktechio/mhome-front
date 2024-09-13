export type UserDataType = {
  profile: {
    id: string;
    name: string;
    lastname: string;
    department: string;
    email: string;
    mobile: string;
    gender: string;
    eth_addres: string;
    chain_id: string;
  };
  roles: {
    id: number;
    name: string;
  }[];
};
