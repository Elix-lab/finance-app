import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { transactions } from "@/db/schema";
import { and, eq } from "drizzle-orm";


export async function GET(req: Request, {params}) {
    try {
    // Obtaining params(Promise) values
    const p = await params;
    // Checking session
    const session = await auth()
    if(!session) {
        return NextResponse.json(
            {error: 'Unauthorized'},
            {status: 401}
        );
    }
    // Checkgin p
    if(!p || !p.id) {
        return NextResponse.json(
            {error: 'Missing ID'},
            {status: 400}
        )
    }

    // Query
    const [tx] = await db
    .select()
    .from(transactions)
    .where(
        and(
            eq(transactions.userId ,session!.user!.id!),
            eq(transactions.id, p.id)
        )
    )

    // Checking query response
    if (!tx) {
        return NextResponse.json(
            {error: 'Transaction not found'},
            {status: 404}
        )
    }

    return NextResponse.json(tx)
    } catch (error) {
        console.log('Get transaction error:',error)
        return NextResponse.json(
            {error: 'Internal server error'},
            {status: 500}
        )
    }
}