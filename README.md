# Automated CI/CD Pipeline

A simple Node.js web application demonstrating an automated Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions and Vercel.

## Project Overview

This project automatically deploys the web application whenever new code is pushed to the `main` branch.

### Technology Stack

- Node.js
- Express.js
- GitHub
- GitHub Actions
- Vercel

## CI/CD Workflow

```text
Developer
   |
   | git push
   v
GitHub Repository
   |
   | Push to main
   v
GitHub Actions
   |
   | Install dependencies
   | Build project
   | Deploy
   v
Vercel
   |
   v
Live Application
