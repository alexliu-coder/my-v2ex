import http from '../utils/axios'

/**
 * 获取节点下的所有话题
 * @param data 查询的页数
 */
export const getNodesByName = (data?: {p: number}) => {
    return http('/api/v2/nodes/apple/topics', {
        method: 'GET',
        params: data
    })
}
