import axios from "axios";


export function GetTypes() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/gettypes")
      .then(json => {
        dispatch({ type: "GET_TYPES", payload: json.data });
      });
  };
}


export function PostNewOperation(obj) {

  if (obj === "") {
    return {
      type: "POST_NEW_OPERATION",
      payload: obj
    }
  } else {
    return function (dispatch) {
      return axios.post("http://localhost:3001/newoperation", obj)
        .then(json => {
          dispatch({ type: "POST_NEW_OPERATION", payload: json.data });
        });
    };
  }

}


export function GetLastOperations() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/lastoperations")
      .then(json => {
        dispatch({ type: "GET_LAST_OPERATIONS", payload: json.data });
      });
  };
}



export function GetAllOperations(val) {
  console.log(val) //......
  if (!val || val=="") {
  
    return function (dispatch) {
      return axios.get("http://localhost:3001/alloperations")
        .then(json => {
          dispatch({ type: "GET_ALL_OPERATIONS", payload: json.data });
        });
    };
  
  }else{
    return function (dispatch) {
      return axios.get(`http://localhost:3001/alloperations?idType=${val}`)
        .then(json => {
          dispatch({ type: "GET_ALL_OPERATIONS", payload: json.data });
        });
    };
  }

}



export function UpdateOperation(obj) {

  if (obj === "") {
    return {
      type: "POST_UP_DATE_OPERATION",
      payload: obj
    }
  } else {
    return function (dispatch) {
      return axios.put("http://localhost:3001/editoperation", {data: obj})
        .then(json => {
          dispatch({ type: "POST_UP_DATE_OPERATION", payload: json.data });
        });
    };
  }


}


export function DeleteOperation(obj) {
  console.log(obj)

  return function (dispatch) {
    return axios.delete(`http://localhost:3001/deleteoperation/${obj.id_operation}`)
      .then(json => {
        dispatch({ type: "DELETE_OPERATION", payload: json.data });
      });
  };
}