// app/api/route.js 👈🏽
import { Product } from "@/lib/model/products.js";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


// To handle a GET request to /api
export async function GET(request) {
    try {
        await mongoose.connect(process.env.connectionURL);
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    try {
        const data = await Product.find({});
            console.log(data);
            return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.log("erre");
    }
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
