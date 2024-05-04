import {connectMongoDB} from '@/app/lib/mongodb'
import { NextResponse } from "next/server";
import { Request, Response } from 'express';
import User from '@/app/components/models/userModel';
import bcrypt from "bcryptjs";

export async function POST(req: Request, res: Response) {
    try {
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectMongoDB();
        await User.create({firstName, lastName, email, password:hashedPassword});

        return NextResponse.json({ message: 'User registered!' }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: 'An error occurred while registering the user' }, { status: 500 });
    }
}
