export const API_KEY = "AIzaSyD-0-xrz2vx_thQCsp_U02_CeIdHuwlOk0";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}