dev:
	# Start development server based on production dev mode
	dotenv -e vercel.env.prod -- vercel dev 

env-dev:
	# Pull production dev env vars
	dotenv -e vercel.env.prod -- vercel env pull

deploy-staging:
	# Deploy to staging
	dotenv -e vercel.env.staging -- vercel --prod

deploy-prod:
	# Deploy to production
	dotenv -e vercel.env.prod -- vercel --prod