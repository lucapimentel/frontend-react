import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import GetPostsApi from "../../data/api/GetPostsApi";

interface ITableProps {
  id: number;
  title: string;
  body: string;
}

interface IPostInfoProps {
  currentPage: number;
  perPage: number;
  pageCount: number;
}

const Table: React.FC = () => {
  const [data, setData] = useState<ITableProps[]>([]);
  const [postsInfo, setPostsInfo] = useState<IPostInfoProps>({
    currentPage: 0,
    perPage: 0,
    pageCount: 0,
  });

  async function getPostsFromApi(page = 1) {
    return new GetPostsApi(
      "https://gorest.co.in/public-api/posts",
      "5Vcs9rMBRsKin8D8V52iIVbfzAfW2KKPiJLg",
      page
    )
      .getPosts()
      .then((response) => {
        return response;
      });
  }

  function renderPosts() {
    return data.map((post) => {
      return (
        <tr key={post.id}>
          <td>{post.title}</td>
          <td></td>
          <td>{post.body}</td>
          <td></td>
          <td>19/05/2019</td>
        </tr>
      );
    });
  }

  function nextPage() {
    let { pageCount, currentPage } = postsInfo;
    if (currentPage < pageCount) {
      console.log("nextPage", currentPage++);
      getPostsFromApi(currentPage++).then((response) => {
        console.log("response", response);
        setPostsInfo(response._meta);
        setData(response.result);
      });
    }
  }

  function previousPage() {
    let { currentPage } = postsInfo;
    if (currentPage > 1) {
      console.log("previousPage", currentPage--);
      getPostsFromApi(currentPage--).then((response) => {
        console.log("response", response);
        setPostsInfo(response._meta);
        setData(response.result);
      });
    }
  }

  useEffect(() => {
    getPostsFromApi().then((response) => {
      setPostsInfo(response._meta);
      setData(response.result);
    });
  }, []);

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th></th>
            <th>Conteúdo</th>
            <th></th>
            <th>Data de publicação</th>
          </tr>
        </thead>
        <tbody>{renderPosts()}</tbody>
      </table>
      <Pagination
        currentPage={postsInfo.currentPage}
        perPage={postsInfo.perPage}
        pageCount={postsInfo.pageCount}
        nextPageEvent={() => nextPage()}
        previousPageEvent={() => previousPage()}
      />
    </React.Fragment>
  );
};

export default Table;
