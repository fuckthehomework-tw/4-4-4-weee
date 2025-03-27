module.export={
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [require("daisyui")], // ← 這裡加入 daisyUI
};
