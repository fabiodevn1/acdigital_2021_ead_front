export default [
  // Inicio
  {
    path: '/admin/inicio',
    name: 'app-admin-inicio',
    component: () => import('@/views/app/admin/inicio/Index.vue'),
  },
  // ########################################################## //
  // ################        CATEGORIAS        ################ //
  // ########################################################## //
  {
    path: '/admin/categorias',
    name: 'app-admin-categorias',
    component: () => import('@/views/app/admin/categorias/Index.vue'),
  },
  {
    path: '/admin/dados/categorias',
    name: 'app-admin-dados-categorias',
    component: () => import('@/views/app/admin/categorias/DadosCategorias.vue'),
  },
  {
    path: '/admin/cursos',
    name: 'app-admin-cursos',
    component: () => import('@/views/app/admin/cursos/Index.vue'),
  },
  {
    path: '/admin/alunos',
    name: 'app-admin-alunos',
    component: () => import('@/views/app/admin/alunos/Index.vue'),
  },
  {
    path: '/admin/suporte',
    name: 'app-admin-suporte',
    component: () => import('@/views/app/admin/suporte/Index.vue'),
  },
  {
    path: '/admin/certificado',
    name: 'app-admin-certificado',
    component: () => import('@/views/app/admin/certificado/Index.vue'),
  },
  {
    path: '/admin/financeiro',
    name: 'app-admin-financeiro',
    component: () => import('@/views/app/admin/financeiro/Index.vue'),
  },
  {
    path: '/admin/perguntas',
    name: 'app-admin-perguntas',
    component: () => import('@/views/app/admin/perguntas/Index.vue'),
  },
  {
    path: '/admin/notificacoes',
    name: 'app-admin-notificacoes',
    component: () => import('@/views/app/admin/notificacoes/Index.vue'),
  },
]
