module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "application-bg-img":
          "url('https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fGVjb21tZXJjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
      }),
      colors: {
        "light-blue": "#178fac",
        "main-pink": "#eb7f82",
        "bg-white": "#f5f6f7",
      },
      zIndex: {
        "-10": "-10",
        40: "40",
        50: "50",
        100: "100",
      },
      width: {
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "100px": "100px",
        "200px": "200px",
        "220px": "220px",
        "300px": "300px",
        "500px": "500px",
      },
      padding: {
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "80px": "80px",
        "90px": "90px",
        "100px": "100px",
      },
      margin: {
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "730px": "730px",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "90vh": "90vh",
      },
      height: {
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "730px": "730px",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "90vh": "90vh",
      },
      minHeight: {
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "300px": "300px",
        "730px": "730px",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      maxWidth: {
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "300px": "300px",
        "730px": "730px",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "1000px": "1000px",
        screen: "1000px",
      },
      maxHeight: {
        0: "0px",
        auto: "100%",
      },
      margin: {
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "80px": "80px",
        "90px": "90px",
        "100px": "100px",
      },
      inset: {
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "80px": "80px",
        "90px": "90px",
        "100px": "100px",
      },
      minWidth: {
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "80px": "80px",
        "90px": "90px",
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "350px": "350px",
      },
      maxWidth: {
        "220px": "220px",
        "300px": "300px",
        "350px": "350px",
        "760px": "760px",
        "1200px": "1200px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
