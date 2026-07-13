export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
  lastLogin: string;
}

const users: User[] = [
  {
    id: 1,
    name: "John Carter",
    email: "john@soc.ai",
    role: "SOC Analyst",
    department: "SOC",
    status: "Active",
    lastLogin: "2 mins ago",
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice@soc.ai",
    role: "Threat Hunter",
    department: "Blue Team",
    status: "Active",
    lastLogin: "15 mins ago",
  },
  {
    id: 3,
    name: "David Lee",
    email: "david@soc.ai",
    role: "IR Manager",
    department: "Incident Response",
    status: "Offline",
    lastLogin: "Yesterday",
  },
  {
    id: 4,
    name: "Sophia Adams",
    email: "sophia@soc.ai",
    role: "Administrator",
    department: "Security",
    status: "Active",
    lastLogin: "1 min ago",
  },
];

export async function getUsers() {
  return Promise.resolve(users);
}