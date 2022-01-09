export default interface User {
    _id: string;
    name: string;
    phone: string;
    password: string;
    email: string;
    tokens: [
        {
            token: string;
            _id: string;
        },
    ];
    createdAt: string;
    updatedAt: string;
}
