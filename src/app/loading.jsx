import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-[80] sm:min-h-screen">
      <Spinner size="xl" color="danger" />
      <span className="text-xs text-muted">Please Wait...</span>
    </div>
  );
};

export default loading;
