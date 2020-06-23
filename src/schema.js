export function Schema() {
  const schema = [
    { title: "Job Name", field: "jobname" },
    { title: "Job Status", field: "jobstatus" },

    { title: "Comment", field: "comment" },
    { title: "Import Type", field: "importtype" },
    {
      title: "intiated by username",
      field: "clientname"
    },
    {
      title: "Finished at",
      field: "DateTime"
    }
  ];
  return schema;
}
