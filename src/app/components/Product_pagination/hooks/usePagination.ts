import { useState } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  function next() {
    setPage((p) => Math.min(p + 1, maxPage));
  }
  function prev() {
    setPage((p) => Math.max(p - 1, 1));
  }
  function goTo(pageNum: number) {
    setPage(Math.max(1, Math.min(pageNum, maxPage)));
  }

  return { page, maxPage, currentItems, next, prev, goTo };
}
