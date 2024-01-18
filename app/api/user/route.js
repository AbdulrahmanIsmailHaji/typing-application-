import { connectMongoDB } from "@/lib/mongodb";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, score15, score30, score60 } = await request.json();

    await connectMongoDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (
        score15 > existingUser.score15 ||
        score30 > existingUser.score30 ||
        score60 > existingUser.score60
      ) {
        if (score15 > existingUser.score15) {
          await User.findByIdAndUpdate(existingUser._id, {
            score15,
          });
        } else if (score30 > existingUser.score30) {
          await User.findByIdAndUpdate(existingUser._id, {
            score30,
          });
        } else if (score60 > existingUser.score60) {
          await User.findByIdAndUpdate(existingUser._id, {
            score60,
          });
        }
      }

      return NextResponse.json(
        { message: "User Score Updated" },
        { status: 200 }
      );
    } else {
      await User.create({ name, email, score15, score30, score60 });
      return NextResponse.json({ message: "User Registered" }, { status: 201 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error updating/saving scores" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();
    const user = await User.find({}).populate("email");
    return Response.json({ user });
  } catch (error) {
    console.error("Error:", error);

    return Response.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
