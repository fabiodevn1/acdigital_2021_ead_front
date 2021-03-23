export default [
  {
    path: '/app/admin/inicio',
    name: 'app-admin-inicio',
    component: () => import('@/views/app/admin/inicio/Index'),
  },
  {
    path: '/app/admin/cursos',
    name: 'app-admin-cursos',
    component: () => import('@/views/app/admin/cursos/Index'),
  },
  {
    path: '/app/admin/alunos',
    name: 'app-admin-alunos',
    component: () => import('@/views/app/admin/alunos/Index'),
  },
  {
    path: '/app/admin/suporte',
    name: 'app-admin-suporte',
    component: () => import('@/views/app/admin/suporte/Index'),
  },
  {
    path: '/app/admin/certificado',
    name: 'app-admin-certificado',
    component: () => import('@/views/app/admin/certificado/Index'),
  },
  {
    path: '/app/admin/financeiro',
    name: 'app-admin-financeiro',
    component: () => import('@/views/app/admin/financeiro/Index'),
  },
  {
    path: '/app/admin/perguntas',
    name: 'app-admin-perguntas',
    component: () => import('@/views/app/admin/perguntas/Index'),
  },
  {
    path: '/app/admin/notificacoes',
    name: 'app-admin-notificacoes',
    component: () => import('@/views/app/admin/notificacoes/Index'),
  },
]
