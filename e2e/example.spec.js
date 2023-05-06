// @ts-check
import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = 'http://127.0.0.1:5173/'
const CAT_PREFIX_IMG_URL = 'https://cataas.com/'

test('App show random facts and images', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageContent = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageContent?.startsWith(CAT_PREFIX_IMG_URL)).toBeTruthy
})
