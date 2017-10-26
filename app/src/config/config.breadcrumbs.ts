const rootBreadcrumb = {
    iconClass: 'fa fa-lg fa-home',
    link: {
        enabled: true,
        url: "#/home"
    }
};

export const breadcrumbs = {
    "": [ rootBreadcrumb ],
    "home": [ rootBreadcrumb ],
    "logged-out": [
        rootBreadcrumb,
        {
            name: 'Logged Out',
            link: { enabled: false }
        }
    ],
    "404": [
        rootBreadcrumb,
        {
            name: 'Page Not Found',
            link: { enabled: false }
        }
    ],
}