export default interface PaginatedResponse<T> {
  items: T[];
  totalItems: number;
}
