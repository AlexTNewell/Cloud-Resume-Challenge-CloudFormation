# CLOUD-RESUME-CHALLENGE
## Introduction
The Cloud Resume Challenge is a series of challenges, each of which enhances your AWS knowledge and provides an opportunity to showcase technical experience in using AWS. The main goal is to create and deploy a static website hosting a resume.

Full details can be found here: https://cloudresumechallenge.dev/docs/the-challenge/aws/

A useful guide to the challenge has been provided here: https://www.youtube.com/watch?v=e7vZe7qZFmE&list=PLEk97Q5Nj5oesA1WNk7DzaUpZUnCsQFVQ

## Skills and Technologies Used:
* Software Development (Frontend / Backend)
* IaC (Infrastructure as Code) using CloudFormation, SAM, CDK
* CI/CD (GiutHub Actions)
* Serverless Architecture on AWS (Lambda, API Gateway, DynamoDB, S3)
* Security (IAM, bucket policies, API authentication/authorization)
* Networking (DNS using Route53)

## Phase 1 - Certification
* First challenge is to complete AWS Cloud Practitioner certification exam.
* I successfully passed the exam on Feb 27, 2023

## Phase 2 - Creating the Front End

*All AWS resources should be deployed using the template.yaml as a part of Infrastructure as Code requirement.*

1. Build the visual representation of resume using plain HTML, CSS and JavaScript.
2. Using AWS Vault and SAM deploy the HTML, CSS and JavaScript to an S3 bucket. The S3 website URL should use HTTPS for security.
3. Point a custom DNS domain name to the CloudFront distribution.

## Phase 3 - Creating the Back End
1. Deploy a DynamoDB table. This will store a website visitor-count. 
2. Use AWS API Gateway and AWS Lambda to create an API that accepts requests from your web app and communicates with the database to return the visitor-count value. 
3. Use Javascript to fetch the API and in so doing, the visitor-count value. 

## Phase 4 - Automation & Testing
1. Create a GitHub repository for your code.
2. Write an integration test for your Python code.
3. Set up GitHub Actions such that when you push an update to your Serverless Application Model template, your tests are run. 
