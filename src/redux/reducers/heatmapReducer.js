// heatmapReducer.js
import { SET_HEATMAP_DATA } from '../actions/heatmapActions';

const initialState = {
  heatmapData: null,
};

const heatmapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEATMAP_DATA:
      return {
        ...state,
        heatmapData: action.payload,
      };
    default:
      return state;
  }
};

export default heatmapReducer;
