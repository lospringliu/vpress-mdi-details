// TODO dropdowns
import { computed } from 'vue';
import { useSiteData, useRoute } from 'vitepress';
import { withBase } from '../utils';
const normalizePath = (path) => {
    path = path
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\.html$/, '');
    if (path.endsWith('/')) {
        path += 'index';
    }
    return path;
};
export default {
    setup() {
        const route = useRoute();
        const isActiveLink = (link) => {
            return normalizePath(withBase(link)) === normalizePath(route.path);
        };
        return {
            withBase,
            isActiveLink,
            navData: process.env.NODE_ENV === 'production'
                ? // navbar items do not change in production
                    useSiteData().value.themeConfig.nav
                : // use computed in dev for hot reload
                    computed(() => useSiteData().value.themeConfig.nav)
        };
    }
};
