# sls-vpc  

Deploy serveress functions in a VPC

## Discussion

For set up, use the vpc.yml cloudformation template to install a vpc if you don't have one. Grab the two private subnet ids created via the template, and the default security group, and bang them into `serverless.yml`.

Prior deployment, you also need to install the IAM policies and role via create-iam-stash.sh. Export LAMBDA_ROLE_ARN set to the ARN of the role created by the script.

Then, deploy and call the function:

```console
sls deploy --aws-profile <your profile>

sls invoke -f hello -l --aws-profile <your profile>
```

## Caveats

Note that placing the Lambda in a VPC uses an EC2 ENI under the covers. This can make the delete of the stack very slow.