// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  //const { address } = req.body;
  console.log(req);
  res.status(200).json({data:'hello'});
 
}
