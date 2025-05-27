import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg) scale(1)'
					},
					'25%': {
						transform: 'translateY(-15px) rotate(5deg) scale(1.05)'
					},
					'50%': {
						transform: 'translateY(-25px) rotate(0deg) scale(1)'
					},
					'75%': {
						transform: 'translateY(-15px) rotate(-5deg) scale(1.05)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg)'
					},
					'50%': {
						transform: 'translateY(-30px) rotateX(180deg)'
					}
				},
				'spin-slow': {
					'0%': {
						transform: 'rotate(0deg) scale(1)'
					},
					'50%': {
						transform: 'rotate(180deg) scale(1.1)'
					},
					'100%': {
						transform: 'rotate(360deg) scale(1)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 20px #8b5cf6, 0 0 40px #8b5cf6, 0 0 60px #8b5cf6',
						transform: 'scale(1.05)'
					}
				},
				'gradient-shift': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'rotate-3d': {
					'0%': {
						transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
					},
					'33%': {
						transform: 'rotateX(15deg) rotateY(15deg) rotateZ(0deg)'
					},
					'66%': {
						transform: 'rotateX(0deg) rotateY(15deg) rotateZ(15deg)'
					},
					'100%': {
						transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
					}
				},
				'bounce-3d': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg) scale(1)'
					},
					'50%': {
						transform: 'translateY(-20px) rotateX(10deg) scale(1.1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'rotate-3d': 'rotate-3d 10s ease-in-out infinite',
				'bounce-3d': 'bounce-3d 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'tech-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'cyber-gradient': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
				'neon-gradient': 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #3a86ff 100%)'
			},
			perspective: {
				'1000': '1000px',
				'1500': '1500px',
				'2000': '2000px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
