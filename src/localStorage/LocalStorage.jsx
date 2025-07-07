const userDetails = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 28,
    email: "rahul.sharma@example.com",
    password: "Rahul@123",
    position: "Frontend Developer",
    department: "Engineering",
    role: "employee"
  },
  {
    id: 2,
    name: "Priya Mehta",
    age: 32,
    email: "priya.mehta@example.com",
    password: "Priya@456",
    position: "Backend Developer",
    department: "Engineering",
    role: "employee"
  },
  {
    id: 3,
    name: "Amit Joshi",
    age: 35,
    email: "amit.joshi@example.com",
    password: "Amit@789",
    position: "Project Manager",
    department: "Operations",
    role: "employee"
  },
  {
    id: 4,
    name: "Sneha Patil",
    age: 27,
    email: "sneha.patil@example.com",
    password: "Sneha@321",
    position: "UI/UX Designer",
    department: "Design",
    role: "employee"
  },
  {
    id: 5,
    name: "Vikram Singh",
    age: 30,
    email: "vikram.singh@example.com",
    password: "Vikram@654",
    position: "QA Engineer",
    department: "Quality Assurance",
    role: "employee"
  },
  // Admin users
  {
    id: 6,
    name: "Admin One",
    age: 40,
    email: "admin.one@example.com",
    password: "AdminOne@123",
    position: "System Administrator",
    department: "IT",
    role: "admin"
  },
  {
    id: 7,
    name: "Admin Two",
    age: 38,
    email: "admin.two@example.com",
    password: "123",
    position: "HR Admin",
    department: "Human Resources",
    role: "admin"
  }
];

export const getUserDetails = () => {
  const userData = localStorage.getItem("userDetails");
  if (userData) {
    return JSON.parse(userData);
  } else {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    return userDetails;
  }
};