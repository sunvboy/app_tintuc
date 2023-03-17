import {api} from '.'
const CategoryService = {
    getCategory({
        offset = 0,
        limit = 10,
        ...restParam

    }= {}) {
        return api.call().get('categories_news',{
            params: {
                limit,
                offset,
                ...restParam
            }
        })
    }
}
 export default CategoryService