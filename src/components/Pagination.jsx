export default function Pagination({ totalPages, currentPage, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-6">
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        const isActive = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`mx-1 px-3 py-1 rounded ${
              isActive ? "bg-amber-500 text-black" : "bg-gray-700 hover:bg-amber-800 duration-300"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
