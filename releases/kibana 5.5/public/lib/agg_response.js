module.exports = function dendrogramProvider(Private, Notifier) {

  return function (vis, resp) {

    let buckets = resp.aggregations[vis.aggs.bySchemaName.segment[0].id].buckets;

    let errors = [];

    let data = {
      errors: errors,
      elements: []
    };

    buckets.map(function (d) {
      data.elements.push({
        id: d.key,
        value: d[1].value,
        name: d.key.substring(d.key.lastIndexOf('.') + 1),
        checked: false
      });
    });

    return data;
  };
};
