import {H3Event} from "h3";
import {User} from "~/types";

const users = defineEventHandler((e: H3Event): { users: User[] } => {
    return {
        users: [
            {
                id: 1, name: 'Taro', age: 20
            },
            {
                id: 2, name: 'Jiro', age: 18
            },
            {
                id: 3, name: 'Mary', age: 19
            },
            {
                id: 4, name: 'Jane', age: 17
            },
            {
                id: 5, name: 'Tom', age: 21
            },
        ]
    }
});
export default users