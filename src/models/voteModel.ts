export interface vote {
    _id: string,
    name: string,
    voted: [
        {
            _id: string,
            name: string
        }
    ],
    active: boolean,
    net: {
        _id: string,
        name: string
    },
    hmUsers: string
}