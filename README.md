#To install open terminal go to the folder then
## `npm install`

###open .env file and put your value for the env variable.


#To run type on terminal and press enter
## `npm run start:dev`


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



1. Part 01 - database and env file setup 
2. Part 02 - Setting up the modules

Mention below is the link for creating the module
https://docs.nestjs.com/recipes/crud-generator

cmd uses:-
nest g resource users --no-spec // This cmd will create the user CRUD module along with the dto and entities

3. Part 03 - Setting up the migrations in packagejson and data-source.ts file and setting up the global prefix and save data to db

cmd:  npm run migration:generate -- db/migrations/migrationNAme // To create the migration
      npm run migration:run // to run the migration


4. Part 04: Data validation with class validator & transformer

npm i --save class-validator class-transformer

5. Part 05: Password hashing and update user dto

         npm i jsonwebtoken @types/json
         npm i bcrypt

6. Part 06: AccessTOken and signIn API of user


@Injectable()
interface
NestMiddleware
Interceptor
guards()
decorators
PartialType
Transform
Expose 