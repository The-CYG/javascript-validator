export const file = (name: string, type: string, size = 1) => ({
  name,
  type,
  size: size * 1024
});
