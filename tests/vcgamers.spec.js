import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.vcgamers.com/");
});

test("Search product", async ({ page }) => {
  const todo = page.getByPlaceholder("placholder");
  await todo.click();
  await todo.fill("netflix");
  await todo.press("Enter");

  await page.locator('//*[@id="__layout"]/div/div[3]/div[1]/div/div[4]/div[1]/div[1]/a').click();
});

test("Voucher Filter", async ({ page }) => {
  await page.locator('//*[@id="__layout"]/div/div[1]/header/div[1]/div[2]/ul/li[3]').click();

  await page.locator('//*[@id="__layout"]/div/div[3]/div/div/div[2]/div[2]/div/div[2]/a[1]').click();

  await page.locator('//*[@id="items-filter-sort"]').selectOption("terlaris");
});

test("Login with Invalid Account", async ({ page }) => {
  await page.getByRole("link", { name: "Masuk / Daftar" }).click();
  await expect(
    page.getByRole("heading", { name: "Selamat Datang" })
  ).toBeVisible();

  const email = page.getByRole("textBox", { name: "Email" });
  await email.click();
  await email.fill("amdharisrfn16@gmail.com");

  const pass = page.getByRole("textBox", { name: "Password" });
  await pass.click();
  await pass.fill("password123");

  await page.getByRole("button", { name: /masuk/i }).click();
  await expect(page.getByText("Email atau password anda salah.")).toBeVisible();
});

test('Open News', async ({ page }) => {
  const news = page.locator('//*[@id="__layout"]/div/div[3]/div[2]/footer/div/div[2]/div[1]/div[1]/div[2]/div/ul/li[2]/a');

  await news.scrollIntoViewIfNeeded();
  await news.click();
});