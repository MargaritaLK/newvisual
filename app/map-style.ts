import type {FillLayer} from 'react-map-gl';

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer1: FillLayer = {
  id: '1',
  type: 'fill',
  paint: {
    // 'fill-color': '#06d6a0', 
    'fill-color': '#06d6a0', 
    'fill-opacity': 0.6
  }
};



// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer2: FillLayer = {
  id: '2',
  type: 'fill',
  paint: {
    'fill-color': '#ffd166', 
    'fill-opacity': 0.6
  }
};



