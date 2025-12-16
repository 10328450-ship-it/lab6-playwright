const { test, expect } = require('@playwright/test');

// --- E2E ТЕСТИ (Перевірка функціоналу) ---

test('1. Головна сторінка: Перевірка заголовка', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Локальна сторінка');
});

test('2. Навігація: Перехід на сторінку контактів', async ({ page }) => {
  await page.goto('/');
  await page.click('#contact-link');
  await expect(page).toHaveURL(/contact.html/);
});

test('3. Контакти: Успішна відправка форми', async ({ page }) => {
  await page.goto('/contact.html');
  await page.fill('#email', 'student@test.com');
  await page.click('#sendBtn');
  await expect(page.locator('#successMessage')).toBeVisible();
});

test('4. Зовнішній сайт: Вікіпедія (Playwright)', async ({ page }) => {
  await page.goto('https://uk.wikipedia.org/');
  // Перевіряємо заголовок сторінки - це працює на будь-якому пристрої
  await expect(page).toHaveTitle(/Вікіпедія/);
});

test('Цей тест спеціально має впасти', async () => {
  // Ми вимагаємо, щоб "правда" була "брехнею". Це завжди помилка.
  expect(true).toBe(false); 
});