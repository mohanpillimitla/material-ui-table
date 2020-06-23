import MaterialTable from "material-table";
import React from "react";

const UserTable = ({ data, schema }) => {
  return (
    <MaterialTable
      title="YOUR DETAILS"
      columns={schema}
      data={data}
      style={{ color: "black" }}
      options={{
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF"
        },
        searchFieldStyle: {
          color: "black"
        },

        filtering: true
      }}
    />
  );
};
export default UserTable;
