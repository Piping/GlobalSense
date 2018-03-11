import * as $ from 'jquery';
import 'jvectormap';
import 'jvectormap/jquery-jvectormap.css';
import './jquery-jvectormap-world-mill.js';
import { debounce } from 'lodash';

export default (function () {
  const vectorMapInit = () => {
    if ($('#world-map-marker').length > 0) {
      // This is a hack, as the .empty() did not do the work
      $('#vmap').remove();

      // we recreate (after removing it) the container div, to reset all the data of the map`
      $('#world-map-marker').append(`
        <div
          id="vmap"
          style="
            height: 490px;
            position: relative;
            overflow: hidden;
            background-color: transparent;
          "
        >
        </div>
      `);

      $('#vmap').vectorMap({
        map: 'world_mill',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderOpacity: 0.25,
        borderWidth: 0,
        color: '#e6e6e6',
        regionStyle : {
          initial : {
            fill : '#e4ecef',
          },
        },

        markerStyle: {
          initial: {
            r: 7,
            'fill': '#fff',
            'fill-opacity':1,
            'stroke': '#000',
            'stroke-width' : 2,
            'stroke-opacity': 0.4,
          },
        },

        markers : [ {
          latLng : [-6.816, 39.27],
          name : 'Tanzania : 900',
          style: {r: 4, fill:'red'}
        },{
          latLng : [18.73, 70.16],
          name : 'Dominican Republic : 900',
        },{
          latLng: [-116.352110, 40.974394], 
          name: 'Barrick Nevada : 700'
        },{
          latLng: [-78.246946, -7.961657], 
          name: 'Lagunas Norte : 500'
        },{
          latLng: [25.137037, -11.823232], 
          name: 'Lumwana'
        },{
          latLng: [-85.983333, 48.683333], 
          name: 'Hemlo'
        },{
          latLng: [143.145372, -5.463423],
          name: 'Porgera'
        },{
          latLng: [40.9567934, -117.7137359], 
          name: 'Turquoise Ridge'
        },{
          latLng: [-78.817872, 35.793835], 
          name: 'Zaldivar'
        },{
          latLng: [-85.983333, 48.683333], 
          name: 'Hemlo'
        },{
          latLng: [-112.007783, 45.903737], 
          name: 'Golden Sunlight'
        },{
          latLng: [8.2542147, -81.63638689999999], 
          name: 'Veladero'
        }],
        series: {
          regions: [{
            values: {
              'US': 298,
              'TZ': 900,
              'DO': 600,
            },
            scale: ['#03a9f3', '#02a7f1'],
            normalizeFunction: 'polynomial',
          }],
        },
        hoverOpacity: null,
        normalizeFunction: 'linear',
        zoomOnScroll: false,
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: [],
        enableZoom: true,
        hoverColor: '#fff',
      });
    }
  };

  vectorMapInit();
  $(window).resize(debounce(vectorMapInit, 150));
})();
