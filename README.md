# Database Test Tool

A simple Node.js tool for testing database connections and exploring database schema.

## Overview

This tool demonstrates how to connect to a PostgreSQL database using Node.js and the `pg` library. It connects to a database, retrieves the current timestamp, and lists all tables in the public schema.

## Features

- Database connection testing
- Current timestamp retrieval
- Table listing from the public schema
- Environment variable configuration
- Error handling

## Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL database access
- Environment variables configured

## Installation

1. Clone or download this tool
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the project root
2. Add your database connection string:
   ```
   DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
   ```

## Usage

Run the application:
```bash
node index.js
```

The application will:
1. Connect to the database
2. Display the current database timestamp
3. List all tables in the public schema
4. Close the connection

## Dependencies

- `pg` (^8.16.3) - PostgreSQL client for Node.js
- `dotenv` (^17.2.3) - Environment variable loader


## Error Handling

The application includes proper error handling for:
- Connection failures
- Query execution errors
- Database access issues

## Support

If you have any questions or run into issues, please open an issue on GitHub.
