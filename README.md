# athulrajagopal.dev

Here lies all the code for my personal site! 💻


### What I used to make it:
- Next.js
- React
- CSS Modules
- And a _pinch_ of Node for a mail microservice

## Running the Project Locally

Once you've cloned the repository, run the following commands:
```
npm i
npm run dev
```
And that's it! You should see the site hosted on `localhost:3000`. For more information about using Next.js, see the [documentation](https://nextjs.org/docs).

**Note:** Inside `pages/api/contact.js` you will see the setup for the mail microservice which lets me receive contact form submissions to my email. This will only work if you have a `.env.local` file with the username and password of the email you want to send to. To understand how Next.js handles environment variables check out [this link](https://nextjs.org/docs/basic-features/environment-variables).
