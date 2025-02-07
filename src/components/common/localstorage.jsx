import React from 'react';

const employees = [
    {
      id: 1,
      name: "Aditya",
      email: "jeet@gmail.com",
      password: "123",
      tasks: [
        {
          title: "Project Report Submission",
          description: "Submit the final project report to the manager.",
          date: "2025-02-01",
          category: "Documentation",
          active: true,
          newtask: false,
          completed: false,
          failed: false
        },
        {
          title: "Client Meeting",
          description: "Attend a meeting with the client regarding project updates.",
          date: "2025-02-02",
          category: "Meeting",
          active: true,
          newtask: true,
          completed: false,
          failed: false
        },
        {
          title: "Code Review",
          description: "Review the newly submitted code by the development team.",
          date: "2025-02-03",
          category: "Development",
          active: false,
          newtask: false,
          completed: true,
          failed: false
        },
        {
          title: "Video Editiing",
          description: "Video Editing for Promotional Video.",
          date: "2025-02-03",
          category: "Editing",
          active: false,
          newtask: true,
          completed: true,
          failed: false
        }
      ],
      taskCounts: {
        active: 2,
        newtask: 1,
        completed: 2,
        failed: 0
      }
    },
    {
      id: 2,
      name: "Priya",
      email: "priyanka@gmail.com",
      password: "123",
      tasks: [
        {
          title: "Database Optimization",
          description: "Optimize the database queries for better performance.",
          date: "2025-02-04",
          category: "Database",
          active: true,
          newtask: false,
          completed: false,
          failed: false
        },
        {
          title: "Security Audit",
          description: "Perform a security audit for the system.",
          date: "2025-02-05",
          category: "Security",
          active: false,
          newtask: false,
          completed: true,
          failed: false
        },
        {
          title: "Deploy New Update",
          description: "Deploy the latest update to the production server.",
          date: "2025-02-06",
          category: "Deployment",
          active: false,
          newtask: true,
          completed: false,
          failed: true
        },
        {
          title: "Develope an EMS",
          description: "Develope the EMS(Employee Task Mangament System).",
          date: "2025-02-06",
          category: "Development",
          active: true,
          newtask: true,
          completed: false,
          failed: false
        }
      ],
      taskCounts: {
        active: 2,
        newtask: 2,
        completed: 1,
        failed: 1
      }
    },
    {
      id: 3,
      name: "Nanda",
      email: "nandani@gmail.com",
      password: "123",
      tasks: [
        {
          title: "Bug Fixing",
          description: "Fix reported bugs in the application.",
          date: "2025-02-07",
          category: "Development",
          active: true,
          newtask: true,
          completed: false,
          failed: false
        },
        {
          title: "Testing API Endpoints",
          description: "Test all API endpoints to ensure functionality.",
          date: "2025-02-08",
          category: "Testing",
          active: false,
          newtask: false,
          completed: true,
          failed: false
        },
        {
          title: "Create Printrest Clone",
          description: "Develope a Printrest clone.",
          date: "2025-02-12",
          category: "Development",
          active: true,
          newtask: true,
          completed: false,
          failed: false
        },
        {
          title: " Prepare Presentation ",
          description: "Make a final presentaion for the project.",
          date: "2025-02-10",
          category: "Presentation",
          active: false,
          newtask: true,
          completed: false,
          failed: false
        }
      ],
      taskCounts: {
        active: 2,
        newtask: 2,
        completed: 1,
        failed: 0
      }
    },
    {
      id: 4,
      name: "Sneha",
      email: "sneha@gmail.com",
      password: "123",
      tasks: [
        {
          title: "Create UI Design",
          description: "Design a new UI layout for the admin dashboard.",
          date: "2025-02-09",
          category: "UI/UX",
          active: true,
          newtask: true,
          completed: false,
          failed: false
        },
        {
          title: "Refactor Codebase",
          description: "Refactor old code for better readability and efficiency.",
          date: "2025-02-10",
          category: "Development",
          active: false,
          newtask: false,
          completed: true,
          failed: false
        },
        {
          title: "Arrange meeting",
          description: "Fix meeting with the clients.",
          date: "2025-02-04",
          category: "Meeting",
          active: false,
          newtask: false,
          completed: true,
          failed: false
        },
        {
          title: "Code Testing",
          description: "Refine the code.",
          date: "2025-02-14",
          category: "Testing",
          active: false,
          newtask: true,
          completed:false,
          failed: false
        }
      ],
      taskCounts: {
        active: 1,
        newtask: 2,
        completed: 2,
        failed: 0
      }
    },
    {
      id: 5,
      name: "Vikas",
      email: "vikas@gmail.com",
      password: "123",
      tasks: [
        {
          title: "Server Maintenance",
          description: "Perform routine maintenance on the production server.",
          date: "2025-02-11",
          category: "IT Support",
          active: false,
          newtask: false,
          completed: true,
          failed: false
        },
        {
          title: "Write Technical Documentation",
          description: "Write documentation for the new API services.",
          date: "2025-02-12",
          category: "Documentation",
          active: false,
          newtask: true,
          completed: false,
          failed: true
        },

        {
          title: "Hire Interns",
          description: "Hire Interns for Frontend development.",
          date: "2025-02-15",
          category: "Hiring",
          active: false,
          newtask: true,
          completed: false,
          failed: false
        },
        {
          title: "Fix Interview",
          description: "Fix interview of new interns with HR.",
          date: "2025-02-18",
          category: "Meeting",
          active: false,
          newtask: true,
          completed: false,
          failed: false
        }
      ],
      taskCounts: {
        active: 0,
        newtask: 3,
        completed: 1,
        failed: 1
      }
    }
  ];
  

  
      const admins = [
        {
          id: 1,
          name:"Admin",
          email: "admin@me.com",
          password: "123"
        }
      ];
      
 export const setlocalstorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admins',JSON.stringify(admins));
}
export const getlocalstorage=()=>{
let employees=JSON.parse(localStorage.getItem('employees'));
let admins=JSON.parse(localStorage.getItem('admins'));
return {employees,admins};
}



