import User from "../../../../models/user";
import { NextResponse } from "next/server";

import { conectMongoDB } from "../../../../lib/mongodb";

export async function POST(request) {
  const { name, email } = await request.json();
  await conectMongoDB();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
