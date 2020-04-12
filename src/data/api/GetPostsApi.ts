import ApiHelper from "../helper/ApiHelper";

export default class GetPostsApi {
  url: string;
  token: string;
  page: number;
  constructor(url: string, token: string, page :number ) {
    this.url = url;
    this.token = token;
    this.page = page;
  }

  async getPosts() {
    return getPostsPerPage(this.url, this.token, this.page);
  }
}

async function getPostsPerPage(url: string, token: string, page: number ) {
  return ApiHelper.get(url, token, page);
}
