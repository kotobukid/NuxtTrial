import {H3Event} from "h3";
import {User} from "~/types";

const users = defineEventHandler((e: H3Event): { users: User[] } => {
    return {
        users: [
            {
                id: 1, name: 'taro',
            },
            {
                id: 2, name: 'jiro',
            },
            {
                id: 3, name: 'mary',
            },
            {
                id: 4, name: 'jane',
            },
            {
                id: 5, name: 'tom',
            },
        ]
    }
});
export default users