import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/usuarios/Usuarios";
import Perfil from "../pages/usuarios/Perfil";


const routes = [
    {
        name: 'Dashboard', path: '/dashboard', component: Dashboard,
        meta: {icon: 'tachometer-alt', showMenu: true, requireAuth: true}
    },

    {
        name: 'Usuários', path: '/usuarios', component: Usuarios,
        meta: {icon: 'users', showMenu: true, requireAuth: true},
        children: [
            {
                name: 'Perfil', path: 'perfil', component: Perfil,
                meta: {icon: 'perfil', showMenu: true, requireAuth: true}
            },
        ]
    },
];

export default routes;
