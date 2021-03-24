export default [
  {
    path: '/app/admin/inicio',
    name: 'app-admin-inicio',
    component: () => import('@/views/app/admin/inicio/Index.vue'),
  },
  {
    path: '/app/admin/categorias',
    name: 'app-admin-categorias',
    component: () => import('@/views/app/admin/categorias/Index.vue'),
  },
  {
    path: '/app/admin/cursos',
    name: 'app-admin-cursos',
    component: () => import('@/views/app/admin/cursos/Index.vue'),
  },
  {
    path: '/app/admin/alunos',
    name: 'app-admin-alunos',
    component: () => import('@/views/app/admin/alunos/Index.vue'),
  },
  {
    path: '/app/admin/suporte',
    name: 'app-admin-suporte',
    component: () => import('@/views/app/admin/suporte/Index.vue'),
  },
  {
    path: '/app/admin/certificado',
    name: 'app-admin-certificado',
    component: () => import('@/views/app/admin/certificado/Index.vue'),
  },
  {
    path: '/app/admin/financeiro',
    name: 'app-admin-financeiro',
    component: () => import('@/views/app/admin/financeiro/Index.vue'),
  },
  {
    path: '/app/admin/perguntas',
    name: 'app-admin-perguntas',
    component: () => import('@/views/app/admin/perguntas/Index.vue'),
  },
  {
    path: '/app/admin/notificacoes',
    name: 'app-admin-notificacoes',
    component: () => import('@/views/app/admin/notificacoes/Index.vue'),
  },
]
