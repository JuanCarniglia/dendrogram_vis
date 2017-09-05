define(function (require) {
  return function dendogramProvider(Private, Notifier) {

    return function (vis, resp) {

      var buckets = resp.aggregations[vis.aggs.bySchemaName.segment[0].id].buckets;

      var errors = [];

      var data = {
        errors: errors,
        elements: []
      };

      buckets.map(function(d){
          data.elements.push({ id: d.key, value: d[1].value, name: d.key.substring(d.key.lastIndexOf('.')+1), checked: false });
      });

      return data;
    };
  };
});
