define(function (require) {
  require('plugins/dendogram_vis/dendogram_vis.less');
  require('plugins/dendogram_vis/dendogram_vis_controller');

  require('ui/registry/vis_types').register(KbnDendogramVisProvider);

  function KbnDendogramVisProvider(Private) {
    var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));
    var Schemas = Private(require('ui/Vis/Schemas'));

    return new TemplateVisType({
      name: 'dendogram_vis',
      title: 'Dendogram',
      icon: 'fa-table',
      description: 'Dendogram Visualization Plugin (D3)',
      template: require('plugins/dendogram_vis/dendogram_vis.html'),
      params: {
        defaults: {
          fontSize:30,
          fontSizeLabel: 10
        },
        editor: require('plugins/dendogram_vis/dendogram_vis.html')
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
  return KbnDendogramVisProvider;
});
