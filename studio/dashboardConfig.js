export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60cb2cbd048910ca28362128',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sppqzp2y',
                  apiId: '7546ae4d-12e6-4524-b80c-36813b25d494'
                },
                {
                  buildHookId: '60cb2cbdccff5fdb7aeeed46',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vvu2o7fq',
                  apiId: 'da05b5ea-3380-4e33-aefe-98870afb60a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ciavuc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vvu2o7fq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
