var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_KAWASANINDUSTRIMASTERPLAN_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "KAWASAN INDUSTRI (MASTER PLAN)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KAWASANINDUSTRIMASTERPLAN_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11707723.529956, -579718.257616, 11714400.454578, -570576.588807]
                            })
                        });
var lyr_RUN_OFF_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "RUN_OFF",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RUN_OFF_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11705809.743486, -579798.948078, 11718583.892587, -570891.564344]
                            })
                        });
var format_JENISTANAH_AR_4 = new ol.format.GeoJSON();
var features_JENISTANAH_AR_4 = format_JENISTANAH_AR_4.readFeatures(json_JENISTANAH_AR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENISTANAH_AR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENISTANAH_AR_4.addFeatures(features_JENISTANAH_AR_4);
var lyr_JENISTANAH_AR_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JENISTANAH_AR_4, 
                style: style_JENISTANAH_AR_4,
                interactive: true,
    title: 'JENISTANAH_AR<br />\
    <img src="styles/legend/JENISTANAH_AR_4_0.png" /> Entisols<br />\
    <img src="styles/legend/JENISTANAH_AR_4_1.png" /> Inceptisols<br />\
    <img src="styles/legend/JENISTANAH_AR_4_2.png" /> Ultisols<br />'
        });
var format_POLA_RUANG_DALAM_BWP_5 = new ol.format.GeoJSON();
var features_POLA_RUANG_DALAM_BWP_5 = format_POLA_RUANG_DALAM_BWP_5.readFeatures(json_POLA_RUANG_DALAM_BWP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLA_RUANG_DALAM_BWP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLA_RUANG_DALAM_BWP_5.addFeatures(features_POLA_RUANG_DALAM_BWP_5);
var lyr_POLA_RUANG_DALAM_BWP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLA_RUANG_DALAM_BWP_5, 
                style: style_POLA_RUANG_DALAM_BWP_5,
                interactive: true,
    title: 'POLA_RUANG_DALAM_BWP<br />\
    <img src="styles/legend/POLA_RUANG_DALAM_BWP_5_0.png" /> Kawasan Holtikultura<br />\
    <img src="styles/legend/POLA_RUANG_DALAM_BWP_5_1.png" /> Kawasan Industri<br />\
    <img src="styles/legend/POLA_RUANG_DALAM_BWP_5_2.png" /> Kawasan Permukiman Perdesaan<br />\
    <img src="styles/legend/POLA_RUANG_DALAM_BWP_5_3.png" /> Kawasan Permukiman Perkotaan<br />\
    <img src="styles/legend/POLA_RUANG_DALAM_BWP_5_4.png" /> Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/POLA_RUANG_DALAM_BWP_5_5.png" /> Kawasan Tanaman Pangan (KP2B)<br />\
    <img src="styles/legend/POLA_RUANG_DALAM_BWP_5_6.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/POLA_RUANG_DALAM_BWP_5_7.png" /> Sungai<br />'
        });
var format_PENGGUNAANLAHAN_6 = new ol.format.GeoJSON();
var features_PENGGUNAANLAHAN_6 = format_PENGGUNAANLAHAN_6.readFeatures(json_PENGGUNAANLAHAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENGGUNAANLAHAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENGGUNAANLAHAN_6.addFeatures(features_PENGGUNAANLAHAN_6);
var lyr_PENGGUNAANLAHAN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENGGUNAANLAHAN_6, 
                style: style_PENGGUNAANLAHAN_6,
                interactive: true,
    title: 'PENGGUNAAN LAHAN<br />\
    <img src="styles/legend/PENGGUNAANLAHAN_6_0.png" /> Ladang<br />\
    <img src="styles/legend/PENGGUNAANLAHAN_6_1.png" /> Perkebunan<br />\
    <img src="styles/legend/PENGGUNAANLAHAN_6_2.png" /> Permukiman<br />\
    <img src="styles/legend/PENGGUNAANLAHAN_6_3.png" /> Sawah<br />\
    <img src="styles/legend/PENGGUNAANLAHAN_6_4.png" /> Sungai<br />'
        });
var format_fasilitas_kesehatan_7 = new ol.format.GeoJSON();
var features_fasilitas_kesehatan_7 = format_fasilitas_kesehatan_7.readFeatures(json_fasilitas_kesehatan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_kesehatan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_kesehatan_7.addFeatures(features_fasilitas_kesehatan_7);
var lyr_fasilitas_kesehatan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fasilitas_kesehatan_7, 
                style: style_fasilitas_kesehatan_7,
                interactive: true,
                title: '<img src="styles/legend/fasilitas_kesehatan_7.png" /> fasilitas_kesehatan'
            });
var format_fasilitas_pendidikan_8 = new ol.format.GeoJSON();
var features_fasilitas_pendidikan_8 = format_fasilitas_pendidikan_8.readFeatures(json_fasilitas_pendidikan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_pendidikan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_pendidikan_8.addFeatures(features_fasilitas_pendidikan_8);
var lyr_fasilitas_pendidikan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fasilitas_pendidikan_8, 
                style: style_fasilitas_pendidikan_8,
                interactive: true,
                title: '<img src="styles/legend/fasilitas_pendidikan_8.png" /> fasilitas_pendidikan'
            });
var format_kantor_pemerintahan_9 = new ol.format.GeoJSON();
var features_kantor_pemerintahan_9 = format_kantor_pemerintahan_9.readFeatures(json_kantor_pemerintahan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kantor_pemerintahan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantor_pemerintahan_9.addFeatures(features_kantor_pemerintahan_9);
var lyr_kantor_pemerintahan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kantor_pemerintahan_9, 
                style: style_kantor_pemerintahan_9,
                interactive: true,
                title: '<img src="styles/legend/kantor_pemerintahan_9.png" /> kantor_pemerintahan'
            });
var format_fasilitas_peribadatan_10 = new ol.format.GeoJSON();
var features_fasilitas_peribadatan_10 = format_fasilitas_peribadatan_10.readFeatures(json_fasilitas_peribadatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_peribadatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_peribadatan_10.addFeatures(features_fasilitas_peribadatan_10);
var lyr_fasilitas_peribadatan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fasilitas_peribadatan_10, 
                style: style_fasilitas_peribadatan_10,
                interactive: true,
                title: '<img src="styles/legend/fasilitas_peribadatan_10.png" /> fasilitas_peribadatan'
            });
var format_pusat_perdagangan_11 = new ol.format.GeoJSON();
var features_pusat_perdagangan_11 = format_pusat_perdagangan_11.readFeatures(json_pusat_perdagangan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pusat_perdagangan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pusat_perdagangan_11.addFeatures(features_pusat_perdagangan_11);
var lyr_pusat_perdagangan_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pusat_perdagangan_11, 
                style: style_pusat_perdagangan_11,
                interactive: true,
                title: '<img src="styles/legend/pusat_perdagangan_11.png" /> pusat_perdagangan'
            });
var format_KP2B_AR_12 = new ol.format.GeoJSON();
var features_KP2B_AR_12 = format_KP2B_AR_12.readFeatures(json_KP2B_AR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KP2B_AR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KP2B_AR_12.addFeatures(features_KP2B_AR_12);
var lyr_KP2B_AR_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KP2B_AR_12, 
                style: style_KP2B_AR_12,
                interactive: true,
                title: '<img src="styles/legend/KP2B_AR_12.png" /> KP2B_AR'
            });
var format_STATUSTANAH_13 = new ol.format.GeoJSON();
var features_STATUSTANAH_13 = format_STATUSTANAH_13.readFeatures(json_STATUSTANAH_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STATUSTANAH_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STATUSTANAH_13.addFeatures(features_STATUSTANAH_13);
var lyr_STATUSTANAH_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STATUSTANAH_13, 
                style: style_STATUSTANAH_13,
                interactive: true,
    title: 'STATUS TANAH<br />\
    <img src="styles/legend/STATUSTANAH_13_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/STATUSTANAH_13_1.png" /> Hak Milik<br />\
    <img src="styles/legend/STATUSTANAH_13_2.png" /> Hak Pakai<br />\
    <img src="styles/legend/STATUSTANAH_13_3.png" /> Hak Wakaf<br />'
        });
var format_industri_14 = new ol.format.GeoJSON();
var features_industri_14 = format_industri_14.readFeatures(json_industri_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industri_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industri_14.addFeatures(features_industri_14);
var lyr_industri_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_industri_14, 
                style: style_industri_14,
                interactive: true,
                title: '<img src="styles/legend/industri_14.png" /> industri'
            });
var format_Desa_AR_Tegineneng_15 = new ol.format.GeoJSON();
var features_Desa_AR_Tegineneng_15 = format_Desa_AR_Tegineneng_15.readFeatures(json_Desa_AR_Tegineneng_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_AR_Tegineneng_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_AR_Tegineneng_15.addFeatures(features_Desa_AR_Tegineneng_15);
var lyr_Desa_AR_Tegineneng_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Desa_AR_Tegineneng_15, 
                style: style_Desa_AR_Tegineneng_15,
                interactive: true,
                title: '<img src="styles/legend/Desa_AR_Tegineneng_15.png" /> Desa_AR_Tegineneng'
            });
var format_TITIK_DRONE_16 = new ol.format.GeoJSON();
var features_TITIK_DRONE_16 = format_TITIK_DRONE_16.readFeatures(json_TITIK_DRONE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_DRONE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_DRONE_16.addFeatures(features_TITIK_DRONE_16);
var lyr_TITIK_DRONE_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TITIK_DRONE_16, 
                style: style_TITIK_DRONE_16,
                interactive: true,
                title: '<img src="styles/legend/TITIK_DRONE_16.png" /> TITIK_DRONE'
            });
var format_BATAS_BWP_17 = new ol.format.GeoJSON();
var features_BATAS_BWP_17 = format_BATAS_BWP_17.readFeatures(json_BATAS_BWP_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_BWP_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_BWP_17.addFeatures(features_BATAS_BWP_17);
var lyr_BATAS_BWP_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_BWP_17, 
                style: style_BATAS_BWP_17,
                interactive: true,
                title: '<img src="styles/legend/BATAS_BWP_17.png" /> BATAS_BWP'
            });

lyr_google_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_KAWASANINDUSTRIMASTERPLAN_2.setVisible(false);lyr_RUN_OFF_3.setVisible(false);lyr_JENISTANAH_AR_4.setVisible(false);lyr_POLA_RUANG_DALAM_BWP_5.setVisible(false);lyr_PENGGUNAANLAHAN_6.setVisible(false);lyr_fasilitas_kesehatan_7.setVisible(false);lyr_fasilitas_pendidikan_8.setVisible(false);lyr_kantor_pemerintahan_9.setVisible(false);lyr_fasilitas_peribadatan_10.setVisible(false);lyr_pusat_perdagangan_11.setVisible(false);lyr_KP2B_AR_12.setVisible(false);lyr_STATUSTANAH_13.setVisible(false);lyr_industri_14.setVisible(false);lyr_Desa_AR_Tegineneng_15.setVisible(true);lyr_TITIK_DRONE_16.setVisible(true);lyr_BATAS_BWP_17.setVisible(true);
var layersList = [lyr_google_0,lyr_OpenStreetMap_1,lyr_KAWASANINDUSTRIMASTERPLAN_2,lyr_RUN_OFF_3,lyr_JENISTANAH_AR_4,lyr_POLA_RUANG_DALAM_BWP_5,lyr_PENGGUNAANLAHAN_6,lyr_fasilitas_kesehatan_7,lyr_fasilitas_pendidikan_8,lyr_kantor_pemerintahan_9,lyr_fasilitas_peribadatan_10,lyr_pusat_perdagangan_11,lyr_KP2B_AR_12,lyr_STATUSTANAH_13,lyr_industri_14,lyr_Desa_AR_Tegineneng_15,lyr_TITIK_DRONE_16,lyr_BATAS_BWP_17];
lyr_JENISTANAH_AR_4.set('fieldAliases', {'JenisTanah': 'JenisTanah', 'sumber': 'sumber', });
lyr_POLA_RUANG_DALAM_BWP_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'ORDE1': 'ORDE1', 'ORDE2': 'ORDE2', 'JNSSPR': 'JNSSPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'LUAS_HA': 'LUAS_HA', });
lyr_PENGGUNAANLAHAN_6.set('fieldAliases', {'PL': 'PL', 'SUMBER': 'SUMBER', });
lyr_fasilitas_kesehatan_7.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'klasifikas': 'klasifikas', });
lyr_fasilitas_pendidikan_8.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'NAME': 'NAME', 'LAYER': 'LAYER', 'klasifikas': 'klasifikas', });
lyr_kantor_pemerintahan_9.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'NAME': 'NAME', 'LAYER': 'LAYER', 'klasifikas': 'klasifikas', });
lyr_fasilitas_peribadatan_10.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'NAME': 'NAME', 'LAYER': 'LAYER', 'klasifikas': 'klasifikas', });
lyr_pusat_perdagangan_11.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'NAME': 'NAME', 'LAYER': 'LAYER', 'klasifikas': 'klasifikas', });
lyr_KP2B_AR_12.set('fieldAliases', {'Id': 'Id', 'KETOBJ': 'KETOBJ', 'WADMKC': 'WADMKC', 'SUMBER': 'SUMBER', });
lyr_STATUSTANAH_13.set('fieldAliases', {'ID': 'ID', 'WILAYAHID': 'WILAYAHID', 'KODEWILAYA': 'KODEWILAYA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', });
lyr_industri_14.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'NAME': 'NAME', 'LAYER': 'LAYER', 'klasifikas': 'klasifikas', 'label': 'label', });
lyr_Desa_AR_Tegineneng_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'DESA': 'DESA', 'SKALA': 'SKALA', });
lyr_TITIK_DRONE_16.set('fieldAliases', {'Id': 'Id', 'FOTO': 'FOTO', 'dir_FOTO': 'dir_FOTO', });
lyr_BATAS_BWP_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'DESA': 'DESA', 'ha': 'ha', 'KECAMATAN': 'KECAMATAN', });
lyr_JENISTANAH_AR_4.set('fieldImages', {'JenisTanah': 'TextEdit', 'sumber': 'TextEdit', });
lyr_POLA_RUANG_DALAM_BWP_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'ORDE1': 'TextEdit', 'ORDE2': 'TextEdit', 'JNSSPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_PENGGUNAANLAHAN_6.set('fieldImages', {'PL': 'TextEdit', 'SUMBER': 'TextEdit', });
lyr_fasilitas_kesehatan_7.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'klasifikas': 'TextEdit', });
lyr_fasilitas_pendidikan_8.set('fieldImages', {'GM_LAYER': 'TextEdit', 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'klasifikas': 'TextEdit', });
lyr_kantor_pemerintahan_9.set('fieldImages', {'GM_LAYER': 'TextEdit', 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'klasifikas': 'TextEdit', });
lyr_fasilitas_peribadatan_10.set('fieldImages', {'GM_LAYER': 'TextEdit', 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'klasifikas': 'TextEdit', });
lyr_pusat_perdagangan_11.set('fieldImages', {'GM_LAYER': 'TextEdit', 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'klasifikas': 'TextEdit', });
lyr_KP2B_AR_12.set('fieldImages', {'Id': 'TextEdit', 'KETOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'SUMBER': 'TextEdit', });
lyr_STATUSTANAH_13.set('fieldImages', {'ID': 'TextEdit', 'WILAYAHID': 'TextEdit', 'KODEWILAYA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', 'TAHUN': 'TextEdit', 'NIB': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', });
lyr_industri_14.set('fieldImages', {'GM_LAYER': 'TextEdit', 'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'klasifikas': 'TextEdit', 'label': 'TextEdit', });
lyr_Desa_AR_Tegineneng_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'DESA': 'TextEdit', 'SKALA': 'TextEdit', });
lyr_TITIK_DRONE_16.set('fieldImages', {'Id': 'Range', 'FOTO': 'TextEdit', 'dir_FOTO': 'ExternalResource', });
lyr_BATAS_BWP_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'DESA': 'TextEdit', 'ha': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_JENISTANAH_AR_4.set('fieldLabels', {'JenisTanah': 'inline label', 'sumber': 'no label', });
lyr_POLA_RUANG_DALAM_BWP_5.set('fieldLabels', {'NAMOBJ': 'inline label', 'ORDE1': 'inline label', 'ORDE2': 'inline label', 'JNSSPR': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'LUAS_HA': 'inline label', });
lyr_PENGGUNAANLAHAN_6.set('fieldLabels', {'PL': 'inline label', 'SUMBER': 'inline label', });
lyr_fasilitas_kesehatan_7.set('fieldLabels', {'NAME': 'inline label', 'LAYER': 'inline label', 'klasifikas': 'inline label', });
lyr_fasilitas_pendidikan_8.set('fieldLabels', {'GM_LAYER': 'inline label', 'NAME': 'inline label', 'LAYER': 'inline label', 'klasifikas': 'inline label', });
lyr_kantor_pemerintahan_9.set('fieldLabels', {'GM_LAYER': 'inline label', 'NAME': 'inline label', 'LAYER': 'inline label', 'klasifikas': 'inline label', });
lyr_fasilitas_peribadatan_10.set('fieldLabels', {'GM_LAYER': 'inline label', 'NAME': 'inline label', 'LAYER': 'inline label', 'klasifikas': 'inline label', });
lyr_pusat_perdagangan_11.set('fieldLabels', {'GM_LAYER': 'inline label', 'NAME': 'inline label', 'LAYER': 'inline label', 'klasifikas': 'inline label', });
lyr_KP2B_AR_12.set('fieldLabels', {'Id': 'inline label', 'KETOBJ': 'inline label', 'WADMKC': 'inline label', 'SUMBER': 'inline label', });
lyr_STATUSTANAH_13.set('fieldLabels', {'ID': 'inline label', 'WILAYAHID': 'inline label', 'KODEWILAYA': 'inline label', 'KECAMATAN': 'inline label', 'KELURAHAN': 'inline label', 'TIPEHAK': 'inline label', 'TIPEPRODUK': 'inline label', 'TAHUN': 'inline label', 'NIB': 'inline label', 'LUASTERTUL': 'inline label', 'LUASPETA': 'inline label', });
lyr_industri_14.set('fieldLabels', {'GM_LAYER': 'inline label', 'NAME': 'no label', 'LAYER': 'inline label', 'klasifikas': 'inline label', 'label': 'inline label', });
lyr_Desa_AR_Tegineneng_15.set('fieldLabels', {'OBJECTID': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'DESA': 'no label', 'SKALA': 'inline label', });
lyr_TITIK_DRONE_16.set('fieldLabels', {'Id': 'inline label', 'FOTO': 'inline label', 'dir_FOTO': 'inline label', });
lyr_BATAS_BWP_17.set('fieldLabels', {'OBJECTID': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'DESA': 'inline label', 'ha': 'inline label', 'KECAMATAN': 'inline label', });
lyr_BATAS_BWP_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});