
export type Dictionary = typeof en;

export const en = {
    common: {
        save: 'Save',
        cancel: 'Cancel',
        search: 'Search',
        loading: 'Loading...',
        retry: 'Try again',
        actions: 'Actions',
    },
    auth: {
        title: 'Admin Panel',
        username: 'Username',
        password: 'Password',
        login: 'Login',
        logout: 'Logout',
        invalidCredentials: 'Invalid username or password',
    },
    nav: {
        products: 'Products',
        users: 'Users',
        settings: 'Settings',
    },
    products: {
        title: 'Products',
        add: 'Add product',
        searchPlaceholder: 'Search products...',
        empty: 'No products found',
        columns: {
            image: 'Image',
            title: 'Title',
            price: 'Price',
            category: 'Category',
        },
    },
    validation: {
        required: 'This field is required',
        invalidEmail: 'Invalid email address',
        minLength: 'Must be at least {{min}} characters',
    },
}
