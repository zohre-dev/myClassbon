interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetails({
  params: { slug },
}: BlogDetailsProps) {
  return <div> {slug}</div>;
}

/*
props:{
    params:{
        slug:""
    }
}
*************************************************************************/
// export default async function BlogDetails({params}: {params: { slug: string }}) {
//     const { slug } = params;
