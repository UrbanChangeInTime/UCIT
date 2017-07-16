'use strict';

angular.module('ucitIIApp').config(function ($translateProvider) {

  // http://angular-translate.github.io/docs/#/guide/19_security - guidelines
  //$translateProvider.useSanitizeValueStrategy('escape');

  // TODO add the rest of the text!
  $translateProvider.translations('EN', {
    TITLE: 'Urban Change In Time',
    TITLE2: 'How did Vienna become what it is today?<br>How did it change through time?',
    ABOUT: {
      TITLE: 'about',
      PAR1: 'Urban Change in Time (UCIT), for the first time, brings together and shows the extent of development in Vienna from 1600s till today, through the evolution of built environment. It lets you navigate through historical maps of Vienna from different times and different scales. Additionally, it allows you to explore the existing built fabric, their built year and/or built period. UCIT brings together national historical maps provided by the <a target="_blank" target="_blank" href="http://www.oesta.gv.at/DesktopDefault.aspx?alias=oestaen&init">National Archives of Austria (OESTA)</a> and <a target="_blank" target="_blank" href="http://www.bev.gv.at/">Austrian Federal Office of Metrology and Surveying (BEV)</a>. The information of the existing built environment provided by the <a target="_blank" target="_blank" href="https://www.wien.gv.at/english/">City of Vienna</a>.',
      PAR2: 'UCIT aims to make urban growth visible and to create awareness of the importance of the city\'s past and provide a reflection for the future. The project is funded by the <a target="_blank" target="_blank" href="http://www.netidee.at/">netidee - the Internet Foundation Austria (IPA).</a>'
    },
    BUTTONS: {
      POLYGON: 'Buildings mode',
      RASTER: 'Image mode',
      GOOGLE : 'Google Layer',
      ABOUT: 'About page'
    },
    MAPS: {
      TITLE: 'maps',
      PAR1: 'UCIT uses raster maps in various available scales, from 1:12.500, 1:25.000, 1:28.800 to 1:50.000.',
      PAR2: 'Each map is categorized in time periods with an interval of 10 years, where possible. It doesn\'t necessarily mean that when you press on 1940, it shows the maps from 1940. It displays the map group close to that year according to its categorization. It was not an easy task to group the maps into these time periods. First of all, we had to maintain the uniformity, that\'s why we had to keep the same map types together. Then, to avoid confusion we had to group the maps in an easy-to-understand year groups.',
      TABLE: {
        TITLE: 'What do the years display?',
        YEAR: 'Year',
        COVERAGE: 'Coverage',
        SCALE: 'Scale',
        TYPE: 'Type',
        TYPES: {
          1: 'The third military survey (1869-1887)',
          2: 'The fourth military survey (1896-1915)',
          3: 'National maps-Special Edition (1872-1944)',
          4: 'National maps-Special Edition (1872-1944)',
          5: 'National maps-Special Edition (1872-1944)',
          6: 'OEK50 National Maps-Provisional Edition (1945-1970)',
          7: 'OEK50 National Maps-Provisional Edition (1945-1970)',
          8: 'OEK25 National Maps (1923-1959)',
          9: 'OEK50 National Maps',
          10: 'OEK50 National Maps',
          11: 'OEK50 National Maps',
          12: 'OEK50 National Maps',
          13: 'OEK50 National Maps',
          14: 'OEK50-UTM National Maps',
          15: 'OEK50-UTM National Map'
        }
      }
    },
    BUILDING_DATA: {
      TITLE: 'building data',
      TITLE2: 'How old are these buildings?',
      PAR1: 'UCIT visualises the existing built environment information provided by the City of Vienna (ViennaGIS MA19). Since the year 1997 inventory of the important Viennese building data has been ambitiously collected by several departments of the City of Vienna and it can be found at <a target="_blank" target="_blank" href="https://www.wien.gv.at/kulturportal/public/">Wien Kulturgut</a>. UCIT displays the <a target="_blank" target="_blank" href="https://www.wien.gv.at/kultur/kulturgut/architektur/bauperioden.html">period of construction</a> and built year data of this inventory and allows the comparison with the historical maps provided.',
      PAR2: 'The layer of the buildings is located on top of the existing raster maps layer where you can switch between historical maps and the current urban fabric. This allows an easy comparison between these different sources of information.',
      TABLE_TITLE1: 'Period coverage',
      TABLE_TITLE2: 'Period description',
      TABLE: {
        1: {
          YEAR: 'Before 1683',
          TEXT: 'before the second Siege of Vienna'
        },
        2: {
          YEAR: '1683 to 1740',
          TEXT: 'High Baroque'
        },
        3: {
          YEAR: '1741 to 1848',
          TEXT: 'Rococo, Classicism- Biedermeier Period'
        },
        4: {
          YEAR: '1849 to 1859',
          TEXT: 'Early Gründerzeit'
        },
        5: {
          YEAR: '1860 to 1883',
          TEXT: 'Gründerzeit'
        },
        6: {
          YEAR: '1884 to 1918',
          TEXT: 'Late Gründerzeit'
        },
        7: {
          YEAR: '1919 to 1945',
          TEXT: 'Between World Wars'
        },
        8: {
          YEAR: '1946 to 1976',
          TEXT: 'Post-War Period'
        },
        9: {
          YEAR: 'After 1976',
          TEXT: 'Present'
        }
      }
    },
    MAKING_OF: {
      TITLE: 'making of UCIT',
      PAR1: 'Today\'s digital age offers high possibilities to create interesting dynamic visualizations. The main idea behind UCIT is to make the urban growth visible in a timely and user-friendly manner.',
      PAR2: 'In order to realize this project we needed historical data, lots of them. And the hunt for the data has started. We met many people from many different organisations, or within one single organisation to see what they have in hand and how can we use this data. After a long process to find out what is existing and who has what kind of data, we had to proceed with the second stage: data cleaning or shaping the data into its desired form for UCIT. In the end we succeeded and used this data to visualise what we were aiming for. But we know that this is an ongoing process and we are proud that we came already so far. '
    },
    DEVELOPMENT: {
      TITLE: 'development',
      PAR1: 'The maps are available as raster map images (scanned with 300 dpi). All maps come with a projection file and a <a target="_blank" target="_blank" href="http://en.wikipedia.org/wiki/World_file" >world file</a>. For example: [map.jpeg], [map.prj] and [map.jgw].',
      PAR2: 'Each map piece is converted to <a target="_blank" target="_blank" href="http://trac.osgeo.org/geotiff/" >GeoTIFF</a> format by open source <a target="_blank" target="_blank" href="http://www.gdal.org" >GDAL Libraries</a> using the <a target="_blank" target="_blank" href="http://qgis.org/" >QGIS</a> software program.',
      PAR3: 'This process allowed us to import the data into <a target="_blank" target="_blank" href="http://www.geoserver.org" >GeoServer</a>. GeoServer reads a variety of data formats, including GeoTIFF format and it is an easy method of connecting existing information to web-based maps like <a target="_blank" target="_blank" href="http://www.openlayers.org" >OpenLayers</a>. OpenLayers is used to display the map data in web browsers. Pyramids of tiles are then created on the map server by <a target="_blank" target="_blank" href="http://en.wikipedia.org/wiki/Web_Map_Service" >WMS</a> to increase the performance of the map display in web browsers. <a target="_blank" target="_blank" href="http://en.wikipedia.org/wiki/JavaScript" >JavaScript</a> is used as front-end to glue all the components together.',
      PAR4: 'This layout was built using <a target="_blank" target="_blank" href="http://www.getbootstrap.com" >Bootstrap</a>, inspired by <a target="_blank" target="_blank" href="http://io.morphocode.com/urban-layers/" >Urban Layers</a>.',
      PAR5: 'Map controls (zoom in/out, overview map) are originally OpenLayers\' controls.',
      PAR6: 'The timeslider is created based on <a target="_blank" href="http://jqueryui.com" >jQuery-UI</a>, it allows you to move through time by clicking on the year, simply by dragging it or by using the left and right keys.'
    },
    COPYRIGHT: {
      TITLE: 'copyright',
      PAR1: 'UCIT is available as open source software under the <a target="_blank" href="https://www.gnu.org/copyleft/gpl.html" >GNU GPLv3 license model</a>. The source code is available on <a target="_blank" href="http://github.com/UrbanChangeInTime/UCIT" >GitHub</a>.',
      PAR2: 'Building data and shape data is available at <a target="_blank" href="https://www.data.gv.at/" >Open Government Data</a> as open source. The city of Vienna (ViennaGIS MA19) made the data open and available here: <a target="_blank" href="https://www.data.gv.at/katalog/dataset/38aac30b-6b79-4fee-88f0-a37b2e6c0f92">Vienna building period and typology.</a>'
    },
    TEAM: {
      TITLE: 'team',
      BA: 'PhD candidate at the Vienna University of Technology, Department of Spatial Planning. Urban Change in Time is part of her doctoral thesis and she has been responsible for the management, design and research behind the project.',
      ECS: 'Master student on Media Informatics at the Vienna University of Technology. He is the software developer behind the UCIT project. All the research on technological solution has been undertaken by him and then he carried out the development and implementation.'
    },
    COLLABORATORS: 'collaborators',
    EXTRA_INFO: 'For more information about the project and its development please visit the <a target="_blank" href="http://blog.ucit.or.at/">UCIT blog</a>.',
    INFOWINDOW: {
      SOURCE: 'Source:',
      YEAR: 'Built Year:',
      PERIOD: "Building Period:",
      TYPE: "Type:",
      SCALE: "Scale:",
      ACTUAL_YEAR: "Actual Year:"
    }
  });

  $translateProvider.translations('DE', {
    TITLE: 'Urban Change In Time',
    TITLE2: 'Wie wurde Wien was es heute ist?<br>Wie hat es sich über die Zeit hinweg verändert?',
    ABOUT: {
      TITLE: 'über',
      PAR1: 'Urban Change in Time (UCIT) zeigt zum ersten Mal in vollem Umfang die Entwicklung der Stadt Wien vom 16ten Jahrhundert bis heute. Es lässt den Betrachter durch historische Karten Wiens aus verschiedenen Jahren in unterschiedlichen Maßstäben navigieren. Zusätzlich kann man die bebaute Struktur entdecken, das Baujahr eines Gebäudes bzw. die Bauperiode. UCIT bringt dazu nationale historische Karten des <a target="_blank" target="_blank" href="http://www.oesta.gv.at/">Österreichischen Staatsarchivs (OeStA)</a> und dem <a target="_blank" target="_blank" href="http://www.bev.gv.at/">Bundesamt für Eich und Vermessungswesen (BEV)</a> zusammen. Die Daten über den Gebäudebestand wurden von der <a target="_blank" target="_blank" href="https://www.wien.gv.at/">Stadt Wien</a> zur Verfügung gestellt.',
      PAR2: 'UCIT versucht urbane Veränderung sichtbar zu machen und ein Bewusstsein für die Wichtigkeit der Vergangenheit der Stadt zu schaffen, als auch eine Reflektion über eine mögliche Zukunft anzuregen. Das Projekt wurde von der <a target="_blank" target="_blank" href="http://www.netidee.at/">netidee - Internet Privatstiftung Austria (IPA)</a> gefördert.'
    },
    BUTTONS: {
      POLYGON: 'Gebäudeansicht',
      RASTER: 'Kartenansicht',
      GOOGLE : 'Google Maps',
      ABOUT: 'Über'
    },
    MAPS: {
      TITLE: 'karten',
      PAR1: 'UCIT basiert auf Rasterkarten in den Maßstäben von 1:12.500, 1:25.000, 1:28.800 und 1:50.000.',
      PAR2: 'Jede Karte wurde in Perioden mit einem Intervall von 10 Jahren kategorisiert, wenn dies möglich war. Das heißt nicht, dass eine Karte tatsächlich aus dem Jahre 1940 stammt wenn das Jahr 1940 angewählt wird. Es wird lediglich die Gruppe von Karten angezeigt welche möglichst nahe um das Jahr 1940 liegen. Es war keine einfache Aufgabe die Karten in ihre jeweiligen Zeitperioden zu gruppieren und diese zusammen zu bringen. Dies begann schon damit, dass gleiche Kartentypen zusammen gruppiert werden mussten um eine gewisse Uniformität zu wahren. Um die Darstellung für die Benutzer möglichst klar zu gestalten, wurden die Karten in einfach zu verstehende Jahresgruppen einsortiert.',
      TABLE: {
        TITLE: 'Was zeigen die Jahre an?',
        YEAR: 'Jahr',
        COVERAGE: 'Überdeckung',
        SCALE: 'Maßstab',
        TYPE: 'Typ',
        TYPES: {
          1: 'Dritte Landesaufnahme\nFranzisco-Josephinische Landesaufnahme (1869-1887)',
          2: 'Vierte Landesaufnahme\nPräzisionsaufnahme (1896-1915)',
          3: 'Spezialkarte (1872-1944)',
          4: 'Spezialkarte (1872-1944)',
          5: 'Spezialkarte (1872-1944)',
          6: 'OEK 50 Prov - Provisorische Ausgabe (1945-1970)',
          7: 'OEK 50 Prov - Provisorische Ausgabe (1945-1970)',
          8: 'OEK25 Österreichische Karte (1923-1959)',
          9: 'OEK50 Österreichische Karte',
          10: 'OEK50 Österreichische Karte',
          11: 'OEK50 Österreichische Karte',
          12: 'OEK50 Österreichische Karte',
          13: 'OEK50 Österreichische Karte',
          14: 'OEK50-UTM Österreichische Karte',
          15: 'OEK50-UTM Österreichische Karte'
        }
      }
    },
    BUILDING_DATA: {
      TITLE: 'gebäudedaten',
      TITLE2: 'Wie alt sind diese Gebäude?',
      PAR1: 'UCIT visualisiert die Daten über die bebaute Umgebung welche von der Stadt Wien zur Verfügung gestellt wurden. Seit dem Jahr 1997 sammeln verschiedenste Abteilungen der Stadt Wien wichtige Gebäudedaten aller Gebäude Wiens und stellen diese auf Wien Kulturgut zur Verfügung. UCIT zeigt die Bauperiode und das Baujahr dieses Inventars und erlaubt es einen Vergleich mit den historischen Karten herzustellen.',
      PAR2: 'Der Layer der Gebäude kann über die existierenden historischen Rasterkarten eingeblendet werden. Dies erlaubt einen schnellen Wechsel zwischen diesen unterschiedlichen Informationsquellen.',
      TABLE_TITLE1: 'Period coverage',
      TABLE_TITLE2: 'Period description',
      TABLE: {
        1: {
          YEAR: 'Before 1683',
          TEXT: 'before the second Siege of Vienna'
        },
        2: {
          YEAR: '1683 bis 1740',
          TEXT: 'High Baroque'
        },
        3: {
          YEAR: '1741 bis 1848',
          TEXT: 'Rococo, Classicism- Biedermeier Period'
        },
        4: {
          YEAR: '1849 bis 1859',
          TEXT: 'Early Gründerzeit'
        },
        5: {
          YEAR: '1860 bis 1883',
          TEXT: 'Gründerzeit'
        },
        6: {
          YEAR: '1884 bis 1918',
          TEXT: 'Late Gründerzeit'
        },
        7: {
          YEAR: '1919 bis 1945',
          TEXT: 'Between World Wars'
        },
        8: {
          YEAR: '1946 bis 1976',
          TEXT: 'Post-War Period'
        },
        9: {
          YEAR: 'Nach 1976',
          TEXT: 'Present'
        }
      }
    },
    MAKING_OF: {
      TITLE: 'die Entstehung von UCIT',
      PAR1: 'Das heutige digitale Zeitalter ermöglicht es interessante dynamische Visualisierungen zu erstellen. Die Grundidee hinter UCIT ist es das urbane Wachstum in einer einfachen und benutzerfreundlichen Art sichtbar zu machen.',
      PAR2: 'Um dieses Projekt umsetzen zu können brauchten wir zuerst historische Daten und zwar viele davon. Die Jagd nach diesen begann. Wir trafen viele Personen aus unterschiedlichsten Organisationen und Abteilungen um zu sehen welche Daten sie besitzen und wie wir diese für unser Projekt nutzen könnten. Nach einer langen Phase der Evaluierung was existiert und wer diese Daten hat, konnten wir uns mit der zweiten Phase beschäftigen: die Daten zu Ordnen und Säubern bzw. in die entsprechende Form zu bringen. Am Ende haben wir es geschafft die Daten zu nutzen und so zu Visualisieren wie wir es uns vorgenommen hatten. Natürlich wissen wir dass dies ein fortwährender Prozess ist aber wir sind stolz es bereits so weit geschafft zu haben.'
    },
    DEVELOPMENT: {
      TITLE: 'development',
      PAR1: 'Die verwendeten Karten sind als Rasterbilder (gescannt mit 300 dpi) verfügbar. Alle Karten kommen mit einer Projection Datei und einer <a target="_blank" href="http://en.wikipedia.org/wiki/World_file" >World-File</a>, zum Beispiel [map.jpeg], [map.prj] and [map.jgw].',
      PAR2: 'Jedes Kartenstück wird in das <a target="_blank" href="http://trac.osgeo.org/geotiff/" >GeoTIFF</a> Format umgewandelt. Hierzu wurde das <a target="_blank" href="http://qgis.org/" >QGIS</a> Programm verwendet, welches Open Source <a target="_blank" href="http://www.gdal.org" >GDAL Bibliotheken</a> benützt.',
      PAR3: 'Dieser Prozess hat es uns ermöglicht, die Daten in den <a target="_blank" href="http://www.geoserver.org" >GeoServer</a> zu integrieren. GeoServer kann mit einer Vielzahl von Datenformaten umgehen, unter anderem GeoTIFF, und ermöglicht es einfach existierende Daten mit kartographischen Web-Anwendungen zu verknüpfen. Um die kartographischen Daten im Web Browser darzustellen wird <a target="_blank" href="http://www.openlayers.org" >OpenLayers</a> verwendet.',
      PAR4: 'Pyramiden von Kacheln werden dann am Kartenserver mittels <a target="_blank" href="http://en.wikipedia.org/wiki/Web_Map_Service" >WMTS</a> erzeugt um die Darstellung der Karten performanter zu gestalten.',
      PAR5: 'Dieses Layout wurde mit <a target="_blank" href="http://www.getbootstrap.com" >Bootstrap</a> erstellt, inspiriert von <a target="_blank" href="http://io.morphocode.com/urban-layers/" >Urban Layers</a>.',
      PAR6: 'Die Zeitleiste wurde basierend auf <a target="_blank" href="http://jqueryui.com" >jQuery-UI</a> erstellt. Es ermöglicht eine Navigation durch einfaches Klicken auf das Jahr oder durch Ziehen des Sliders.'
    },
    COPYRIGHT: {
      TITLE: 'copyright',
      PAR1: 'UCIT wird als Open Source Software unter der <a target="_blank" href="https://www.gnu.org/copyleft/gpl.html">GNU GPLv3 Lizenz</a> publiziert. Der Source Code ist auf <a target="_blank" href="http://github.com/UrbanChangeInTime/UCIT">GitHub</a> verfügbar.',
      PAR2: 'Das Copyright an den historischen Karten besitzt die <a target="_blank" href="http://www.oesta.gv.at/">Österreichischen Staatsarchivs (OeStA)</a> und das <a target="_blank" href="http://www.bev.gv.at/">Bundesamt für Eich- und Vermessungswesen (BEV)</a>. UCIT hat die “Web-View” Lizenz für die verwendeten Karten von BEV erworben um diese in der Web Applikation darstellen zu dürfen.'
    },
    TEAM: {
      TITLE: 'team',
      BA: 'Doktoratsanwärterin an der Technischen Universität Wien, Department für Raumplanung. Urban Change in Time ist Teil ihrer Doktoratsarbeit und sie ist für das Management, Design und die wissenschaftliche Umsetzung des Projekts zuständig.',
      ECS: 'Master Student der Medieninformatik an der Technischen Universität Wien. Er ist der Software-Entwickler hinter dem UCIT Projekt. Die technische Recherche, die Entwicklung sowie die Implementierung wurden von ihm umgesetzt.'
    },
    COLLABORATORS: 'mit Unterstützung von',
    EXTRA_INFO: 'Weitere Informationen über die Entwicklung und das Projekt UCIT erhalten Sie auf dem <a target="_blank" href="http://blog.ucit.or.at/">UCIT Blog</a>.',
    INFOWINDOW: {
      SOURCE: 'Quelle:',
      YEAR: 'Baujahr:',
      PERIOD: "Bauperiod:",
      TYPE: "Typ:",
      SCALE: "Maßstab:",
      ACTUAL_YEAR: "Jahr:"
    }
  });
  $translateProvider.preferredLanguage('DE');
});
