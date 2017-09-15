export default function (kibana) {
  return new kibana.Plugin({
    name: 'dendogram_vis',
    require: ['kibana'],
    uiExports: {
      visTypes: [
        'plugins/dendogram_vis/dendogram_vis'
      ]
    }
  });
}
