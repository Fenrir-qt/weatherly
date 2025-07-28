# Weatherly

Weatherly is a simple web app that lets you search for the current weather in any location using the [WeatherAPI](https://www.weatherapi.com/).

## Features

- Search weather by city or location name
- Responsive UI built with Tailwind CSS
- Weather data fetched securely via a Vercel serverless function (API route)
- API key is kept secret using Vercel environment variables

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Fenrir-qt/weatherly.git
cd weatherly
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your WeatherAPI key

- Sign up at [weatherapi.com](https://www.weatherapi.com/) and get your API key.
- In development, create a `.env` file in the root:

  ```
  WEATHER_API_KEY=your_api_key_here
  ```

- On Vercel, add `WEATHER_API_KEY` in your project settings under **Environment Variables**.

### 4. Run locally

```bash
npm run dev
```

### 5. Build Tailwind CSS (if needed)

```bash
npx tailwindcss -i ./css/style.css -o ./css/output.css --watch
```

## Deployment

- Deploy to [Vercel](https://vercel.com/) for free.
- Make sure to set the `WEATHER_API_KEY` environment variable in your Vercel dashboard.

## Project Structure

```
frontend/
  index.html
  css/
    style.css
    output.css
  script/
    script.js
api/
  weather.js        # Vercel serverless function (API route)
tailwind.config.js
```

## Security

- The WeatherAPI key is **never exposed to the frontend**. All API requests are proxied through the `/api/weather` serverless function.

## Acknowledgements

- [WeatherAPI](https://www.weatherapi.com/) for the weather data.
- [Vercel](https://vercel.com/) for serverless deployment.
- [Tailwind CSS](https://tailwindcss.com/) for the responsive design.
