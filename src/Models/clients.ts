export class Client {
  userId: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  role: string;
  isActive: boolean;
  id: string;

  constructor(
    userId: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    role: string,
    isActive: boolean,
    id: string
  ) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.role = role;
    this.isActive = isActive;
    this.id = id;
  }
}
