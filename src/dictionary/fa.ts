export type Dictionary = typeof fa;

export const fa = {
    common: {
        save: 'ذخیره',
        cancel: 'انصراف',
        search: 'جستجو',
        loading: 'در حال بارگذاری...',
        retry: 'تلاش مجدد',
        actions: 'عملیات',
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
        products: 'محصولات',
        users: 'کاربران',
        settings: 'تنظیمات',
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
    validation: {
        required: 'این فیلد الزامی است',
        invalidEmail: 'ایمیل نامعتبر است',
        minLength: 'حداقل {{min}} کاراکتر وارد کنید',
    },
};