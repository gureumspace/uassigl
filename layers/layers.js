var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_gabungandigitasipl_1 = new ol.format.GeoJSON();
var features_gabungandigitasipl_1 = format_gabungandigitasipl_1.readFeatures(json_gabungandigitasipl_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gabungandigitasipl_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gabungandigitasipl_1.addFeatures(features_gabungandigitasipl_1);
var lyr_gabungandigitasipl_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gabungandigitasipl_1, 
                style: style_gabungandigitasipl_1,
                interactive: true,
                title: '<img src="styles/legend/gabungandigitasipl_1.png" /> gabungan digitasi pl'
            });
var format_Perusahaan_2 = new ol.format.GeoJSON();
var features_Perusahaan_2 = format_Perusahaan_2.readFeatures(json_Perusahaan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perusahaan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perusahaan_2.addFeatures(features_Perusahaan_2);
var lyr_Perusahaan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perusahaan_2, 
                style: style_Perusahaan_2,
                interactive: true,
                title: '<img src="styles/legend/Perusahaan_2.png" /> Perusahaan'
            });
var format_PemukimanTidakTertata_3 = new ol.format.GeoJSON();
var features_PemukimanTidakTertata_3 = format_PemukimanTidakTertata_3.readFeatures(json_PemukimanTidakTertata_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PemukimanTidakTertata_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PemukimanTidakTertata_3.addFeatures(features_PemukimanTidakTertata_3);
var lyr_PemukimanTidakTertata_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PemukimanTidakTertata_3, 
                style: style_PemukimanTidakTertata_3,
                interactive: true,
                title: '<img src="styles/legend/PemukimanTidakTertata_3.png" /> Pemukiman Tidak Tertata'
            });
var format_LahanTerbuka_4 = new ol.format.GeoJSON();
var features_LahanTerbuka_4 = format_LahanTerbuka_4.readFeatures(json_LahanTerbuka_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanTerbuka_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanTerbuka_4.addFeatures(features_LahanTerbuka_4);
var lyr_LahanTerbuka_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LahanTerbuka_4, 
                style: style_LahanTerbuka_4,
                interactive: true,
                title: '<img src="styles/legend/LahanTerbuka_4.png" /> Lahan Terbuka'
            });
var format_Pendidikan_5 = new ol.format.GeoJSON();
var features_Pendidikan_5 = format_Pendidikan_5.readFeatures(json_Pendidikan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_5.addFeatures(features_Pendidikan_5);
var lyr_Pendidikan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pendidikan_5, 
                style: style_Pendidikan_5,
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_5.png" /> Pendidikan'
            });
var format_PemukimanTertata_6 = new ol.format.GeoJSON();
var features_PemukimanTertata_6 = format_PemukimanTertata_6.readFeatures(json_PemukimanTertata_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PemukimanTertata_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PemukimanTertata_6.addFeatures(features_PemukimanTertata_6);
var lyr_PemukimanTertata_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PemukimanTertata_6, 
                style: style_PemukimanTertata_6,
                interactive: true,
                title: '<img src="styles/legend/PemukimanTertata_6.png" /> Pemukiman Tertata'
            });
var format_Jalan_7 = new ol.format.GeoJSON();
var features_Jalan_7 = format_Jalan_7.readFeatures(json_Jalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_7.addFeatures(features_Jalan_7);
var lyr_Jalan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_7, 
                style: style_Jalan_7,
                interactive: true,
                title: '<img src="styles/legend/Jalan_7.png" /> Jalan'
            });
var format_BatasKecamatan_8 = new ol.format.GeoJSON();
var features_BatasKecamatan_8 = format_BatasKecamatan_8.readFeatures(json_BatasKecamatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_8.addFeatures(features_BatasKecamatan_8);
var lyr_BatasKecamatan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_8, 
                style: style_BatasKecamatan_8,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_8.png" /> Batas Kecamatan'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_gabungandigitasipl_1.setVisible(true);lyr_Perusahaan_2.setVisible(true);lyr_PemukimanTidakTertata_3.setVisible(true);lyr_LahanTerbuka_4.setVisible(true);lyr_Pendidikan_5.setVisible(true);lyr_PemukimanTertata_6.setVisible(true);lyr_Jalan_7.setVisible(true);lyr_BatasKecamatan_8.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_gabungandigitasipl_1,lyr_Perusahaan_2,lyr_PemukimanTidakTertata_3,lyr_LahanTerbuka_4,lyr_Pendidikan_5,lyr_PemukimanTertata_6,lyr_Jalan_7,lyr_BatasKecamatan_8];
lyr_gabungandigitasipl_1.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', 'layer': 'layer', 'path': 'path', });
lyr_Perusahaan_2.set('fieldAliases', {'id': 'id', });
lyr_PemukimanTidakTertata_3.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', });
lyr_LahanTerbuka_4.set('fieldAliases', {'id': 'id', });
lyr_Pendidikan_5.set('fieldAliases', {'id': 'id', });
lyr_PemukimanTertata_6.set('fieldAliases', {'id': 'id', });
lyr_Jalan_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BatasKecamatan_8.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_gabungandigitasipl_1.set('fieldImages', {'id': 'TextEdit', 'luas_ha': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Perusahaan_2.set('fieldImages', {'id': '', });
lyr_PemukimanTidakTertata_3.set('fieldImages', {'id': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_LahanTerbuka_4.set('fieldImages', {'id': '', });
lyr_Pendidikan_5.set('fieldImages', {'id': '', });
lyr_PemukimanTertata_6.set('fieldImages', {'id': '', });
lyr_Jalan_7.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BatasKecamatan_8.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_gabungandigitasipl_1.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Perusahaan_2.set('fieldLabels', {'id': 'no label', });
lyr_PemukimanTidakTertata_3.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', });
lyr_LahanTerbuka_4.set('fieldLabels', {'id': 'no label', });
lyr_Pendidikan_5.set('fieldLabels', {'id': 'no label', });
lyr_PemukimanTertata_6.set('fieldLabels', {'id': 'no label', });
lyr_Jalan_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BatasKecamatan_8.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasKecamatan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});