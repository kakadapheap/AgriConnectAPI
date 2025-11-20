export interface RegisterUserInput {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    role?: "admin" | "farmer";
}