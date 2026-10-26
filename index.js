import express from "express";
import pg from "pg";
import Joi from "joi";

const app = express();
const port = 3000;
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mahasiswa",
  password: "12345678", // Sesuaikan dengan password masing masing
  port: 5432,
});

