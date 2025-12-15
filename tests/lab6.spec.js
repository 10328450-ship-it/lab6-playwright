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

// --- SCREENSHOT ТЕСТИ (Перевірка зовнішнього вигляду) ---

test('5. Visual: Вигляд сторінки контактів', async ({ page }) => {
  await page.goto('/contact.html');
  // Робимо скріншот і порівнюємо з еталоном
  await expect(page).toHaveScreenshot('contact-full.png');
});

test('6. Visual: Вигляд кнопки Надіслати', async ({ page }) => {
  await page.goto('/contact.html');
  const btn = page.locator('#sendBtn');
  // Скріншот тільки кнопки
  await expect(btn).toHaveScreenshot('button-blue.png');
});