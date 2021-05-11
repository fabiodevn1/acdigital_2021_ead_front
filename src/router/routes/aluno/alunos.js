export default [
  {
    path: '/app/inicio',
    name: 'app-aluno-inicio',
    component: () => import('@/views/app/aluno/inicio/Index'),
  },
  {
    path: '/app/cursos',
    name: 'app-aluno-cursos',
    component: () => import('@/views/app/aluno/cursos/Index'),
  },
  {
    path: '/app/certificado',
    name: 'app-aluno-certificado',
    component: () => import('@/views/app/aluno/certificado/Index'),
  },
  {
    path: '/app/perguntas',
    name: 'app-aluno-perguntas',
    component: () => import('@/views/app/aluno/perguntas/Index'),
  },
  {
    path: '/app/solicitacoes',
    name: 'app-aluno-solicitacoes',
    component: () => import('@/views/app/aluno/solicitacoes/Index'),
  },
  {
    path: '/app/suporte',
    name: 'app-aluno-suporte',
    component: () => import('@/views/app/aluno/suporte/Index'),
  },

  // ----------------------- VER CURSO -----------------------
  {
    path: '/app/aluno/ver/curso',
    name: 'app-aluno-ver-curso',
    component: () => import('@/views/app/aluno/cursos/IniciarCurso/MostrarCurso.vue'),
  },


  // ----------------------- VER AULA -----------------------
  {
    path: '/app/aluno/ver/aula',
    name: 'app-aluno-ver-aula',
    component: () => import('@/views/app/aluno/cursos/IniciarCurso/VerAula.vue'),
  },
]
