# sls-vpc  

Deploy serveress functions in a VPC

## Discussion

For set up, use the vpc.yml cloudformation template to install a vpc if you don't have one. Grab the two private subnet ids created via the template, and the default security group, and bang them into `serverless.yml`.

Then, deploy and call the function:

```console
sls deploy --aws-profile <your profile>

sls invoke -f hello -l --aws-profile <your profile>
```
