
  import 'plugins/dendrogram_vis/dendrogram_vis.less';
  import 'plugins/dendrogram_vis/dendrogram_vis_controller';

  import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

  VisTypesRegistryProvider.register(KbnDendrogramVisProvider);

  import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
  import { VisSchemasProvider } from 'ui/vis/schemas';
  import dendrogramVisTemplate from 'plugins/dendrogram_vis/dendrogram_vis.html';

  function KbnDendrogramVisProvider(Private) {
    const TemplateVisType = Private(TemplateVisTypeProvider);
    const Schemas = Private(VisSchemasProvider);

    return new TemplateVisType({
      name: 'dendrogram_vis',
      title: 'Dendrogram',
      icon: 'fa-table',
      description: 'Dendrogram Visualization Plugin (D3)',
      template: dendrogramVisTemplate,
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

  export default KbnDendrogramVisProvider;
