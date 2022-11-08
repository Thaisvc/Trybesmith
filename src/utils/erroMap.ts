const errorMap = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};
  
const mapError = (errorMessage: string): number => {
  if (errorMessage.includes('required')) return errorMap.BAD_REQUEST;
  return errorMap.UNAUTHORIZED;
};
  
export { errorMap, mapError };
