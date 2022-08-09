export function pages(arr: never[], itemsPerPage: number, page = 1): never[] | null {
	const maxPages = Math.ceil(arr.length / itemsPerPage);
	if (page < 1 || page > maxPages) return null;
	return arr.slice((page - 1) * itemsPerPage, page * itemsPerPage);
}