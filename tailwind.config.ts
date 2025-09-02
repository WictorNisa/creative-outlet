import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'circular-web': ['"circular-web"', 'sans-serif'],
                'general': ['"general"', 'sans-serif'],
                'robert-medium': ['"robert-medium"', 'sans-serif'],
                'robert-regular': ['"robert-regular"', 'sans-serif'],
                'zentry-regular': ['"zentry-regular"', 'sans-serif'],
            },
            colors: {
                blue: {
                    50: '#DFDFF0',
                    75: '#DFDFF2',
                    100: '#F0F2FA',
                    200: '#F010101',
                    300: '#4FB7DD',
                },
                violet: {
                    300: '#5724FF'
                },
                yellow: {
                    100: '#8EE983F',
                    300: '#EDFF66'
                }
            },
        },
    },
    plugins: [],
}

export default config
