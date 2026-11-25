export type Dictionary = typeof fa;

export const fa = {
    common: {
        save: 'ذخیره',
        cancel: 'انصراف',
        search: 'جستجو',
        loading: 'در حال بارگذاری...',
        retry: 'تلاش مجدد',
        actions: 'عملیات',
        error: 'خطایی رخ داده است',
    },
    auth: {
        title: 'پنل مدیریت',
        username: 'نام کاربری',
        password: 'رمز عبور',
        login: 'ورود',
        logout: 'خروج',
        invalidCredentials: 'نام کاربری یا رمز عبور اشتباه است',
    },
    nav: {
        dashboard: 'داشبورد',
        products: 'محصولات',
        users: 'کاربران',
        settings: 'تنظیمات',
        closeMenu: 'Close menu',
    },
    products: {
        title: 'محصولات',
        add: 'افزودن محصول',
        searchPlaceholder: 'جستجو در محصولات...',
        empty: 'محصولی یافت نشد',
        columns: {
            image: 'تصویر',
            title: 'عنوان',
            price: 'قیمت',
            category: 'دسته‌بندی',
        },
    },
    settings: {
        lightMode: 'حالت روشن',
        darkMode: 'حالت تیره',
        language: 'زبان',
        languageNames: { fa: 'FA', en: 'EN' },
    },
    validation: {
        required: 'این فیلد الزامی است',
        invalidEmail: 'ایمیل نامعتبر است',
        minLength: 'حداقل {{min}} کاراکتر وارد کنید',
    },
    pagination: {
        previous: 'صفحه قبل',
        next: 'صفحه بعد',
        page: 'صفحه',
    },
};