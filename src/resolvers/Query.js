import { getUserId } from "../utils"

const Query = {

    user: (parent, { id }, { request, prisma }, info) => {

        const userId = getUserId(request)

        if(!id) {
            return prisma.users.findMany()
        }

        return prisma.users.findUnique({
            where: {
                id,
            }
        })
    },

    // author: (parent, { id }, { request, prisma }, info) => {

    //     const userId = getUserId(request)

    //     if(!id){
    //         return prisma.authors.findMany()
    //     }

    //     return prisma.authors.findUnique({
    //         where: {
    //             id,
    //         }
    //     })
    // },

    // book: (parent, { id }, { request, prisma }, info) => {

    //     const userId = getUserId(request)
        
    //     if(!id){
    //         return prisma.books.findMany()
    //     }

    //     return prisma.books.findUnique({
    //         where: {
    //             id,
    //         }
    //     })
    // }
}

export default Query