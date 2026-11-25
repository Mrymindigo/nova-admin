
export type Dictionary = typeof en;

export const en = {
    common: {
        save: 'Save',
        cancel: 'Cancel',
        search: 'Search',
        loading: 'Loading...',
        retry: 'Try again',
        actions: 'Actions',
        error: 'Something went wrong',
        close: 'Close',
        delete: 'Delete',
        deleting: 'Deleting...',
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
        dashboard: 'Dashboard',
        products: 'Products',
        users: 'Users',
        settings: 'Settings',
        closeMenu: 'Close menu',
    },
    products: {
        title: 'Products',
        add: 'Add product',
        searchPlaceholder: 'Search products...',
        empty: 'No products found',
        noResults: 'No products match your search',
        columns: {
            image: 'Image',
            title: 'Title',
            price: 'Price',
            category: 'Category',
            actions: 'Actions',
        },
        actions: { view: 'View', edit: 'Edit', delete: 'Delete' },
        details: {
            description: 'Description',
            category: 'Category',
            price: 'Price',
            rating: 'Rating',
        },
        deleteConfirm: {
            title: 'Delete product',
            message: 'Are you sure you want to delete "{{title}}"?',
            error: 'Could not delete the product. Please try again.',
        },
    },
    settings: {
        lightMode: 'Light mode',
        darkMode: 'Dark mode',
        language: 'Language',
        languageNames: { fa: 'FA', en: 'EN' },
    },
    validation: {
        required: 'This field is required',
        invalidEmail: 'Invalid email address',
        minLength: 'Must be at least {{min}} characters',
    },
    pagination: {
        previous: 'Previous page',
        next: 'Next page',
        page: 'Page',
    },
    categories: {
        "men's clothing": "Men's clothing",
        "women's clothing": "Women's clothing",
        jewelery: 'Jewelry',
        electronics: 'Electronics',
    },
}
