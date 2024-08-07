export const getUserName = (user) => {
  return user?.firstName && user?.lastName
    ? `${user.firstName} ${user.lastName}`
    : "";
};
