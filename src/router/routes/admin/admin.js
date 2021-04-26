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

  // ########################################################## //
  // #################          CURSO          ################ //
  // ########################################################## //

  {
    path: '/admin/cursos',
    name: 'app-admin-cursos',
    component: () => import('@/views/app/admin/cursos/Index.vue'),
  },
  {
    path: '/admin/dados/cursos',
    name: 'app-admin-dados-cursos',
    component: () => import('@/views/app/admin/cursos/DadosCriarCurso.vue'),
    // component: () => import('@/views/app/admin/cursos/DadosCursos.vue'),
  },

  // ########################################################## //
  // #################          ALUNOS          ################ //
  // ########################################################## //

  {
    path: '/admin/alunos',
    name: 'app-admin-alunos',
    component: () => import('@/views/app/admin/alunos/Index.vue'),
  },
  {
    path: '/admin/dados/alunos',
    name: 'app-admin-dados-alunos',
    component: () => import('@/views/app/admin/alunos/DadosAluno.vue'),
  },

  // ########################################################## //
  // #################        SUPORTE         ################# //
  // ########################################################## //

  {
    path: '/admin/suporte',
    name: 'app-admin-suporte',
    component: () => import('@/views/app/admin/suporte/Index.vue'),
  },
  {
    path: '/admin/dados/suporte',
    name: 'app-admin-dados-suporte',
    component: () => import('@/views/app/admin/suporte/Index.vue'),
  },

  // ########################################################## //
  // #################        SUPORTE         ################# //
  // ########################################################## //
  {
    path: '/admin/certificado',
    name: 'app-admin-certificado',
    component: () => import('@/views/app/admin/certificado/Index.vue'),
  },
  {
    path: '/admin/dados/certificado',
    name: 'app-admin-dados-certificado',
    component: () => import('@/views/app/admin/certificado/DadosCertificado.vue'),
  },

  // ########################################################## //
  // ##################      FINANCEIRO       ################# //
  // ########################################################## //
  {
    path: '/admin/financeiro',
    name: 'app-admin-financeiro',
    component: () => import('@/views/app/admin/financeiro/Index.vue'),
  },

  // ########################################################## //
  // ##################      FINANCEIRO       ################# //
  // ########################################################## //
  {
    path: '/admin/perguntas',
    name: 'app-admin-perguntas',
    component: () => import('@/views/app/admin/perguntas/Index.vue'),
  },
  {
    path: '/admin/dados/perguntas',
    name: 'app-admin-dados-perguntas',
    component: () => import('@/views/app/admin/perguntas/DadosPerguntas.vue'),
  },
  {
    path: '/admin/notificacoes',
    name: 'app-admin-notificacoes',
    component: () => import('@/views/app/admin/notificacoes/Index.vue'),
  },
]
