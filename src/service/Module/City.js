import WfRequest from "../Request/index";
export  function GetAllCityData() {
  return WfRequest.get({
    url: "/city/all",
  });
}
