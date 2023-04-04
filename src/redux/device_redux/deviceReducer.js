import DeviceActionTypes from "./deviceTypes";

const INITIAL_STATE = {
  devicesData: [],
  rowSelected: [],
  groups: [],
  loading: false,
  countDevices: 0,
  modal:{
    name: "",
      deviceType: "",
      deviceModel: "",
      ipDomain: "",
      mainStreamUrl: "",
      subStreamUrl: "",
      port: "",
      serialNumber: "",
      groupID: "",
      userName: "",
      password: "",
  }
};

const deviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DeviceActionTypes.LOAD_TABLE:
      return {
        ...state,
        devicesData: action.payload,
      };
    case DeviceActionTypes.GROUP_TABLE:
      return {
        ...state,
        groups: action.payload,
      };
    case DeviceActionTypes.SELECT_ROW:
      return {
        ...state,
        rowSelected: action.payload,
      };
    case DeviceActionTypes.CHANGE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case DeviceActionTypes.COUNT_DEVICES:
      return {
        ...state,
        countDevices: action.payload,
      };
    //   case DeviceActionTypes.ADD_MODAL_DATA:
    //   return {
    //     ...state,
    //     modal: AddModalData(state, action.payload),
    //   };
    // case DeviceActionTypes.REMOVE_MODAL_DATA:
    //   return {
    //     ...state,
    //     modal: RemoveModalData(state, action.payload),
    //   };
    default:
      return state;
  }
};

export default deviceReducer;
