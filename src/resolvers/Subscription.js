import { getUserId } from "../utils"

const Subscription = {
    

    author: {
        subscribe(parent, args, { pubsub }, info) {

            const userId = getUserId(request)

            return pubsub.asyncIterator("author")

        }
    },

    book: {
        subscribe(parent, { authorId }, { pubsub }, info) {

            const userId = getUserId(request)
            
            return pubsub.asyncIterator(`book - ${ authorId }`)

        }
    }
}

export default Subscription