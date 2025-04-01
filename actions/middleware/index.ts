import { JWT_SECRET } from "@/constants";
import jwt from "jsonwebtoken";

export async function Middleware(header: string | null) {
    if (!header) {
        throw new Error("Please login to continue"); 
    }
    try {
        const decodedToken = jwt.verify(header, JWT_SECRET);
        return decodedToken;
    } catch (error: any) {
        throw new Error(`Invalid or expired token: ${error.message}`);
    }
}