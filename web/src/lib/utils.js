export const serializeNonPOJs = (obj) => {
    return structuredClone(obj)
};

export const getCategoryNameById = async (categoryId) =>{
    return serializeNonPOJs(await locals.pb.collection('categories').getOne(categoryId)).category_name
}