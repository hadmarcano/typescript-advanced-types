import {User, ROLES} from "./01-emum";


const currentUser: User = {
  username: 'hadcodes',
  role: ROLES.CUSTOMER
};

export const checkRole = (...roles: string[]) =>{
  if(roles.includes(currentUser.role)) return true;
  return false;
};

const response = checkRole(ROLES.CUSTOMER, ROLES.SELLER);

console.log(response);
