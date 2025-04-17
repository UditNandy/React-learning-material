import { useEffect, useState } from "react";
import "./pagination.css";

const Pagination = () => {
  const [productList, setProductList] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const btn = (i) => (
    <button
      style={i === currentPage ? { background: "gray" } : {}}
      onClick={() => {
        changePage(i);
      }}
      className="pagination-btn"
    >
      {i + 1}
    </button>
  );
  const changePage = (i) => {
    setCurrentPage(i);
  };

  const updatePage = (action) => {
    if (action === "increment") {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    updateDisplayData();
  }, [productList]);

  useEffect(() => {
    updateDisplayData();
  }, [currentPage]);

  const updateDisplayData = () => {
    let llimit = pageSize * currentPage;
    let ulimit = Math.min(pageSize * (currentPage + 1), totalProducts);
    let dData = productList.slice(llimit, ulimit);
    setDisplayData(dData);
  };
  const fetchProducts = async () => {
    const d = await fetch("https://dummyjson.com/products");
    const data = await d.json();
    setTotalProducts(data.products.length);
    setProductList(data.products);
  };

  return (
    <>
      <div>
        {displayData.map((d) => (
          <>
            <div>{d.title}</div>
          </>
        ))}
      </div>
      <div className="pagination-container">
        <button
          disabled={currentPage === 0}
          onClick={() => {
            setCurrentPage(0);
          }}
          className="pagination-btn"
        >
          {"<<"}
        </button>
        <button
          disabled={currentPage === 0}
          onClick={() => {
            updatePage("decrement");
          }}
          className="pagination-btn"
        >
          {"<"}
        </button>
        {new Array(Math.ceil(totalProducts / pageSize))
          .fill(null)
          .map((v, i) => {
            if (currentPage < 3) {
              if (i < 4) return btn(i);
            }
            if (
              currentPage >= 3 &&
              currentPage < Math.ceil(totalProducts / pageSize) - 3
            ) {
              if (i >= currentPage - 1 && i <= currentPage + 2) return btn(i);
            }
            if (currentPage >= Math.ceil(totalProducts / pageSize) - 3)
              if (i >= Math.ceil(totalProducts / pageSize) - 4) return btn(i);
            return "";
          })}
        <button
          onClick={() => {
            updatePage("increment");
          }}
          disabled={currentPage === Math.ceil(totalProducts / pageSize) - 1}
          className="pagination-btn"
        >
          {">"}
        </button>
        <button
          disabled={currentPage === Math.ceil(totalProducts / pageSize) - 1}
          onClick={() => {
            setCurrentPage(Math.ceil(totalProducts / pageSize) - 1);
          }}
          className="pagination-btn"
        >
          {">>"}
        </button>
      </div>
      <div>
        <select
          onChange={(e) => {
            setPageSize(e.target.value);
            setCurrentPage(0);
          }}
        >
          <option>5</option>
          <option>10</option>
          <option>12</option>
        </select>
      </div>
    </>
  );
};

export default Pagination;
