<template>
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
            data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->

            <li class="nav-item" :class="isMenuOpen(menu, $route.name) ? 'menu-open' : ''"
                v-if="menu.meta.showMenu"
                v-for="menu in dataMenu">
                <router-link :to="menu.path"
                             class="nav-link" :class="menu.name === $route.name ? 'active' : ''"
                             v-if="!menu.hasOwnProperty('children')">
                    <i :class="'nav-icon fas fa-' + menu.meta.icon"></i>
                    <p>{{menu.name}}</p>
                </router-link>
                <a href="javascript:void(0)"
                   class="nav-link" :class="isMenuOpen(menu, $route.name) ? 'active' : ''"
                   v-if="menu.hasOwnProperty('children')">
                    <i :class="'nav-icon fas fa-' + menu.meta.icon"></i>
                    <p>
                        {{menu.name}}
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview" :style="{display: isMenuOpen(menu, $route.name) ? 'block' : 'none' }"
                    v-if="menu.hasOwnProperty('children')"
                    v-for="menuChild in menu.children">
                    <li class="nav-item">
                        <router-link :to="{name: menuChild.name}"
                                     class="nav-link" :class="menuChild.name === $route.name ? 'active' : ''">
                            <i class="fas fa-dot-circle nav-icon"></i>
                            <p>{{menuChild.name}}</p>
                        </router-link>
                    </li>
                </ul>
            </li>

        </ul>
    </nav>
</template>

<script>
    import routes from "../routes/routes.map";

    export default {
        name: "Menu",
        data() {
            return {
                dataMenu: routes
            }
        },
        methods: {
            isMenuOpen: (menuItem, routeName) => {
                return menuItem.hasOwnProperty('children') &&
                    !!menuItem.children.find(item => item.name === routeName);
            }
        }
    }
</script>

<style scoped>

</style>
