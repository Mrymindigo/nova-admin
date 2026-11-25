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
        close: 'بستن',
        delete: 'حذف',
        deleting: 'در حال حذف...',
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
        noResults: 'محصولی با این جستجو پیدا نشد',
        columns: {
            image: 'تصویر',
            title: 'عنوان',
            price: 'قیمت',
            category: 'دسته‌بندی',
            actions: 'عملیات',
        },
        actions: { view: 'مشاهده', edit: 'ویرایش', delete: 'حذف' },
        details: {
            description: 'توضیحات',
            category: 'دسته‌بندی',
            price: 'قیمت',
            rating: 'امتیاز',
        },
        deleteConfirm: {
            title: 'حذف محصول',
            message: 'آیا از حذف «{{title}}» مطمئن هستید؟',
            error: 'حذف محصول انجام نشد. دوباره تلاش کنید.',
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
    categories: {
        "men's clothing": 'پوشاک مردانه',
        "women's clothing": 'پوشاک زنانه',
        jewelery: 'زیورآلات',
        electronics: 'کالای دیجیتال',
    },
};