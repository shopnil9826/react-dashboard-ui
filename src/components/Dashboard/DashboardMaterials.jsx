import { useInfiniteQuery } from "@tanstack/react-query";
import { Hourglass, Loader } from "lucide-react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fetchMaterials } from "../../api/fetchMaterials";
import { ErrorDisplay } from "../Error/ErrorDisplay";
import LoadingMaterials from "../Loading/LoadingMaterials";
import MaterialCard from "./Materials/Card";

function DashboardMaterials() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["materials"],
    queryFn: fetchMaterials,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);
  const allMaterials = data?.pages.flatMap((page) => page.materials) || [];

  if (isLoading) return <LoadingMaterials />;
  if (error) return <ErrorDisplay error={error} onRetry={() => refetch()} />;

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {allMaterials.map((material) => (
            <MaterialCard key={material.Id} material={material}></MaterialCard>
          ))}
        </div>
        <div>
          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-purple-500 py-8">
              <Loader className="h-5 w-5 animate-spin" />
              <p className="font-medium">Loading materials...</p>
            </div>
          )}
          {isFetchingNextPage && (
            <div className="flex items-center justify-center gap-2 text-purple-500 py-4">
              <Hourglass className="h-5 w-5 animate-pulse" />
              <p className="font-medium">Loading more delights...</p>
            </div>
          )}
          {/* {error && <p>Error loading materials.</p>} */}
          <div ref={ref} style={{ height: "10px" }} />
        </div>
      </div>
    </div>
  );
}

export default DashboardMaterials;
