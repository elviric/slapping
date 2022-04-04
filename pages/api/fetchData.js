import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const { address } = req.body;
  const client = await clientPromise;

  const db = client.db("HASH");

  const data = await db.collection("addresses").findOne(
    {address},
    {projection: {"_id" : 0, "__v": 0}}
  );
  if (data) {
    res.status(200).json(data);
  }
  res.status(404).json({"msg": "Not Found"});
  
   
}