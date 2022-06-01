import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Grid } from "@mui/material";
import {
    GetData,
    sort_name_ass,
    sort_name_dis,
    sort_price_h_to_l,
    sort_price_l_to_h,
    filter_by_catagory ,
  } from "../redux/action";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect } from 'react';
  
  const Shorting = () => {
      const [select, setSelect] = React.useState("");
      
      const Dispatch = useDispatch();
      // const { Data } = useSelector((store) => store.productFetch);


  
  
       
    const handleChange = (e) => {
        setSelect(e.target.value);
        if (e.target.value == "PriceAss") {
          Dispatch(sort_price_l_to_h());
        } else if (e.target.value == "PriceDis") {
          Dispatch(sort_price_h_to_l());
        } 
        else if (e.target.value == "NameAss") {
          Dispatch(sort_name_ass());
        } else if (e.target.value == "NameDis") {
          Dispatch(sort_name_dis());
        } else if (e.target.value == "none") {
          Dispatch(GetData());
        }else if (e.target.value == "Men"){
          Dispatch( filter_by_catagory (e.target.value))
        }
      };



    return (
        <>
        <FormControl sx={{ mt: 5  , minWidth: 150 }} size="small">
          <InputLabel id="demo-select-small">Short</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={select}
            label="Short"
            onChange={handleChange}
          >
            <MenuItem value={"none"}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"NameAss"}>Name Ascending</MenuItem>
            <MenuItem value={"NameDis"}>Name Descending</MenuItem>
            <MenuItem value={"PriceAss"}>Price Ascending</MenuItem>
            <MenuItem value={"PriceDis"}>Price Descending</MenuItem>
            <MenuItem value={"Men"}>Men</MenuItem>
            <MenuItem value={"Women"}>Women</MenuItem>
            <MenuItem value={"Electronics"}>Electronics</MenuItem>
          
          </Select>
        </FormControl>

        </>
    );
}

export default Shorting;