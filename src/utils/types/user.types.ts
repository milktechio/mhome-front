export type UserDataType = {
  profile: {
    name: string;
    lastname: string;
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
