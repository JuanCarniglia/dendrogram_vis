# Kibana Dendogram Visualization to show ... dendograms :) - Plugin

This is a new custom visualization (for Kibana version 4.5.1) that allows
displaying a dendogram chart to show and index or classes, or some other hierarchical
structure.

If you really liked this and feel like making a donation : <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=juan.carniglia@gmail.com&lc=AR&item_name=JuanCarniglia&item_number=1009&currency_code=USD&bn=PP-DonationsBF:btn_donate_LG.gif:NonHosted">
<img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" alt="Contribute!" />
</a>

If you need a modified version, or one that works on a previous (or future) Kibana release,
please let me know.

Example of how it looks:

![Screenshot](screenshot_dendogram.PNG)

##Installation Steps

You can just copy the dendogram_vis folder into KIBANA_HOME/src/plugins)
and run kibana (with --dev parameter).

You will have to re-bundle, if you just start the service or run in non-dev mode.

##How does it work

In order to work this plugins needs a simple Schema configuration:

- One Metric Parameter (whatever, really optional)
- One aggregation (bucket) to take the structure from.

(See flare.csv as an example)

In this project there is a folder (dendogram_data) with a script in python to get a CSV
into the elasticsearch server.

(The python script requires elasticsearch and csv packages).

The index on the elasticsearch should have a field called "id", that contains (for instance):

parent
parent.child1
parent.child2
parent.child1.child1
...

and so on.

##Future changes

- Add filtering from the nodes (clicking a node adds/remove filters)
- Zooming and Panning
- Colors (or icons) change based on data
