import { postRequest } from "@/utils/request";

// 获取列表
export function getList(data) {
  return postRequest("/user-api/users/ncovActWorks/list", data);
}
