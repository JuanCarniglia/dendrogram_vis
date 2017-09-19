export default function (kibana) {
  return new kibana.Plugin({
    name: 'dendrogram_vis',
    require: ['kibana'],
    uiExports: {
      visTypes: [
        'plugins/dendrogram_vis/dendrogram_vis'
      ]
    }
  });
}
