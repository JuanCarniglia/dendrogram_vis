define(function (require) {
  require('plugins/dendrogram_vis/dendrogram_vis.less');
  require('plugins/dendrogram_vis/dendrogram_vis_controller');

  require('ui/registry/vis_types').register(KbnDendrogramVisProvider);

  function KbnDendrogramVisProvider(Private) {
    var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));
    var Schemas = Private(require('ui/Vis/Schemas'));

    return new TemplateVisType({
      name: 'dendrogram_vis',
      title: 'Dendrogram',
      icon: 'fa-table',
      description: 'Dendrogram Visualization Plugin (D3)',
      template: require('plugins/dendrogram_vis/dendrogram_vis.html'),
      params: {
        defaults: {
          fontSize:30,
          fontSizeLabel: 10
        },
        editor: require('plugins/dendrogram_vis/dendrogram_vis.html')
      },
      schemas: new Schemas([{
        group: 'metrics',
        name: 'metric',
        title: 'Field with Values',
        min: 1,
        defaults: [{
          type: 'count',
          schema: 'metric'
        }]
    }, {
        group: 'buckets',
        name: 'segment',
        title: 'Structure Data',
        min: 0,
        max: 1,
        aggFilter: ['terms']
      }]),
      requiresSearch: true
    });
  }
  return KbnDendrogramVisProvider;
});
