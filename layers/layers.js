ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-44890.810594, 6668524.930693, 41339.971584, 6745258.930693]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Areas_of_Intensification_1 = new ol.format.GeoJSON();
var features_Areas_of_Intensification_1 = format_Areas_of_Intensification_1.readFeatures(json_Areas_of_Intensification_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_of_Intensification_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_of_Intensification_1.addFeatures(features_Areas_of_Intensification_1);
var lyr_Areas_of_Intensification_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_of_Intensification_1, 
                style: style_Areas_of_Intensification_1,
                interactive: true,
                title: '<img src="styles/legend/Areas_of_Intensification_1.png" /> Areas_of_Intensification'
            });
var format_Article_4_Directions_Office_to_Residential_1_2 = new ol.format.GeoJSON();
var features_Article_4_Directions_Office_to_Residential_1_2 = format_Article_4_Directions_Office_to_Residential_1_2.readFeatures(json_Article_4_Directions_Office_to_Residential_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Article_4_Directions_Office_to_Residential_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Article_4_Directions_Office_to_Residential_1_2.addFeatures(features_Article_4_Directions_Office_to_Residential_1_2);
var lyr_Article_4_Directions_Office_to_Residential_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Article_4_Directions_Office_to_Residential_1_2, 
                style: style_Article_4_Directions_Office_to_Residential_1_2,
                interactive: true,
                title: '<img src="styles/legend/Article_4_Directions_Office_to_Residential_1_2.png" /> Article_4_Directions_Office_to_Residential_1'
            });
var format_Brownfield_Register1Brownfield_RegisterMultiPolygon_3 = new ol.format.GeoJSON();
var features_Brownfield_Register1Brownfield_RegisterMultiPolygon_3 = format_Brownfield_Register1Brownfield_RegisterMultiPolygon_3.readFeatures(json_Brownfield_Register1Brownfield_RegisterMultiPolygon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brownfield_Register1Brownfield_RegisterMultiPolygon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brownfield_Register1Brownfield_RegisterMultiPolygon_3.addFeatures(features_Brownfield_Register1Brownfield_RegisterMultiPolygon_3);
var lyr_Brownfield_Register1Brownfield_RegisterMultiPolygon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brownfield_Register1Brownfield_RegisterMultiPolygon_3, 
                style: style_Brownfield_Register1Brownfield_RegisterMultiPolygon_3,
                interactive: true,
                title: '<img src="styles/legend/Brownfield_Register1Brownfield_RegisterMultiPolygon_3.png" /> Brownfield_Register (1) Brownfield_Register MultiPolygon'
            });
var format_Central_Activities_Zone_4 = new ol.format.GeoJSON();
var features_Central_Activities_Zone_4 = format_Central_Activities_Zone_4.readFeatures(json_Central_Activities_Zone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Central_Activities_Zone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Central_Activities_Zone_4.addFeatures(features_Central_Activities_Zone_4);
var lyr_Central_Activities_Zone_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Central_Activities_Zone_4, 
                style: style_Central_Activities_Zone_4,
                interactive: true,
                title: '<img src="styles/legend/Central_Activities_Zone_4.png" /> Central_Activities_Zone'
            });
var format_Conservation_Areas_5 = new ol.format.GeoJSON();
var features_Conservation_Areas_5 = format_Conservation_Areas_5.readFeatures(json_Conservation_Areas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conservation_Areas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conservation_Areas_5.addFeatures(features_Conservation_Areas_5);
var lyr_Conservation_Areas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conservation_Areas_5, 
                style: style_Conservation_Areas_5,
                interactive: true,
                title: '<img src="styles/legend/Conservation_Areas_5.png" /> Conservation_Areas'
            });
var format_Designated_Open_Space_6 = new ol.format.GeoJSON();
var features_Designated_Open_Space_6 = format_Designated_Open_Space_6.readFeatures(json_Designated_Open_Space_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Designated_Open_Space_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Designated_Open_Space_6.addFeatures(features_Designated_Open_Space_6);
var lyr_Designated_Open_Space_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Designated_Open_Space_6, 
                style: style_Designated_Open_Space_6,
                interactive: true,
                title: '<img src="styles/legend/Designated_Open_Space_6.png" /> Designated_Open_Space'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Areas_of_Intensification_1.setVisible(true);lyr_Article_4_Directions_Office_to_Residential_1_2.setVisible(true);lyr_Brownfield_Register1Brownfield_RegisterMultiPolygon_3.setVisible(true);lyr_Central_Activities_Zone_4.setVisible(true);lyr_Conservation_Areas_5.setVisible(true);lyr_Designated_Open_Space_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Areas_of_Intensification_1,lyr_Article_4_Directions_Office_to_Residential_1_2,lyr_Brownfield_Register1Brownfield_RegisterMultiPolygon_3,lyr_Central_Activities_Zone_4,lyr_Conservation_Areas_5,lyr_Designated_Open_Space_6];
lyr_Areas_of_Intensification_1.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Article_4_Directions_Office_to_Residential_1_2.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'shape': 'shape', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Brownfield_Register1Brownfield_RegisterMultiPolygon_3.set('fieldAliases', {'fid': 'fid', 'coordinatereferencesystem': 'coordinatereferencesystem', 'deliverable': 'deliverable', 'designation': 'designation', 'developmentdescription': 'developmentdescription', 'firstaddeddate': 'firstaddeddate', 'geox': 'geox', 'geoy': 'geoy', 'hazardoussubstances': 'hazardoussubstances', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'minnetdwellings': 'minnetdwellings', 'netdwellingsrangefrom': 'netdwellingsrangefrom', 'netdwellingsrangeto': 'netdwellingsrangeto', 'nonhousingdevelopment': 'nonhousingdevelopment', 'notes': 'notes', 'objectid': 'objectid', 'organisationlabel': 'organisationlabel', 'organisationuri': 'organisationuri', 'ownershipstatus': 'ownershipstatus', 'part2': 'part2', 'permissiondate': 'permissiondate', 'permissiontype': 'permissiontype', 'planninghistory': 'planninghistory', 'planningstatus': 'planningstatus', 'previouslypartof': 'previouslypartof', 'proposedforpip': 'proposedforpip', 'runtime': 'runtime', 'shape': 'shape', 'siteinformation': 'siteinformation', 'sitename': 'sitename', 'sitenameaddress': 'sitenameaddress', 'siteplanurl': 'siteplanurl', 'sitereference': 'sitereference', });
lyr_Central_Activities_Zone_4.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Conservation_Areas_5.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Designated_Open_Space_6.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Areas_of_Intensification_1.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Article_4_Directions_Office_to_Residential_1_2.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'shape': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Brownfield_Register1Brownfield_RegisterMultiPolygon_3.set('fieldImages', {'fid': '', 'coordinatereferencesystem': '', 'deliverable': '', 'designation': '', 'developmentdescription': '', 'firstaddeddate': '', 'geox': '', 'geoy': '', 'hazardoussubstances': '', 'hectares': '', 'lastupdateddate': '', 'minnetdwellings': '', 'netdwellingsrangefrom': '', 'netdwellingsrangeto': '', 'nonhousingdevelopment': '', 'notes': '', 'objectid': '', 'organisationlabel': '', 'organisationuri': '', 'ownershipstatus': '', 'part2': '', 'permissiondate': '', 'permissiontype': '', 'planninghistory': '', 'planningstatus': '', 'previouslypartof': '', 'proposedforpip': '', 'runtime': '', 'shape': '', 'siteinformation': '', 'sitename': '', 'sitenameaddress': '', 'siteplanurl': '', 'sitereference': '', });
lyr_Central_Activities_Zone_4.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Conservation_Areas_5.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Designated_Open_Space_6.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Areas_of_Intensification_1.set('fieldLabels', {'fid': 'no label', 'address': 'no label', 'borough': 'no label', 'boroughdesignation': 'no label', 'classification': 'no label', 'designation': 'no label', 'easting': 'no label', 'extrainfo1': 'no label', 'extrainfo2': 'no label', 'extrainfo3': 'no label', 'firstaddeddate': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'layerreference': 'no label', 'northing': 'no label', 'notes': 'no label', 'objectid': 'no label', 'planningauthority': 'no label', 'removeddate': 'no label', 'sitename': 'no label', 'sitereference': 'no label', 'source': 'no label', 'status': 'no label', 'uprn': 'no label', 'runtime': 'no label', });
lyr_Article_4_Directions_Office_to_Residential_1_2.set('fieldLabels', {'fid': 'no label', 'address': 'no label', 'borough': 'no label', 'boroughdesignation': 'no label', 'classification': 'no label', 'designation': 'no label', 'easting': 'no label', 'extrainfo1': 'no label', 'extrainfo2': 'no label', 'extrainfo3': 'no label', 'firstaddeddate': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'layerreference': 'no label', 'northing': 'no label', 'notes': 'no label', 'objectid': 'no label', 'planningauthority': 'no label', 'removeddate': 'no label', 'shape': 'no label', 'sitename': 'no label', 'sitereference': 'no label', 'source': 'no label', 'status': 'no label', 'uprn': 'no label', 'runtime': 'no label', });
lyr_Brownfield_Register1Brownfield_RegisterMultiPolygon_3.set('fieldLabels', {'fid': 'no label', 'coordinatereferencesystem': 'no label', 'deliverable': 'no label', 'designation': 'no label', 'developmentdescription': 'no label', 'firstaddeddate': 'no label', 'geox': 'no label', 'geoy': 'no label', 'hazardoussubstances': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'minnetdwellings': 'no label', 'netdwellingsrangefrom': 'no label', 'netdwellingsrangeto': 'no label', 'nonhousingdevelopment': 'no label', 'notes': 'no label', 'objectid': 'no label', 'organisationlabel': 'no label', 'organisationuri': 'no label', 'ownershipstatus': 'no label', 'part2': 'no label', 'permissiondate': 'no label', 'permissiontype': 'no label', 'planninghistory': 'no label', 'planningstatus': 'no label', 'previouslypartof': 'no label', 'proposedforpip': 'no label', 'runtime': 'no label', 'shape': 'no label', 'siteinformation': 'no label', 'sitename': 'no label', 'sitenameaddress': 'no label', 'siteplanurl': 'no label', 'sitereference': 'no label', });
lyr_Central_Activities_Zone_4.set('fieldLabels', {'fid': 'no label', 'address': 'no label', 'borough': 'no label', 'boroughdesignation': 'no label', 'classification': 'no label', 'designation': 'no label', 'easting': 'no label', 'extrainfo1': 'no label', 'extrainfo2': 'no label', 'extrainfo3': 'no label', 'firstaddeddate': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'layerreference': 'no label', 'northing': 'no label', 'notes': 'no label', 'objectid': 'no label', 'planningauthority': 'no label', 'removeddate': 'no label', 'sitename': 'no label', 'sitereference': 'no label', 'source': 'no label', 'status': 'no label', 'uprn': 'no label', 'runtime': 'no label', });
lyr_Conservation_Areas_5.set('fieldLabels', {'fid': 'no label', 'address': 'no label', 'borough': 'no label', 'boroughdesignation': 'no label', 'classification': 'no label', 'designation': 'no label', 'easting': 'no label', 'extrainfo1': 'no label', 'extrainfo2': 'no label', 'extrainfo3': 'no label', 'firstaddeddate': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'layerreference': 'no label', 'northing': 'no label', 'notes': 'no label', 'objectid': 'no label', 'planningauthority': 'no label', 'removeddate': 'no label', 'sitename': 'no label', 'sitereference': 'no label', 'source': 'no label', 'status': 'no label', 'uprn': 'no label', 'runtime': 'no label', });
lyr_Designated_Open_Space_6.set('fieldLabels', {'fid': 'no label', 'address': 'no label', 'borough': 'no label', 'boroughdesignation': 'no label', 'classification': 'no label', 'designation': 'no label', 'easting': 'no label', 'extrainfo1': 'no label', 'extrainfo2': 'no label', 'extrainfo3': 'no label', 'firstaddeddate': 'no label', 'hectares': 'no label', 'lastupdateddate': 'no label', 'layerreference': 'no label', 'northing': 'no label', 'notes': 'no label', 'objectid': 'no label', 'planningauthority': 'no label', 'removeddate': 'no label', 'sitename': 'no label', 'sitereference': 'no label', 'source': 'no label', 'status': 'no label', 'uprn': 'no label', 'runtime': 'no label', });
lyr_Designated_Open_Space_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});