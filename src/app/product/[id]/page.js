
const page = ({params}) => {
  console.log(params);
  return <div>this is daynamic route of {params.id}</div>;
};

export default page;