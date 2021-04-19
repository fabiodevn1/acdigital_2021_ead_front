export default [

  // ########################################################## //
  // #################     PÁGINA INICIAL     ################# //
  // ########################################################## //
  {
    path: '/app/professor/inicio',
    name: 'app-professor-inicio',
    component: () => import('@/views/app/professor/inicio/Index'),
  },

  // ########################################################## //
  // #################     PÁGINA DE CURSOS     ############### //
  // ########################################################## //
  {
    path: '/app/professor/cursos',
    name: 'app-professor-cursos',
    component: () => import('@/views/app/professor/cursos/Index'),
  },
  {
    path: '/app/professor/cursos/criar',
    name: 'app-professor-cursos-criar',
    component: () => import('@/views/app/professor/cursos/Index'),
  },

  // ---------------------- AULAS ------------------------------

  {
    path: '/app/professor/cursos',
    name: 'app-professor-cursos',
    component: () => import('@/views/app/professor/cursos/Index'),
  },
  {
    path: '/app/professor/cursos/criar',
    name: 'app-professor-cursos-criar',
    component: () => import('@/views/app/professor/cursos/Index'),
  },

  // ########################################################## //
  // #################        SUPORTE         ################# //
  // ########################################################## //
  {
    path: '/app/professor/certificado',
    name: 'app-professor-certificado',
    component: () => import('@/views/app/professor/certificado/Index'),
  },

  // ########################################################## //
  // #################        SUPORTE         ################# //
  // ########################################################## //
  {
    path: '/app/professor/perguntas',
    name: 'app-professor-perguntas',
    component: () => import('@/views/app/professor/perguntas/Index'),
  },

  // ########################################################## //
  // #################        SUPORTE         ################# //
  // ########################################################## //
  {
    path: '/app/professor/suporte',
    name: 'app-professor-suporte',
    component: () => import('@/views/app/professor/suporte/Index'),
  },

  // ########################################################## //
  // #################        SUPORTE         ################# //
  // ########################################################## //
  {
    path: '/app/professor/notificacao',
    name: 'app-professor-notificacao',
    component: () => import('@/views/app/professor/notificacoes/Index'),
  },
]
