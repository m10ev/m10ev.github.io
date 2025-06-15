## Михаил Тенев's Projects

# "Library Management System"

The Library Management System is a multi-interface software application built as a final course project for **Module 7: Software Development** in the National IT Career Program.

The system manages books, authors, library members, and borrowed book history through both a **console** and **web interface**.

**!This project is completed and serves as a portfolio example!**

---

# 📋 Project Features

- Console and ASP.NET Core MVC user interfaces
- Multi-layer architecture (Data, Business, Presentation)
- Seeding for testing/demo data
- Async CRUD operations using Entity Framework Core
- Custom UI with Razor views
- In-Memory database tests using NUnit

---

# 🧱 Architecture

1. **Data Layer**
   - Models: `Book`, `Author`, `Member`, `BorrowedBook`
   - Context: `LibraryDbContext`
   - Enum Support: `Genre`

2. **Business Layer**
   - Async CRUD logic for all models
   - Shared by both console and web interfaces

3. **Presentation Layer (Console)**
   - Display and Sub-Display classes for each entity
   - Input validation and console menus

4. **Web Interface**
   - Custom controllers and Razor views
   - No scaffolding used
   - JavaScript-based filters
   - Image display for authors
   - Search and filter by genre or ISBN

5. **Testing**
   - Unit tests with NUnit
   - Code coverage tracking
   - In-Memory EF Core for isolation

---

# 💻 Technologies

- **Languages:** C#, JavaScript
- **Frameworks:** ASP.NET Core MVC, Entity Framework Core
- **Testing:** NUnit, In-Memory DB, Coverlet
- **IDE:** Visual Studio 2022
- **Version Control:** GitHub

---

# 📷 Gallery

![Console View](/images/console-menu.png)
*Main menu of the console application.*

![Books View](/images/books-page.png)
*ASP.NET MVC books page with search and CRUD.*

![Author Page](/images/author-details.png)
*Detailed author page with biography and image.*

---

# 🚀 Future Improvements

- Add user authentication and role management
- Implement Windows Forms UI
- Online borrowing and availability checking
- Extend test coverage to full feature set

---

# 📌 Links

- [National Program Site](https://it-kariera.mon.bg)
- [Ministry of Education](https://www.mon.bg)
- [GitHub Repository](https://github.com/YOUR_USERNAME/library-project)

---

# ✅ Conclusion

This project was an excellent opportunity to apply real-world skills with .NET, EF Core, and multi-layer architecture. It demonstrates clean structure, UI flexibility, and practical testing — a solid example of a scalable software system.
