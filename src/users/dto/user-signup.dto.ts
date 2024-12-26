import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserSignUp {
    @IsNotEmpty({message: 'Name can not be Empty !'})
    @IsString({message: 'Name should be String'})
    name: string;
    @IsNotEmpty({message: 'Email can not be Empty !'})
    @IsEmail({},{message: 'Please provide valid Email'})
    email: string;

    @IsNotEmpty({message: 'Password can not be Empty !'})
    @MinLength(5, {message: 'Password minimum character should be 5'})
    password: string;
}