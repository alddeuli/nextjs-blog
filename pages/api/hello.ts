import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // export default (_: NextApiRequest, res: NextApiResponse) => {
  // export default function Hello(req, res) {
  res.status(200).json({ text: "Hello" });
};
