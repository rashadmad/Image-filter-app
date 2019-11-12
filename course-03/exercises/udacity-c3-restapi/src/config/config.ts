export const config = {
  "dev": {
    "username": "rashad",
    "password": "password",
    "database": "UdagramDB",
    "host": "udagram.ch8gy7qyddah.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
