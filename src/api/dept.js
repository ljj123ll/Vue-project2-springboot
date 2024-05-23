// import request from '@/utils/request'

// export function fetchList(query) {
//   return request({
//     url: '/dept/list',
//     method: 'get',
//     params: query
//   })
// }

// export function fetchDept(id) {
//   return request({
//     url: '/dept/detail',
//     method: 'get',
//     params: { id }
//   })
// }

// export function createDept(data) {
//   return request({
//     url: '/dept/create',
//     method: 'post',
//     data
//   })
// }

// export function updateDept(data) {
//   return request({
//     url: '/dept/update',
//     method: 'post',
//     data
//   })
// }
import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/dept/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/dept/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/dept/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/dept/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/dept/update',
    method: 'post',
    data
  })
}
