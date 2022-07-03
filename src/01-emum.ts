// ENUM permite crear un conjunto de opciones para tus tipados.
export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
};

export enum POSITIONS {
  FIRST=1,
  SECOND,
  THIRD
};

export type User = {
  username : string,
  role: ROLES,
  position?: POSITIONS
};



const user: User = {
  username: 'hadmarcano',
  role: ROLES.ADMIN,
  position: POSITIONS.SECOND
};

console.log(user); // output => { username: 'hadmarcano', role: 'admin', position: 2 }
