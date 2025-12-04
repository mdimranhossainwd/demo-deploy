import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

const createUser = async (payload: Record<string, unknown>) => {
  const { name, email, password } = payload;

  const hashPassword = await bcrypt.hash(password as string, 10);

  try {
    const result = await pool.query(
      `
            INSERT INTO users (name,email,password) VALUES($1,$2,$3) RETURNING *
        `,
      [name, email, hashPassword]
    );
    return result;
  } catch (err: any) {
    console.error(err.message);
  }
};

const getAllUser = async () => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    return result;
  } catch (err: any) {
    console.error(err.message);
  }
};

export const userServices = { createUser, getAllUser };
