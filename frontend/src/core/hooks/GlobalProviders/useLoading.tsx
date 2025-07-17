import { useLoadingContext } from "@/core/components";

export function useLoading() {
  const { showLoading, hideLoading } = useLoadingContext();

  return { showLoading, hideLoading };
}
