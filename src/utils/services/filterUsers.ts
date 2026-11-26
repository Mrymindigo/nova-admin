import type { User } from '../../types/user';

export const filterUsers = (users: User[], query: string): User[] => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return users;

    return users.filter((user) => {
        const searchableText = [
            user.name.firstname,
            user.name.lastname,
            user.username,
            user.email,
            user.phone,
        ]
            .join(' ')
            .toLowerCase();

        return searchableText.includes(normalized);
    });
};