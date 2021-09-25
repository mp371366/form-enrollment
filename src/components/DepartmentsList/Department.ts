export type Department = {
  name: string,
  city: string,
  country: string
};

export function displayDepartment(department: Department): string {
  return `${department.name} ${department.city}, ${department.country}`
}
