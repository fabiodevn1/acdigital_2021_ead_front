export default [
  {
    path: '/app/professor/inicio',
    name: 'app-professor-inicio',
    component: () => import('@/views/app/professor/inicio/Index'),
  },
  {
    path: '/app/professor/cursos',
    name: 'app-professor-cursos',
    component: () => import('@/views/app/professor/cursos/Index'),
  },
  {
    path: '/app/professor/certificado',
    name: 'app-professor-certificado',
    component: () => import('@/views/app/professor/certificado/Index'),
  },
  {
    path: '/app/professor/perguntas',
    name: 'app-professor-perguntas',
    component: () => import('@/views/app/professor/perguntas/Index'),
  },
  {
    path: '/app/professor/suporte',
    name: 'app-professor-suporte',
    component: () => import('@/views/app/professor/suporte/Index'),
  },
  {
    path: '/app/professor/notificacao',
    name: 'app-professor-notificacao',
    component: () => import('@/views/app/professor/notificacoes/Index'),
  },
]
