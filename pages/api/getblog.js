// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://http://localhost:3000/api/getblog?slug=how-to-learn-js.json
import * as fs from 'fs';
export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}`,"utf-8",(err,data)=>{
    res.status(200).json(JSON.parse(data));
  })
}