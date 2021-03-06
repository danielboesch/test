let podcasts = [
    {
        id: 0,
        image: 'url 1',
        title: 'Podcast Name 1',
        description: "description 1",
        rating: "5 stars"

    },
    {
        id: 1,
        image: 'url2',
        title: 'Podcast Name 2',
        description: "description2 ",
        rating: "4 stars"

    },
    {
        id: 2,
        image: 'url3',
        title: 'Podcast Name 3',
        description: "description 3",
        rating: "3 stars"

    },
    {
        id: 3,
        image: 'url4',
        title: 'Podcast Name 4',
        description: "description 4",
        rating: "2 stars"

    }
]
let subscriptions = []

let id = 1

module.exports = {
    getPods: (req, res) => {
        res.status(200).send(podcasts)
    },
    getSubs: (req, res) => {
        res.status(200).send(subscriptions)
    },
    subscribe: (req, res) => {
        const {image, title, rating} = req.body
        const newSubscription = {
            image,
            title,
            rating,
            id: id
        }
        id++
        subscriptions.push(newSubscription)
        res.status(200).send(subscriptions)
    },
    unsubscribe: (req, res) => {
        const {id} = req.params
        const index = subscriptions.findIndex((e) => {
            return e.id === +id
        })
        subscriptions.splice(index, 1)
        res.status(200).send(subscriptions)
    },
    editTitle: (req, res) => {
        const {id} = req.params
        const {rating} = req.body
        const index = subscriptions.findIndex((e) => {
            return e.id === +id
        })
        subscriptions[index] = {
        ...subscriptions[index],
        rating: rating
        }
        res.status(200).send(subscriptions) 
    }
}
