
  import 'plugins/dendogram_vis/dendogram_vis.less';
  import 'plugins/dendogram_vis/dendogram_vis_controller';

  import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

  VisTypesRegistryProvider.register(KbnDendogramVisProvider);

  import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
  import { VisSchemasProvider } from 'ui/vis/schemas';
  import dendogramVisTemplate from 'plugins/dendogram_vis/dendogram_vis.html';

  function KbnDendogramVisProvider(Private) {
    const TemplateVisType = Private(TemplateVisTypeProvider);
    const Schemas = Private(VisSchemasProvider);

    return new TemplateVisType({
      name: 'dendogram_vis',
      title: 'Dendogram',
      icon: 'fa-table',
      description: 'Dendogram Visualization Plugin (D3)',
      template: dendogramVisTemplate,
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

  export default KbnDendogramVisProvider;
